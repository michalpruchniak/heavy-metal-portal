import { useForm } from '@inertiajs/react';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FrontLayoutProps } from '@/types';
import Nav from './__partials/__sections/nav/Nav';
import InputText from '@/components/Input/InputText';
import useTranslation from '@/hooks/use-translate';
import DefaultImg from '@/components/Atoms/Img/default.jpg';

interface Band {
    id: number;
    logo: string;
    name: string;
}

interface Album {
    id: number;
    name: string;
    band: Band;
    cover:string;
}

const FrontLayout = ({ children }: FrontLayoutProps) => {
    const { labels } = useTranslation();

    const { data, setData, errors } = useForm({
        name: '',
    });

    const [debouncedName] = useDebounce(data.name, 400);

    const [bands, setBands] = useState<Band[]>([]);
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        if (debouncedName.length === 0) {
            setBands([]);
            setAlbums([]);
            return;
        }

        axios
            .get(route('search', { text: debouncedName }))
            .then((response) => {
                setBands(response.data.bands || []);
                setAlbums(response.data.albums || []);
            })
            .catch((error) => console.error(error));
    }, [debouncedName]);

    return (
        <>
            <div className='fixed w-full h-full bg-white/80 dark:bg-black/80 z-50 p-4'>
                <InputText
                    label={labels.name}
                    required
                    value={data.name}
                    onChange={(e) => setData('name', e)}
                    error={errors.name}
                />

                {debouncedName && (
                    <div className="mt-4 p-4 rounded shadow max-h-96 overflow-auto">
                        <h3 className="font-bold mb-2">Bands</h3>
                        <div className='flex flex-wrap'>
                            {bands.map((band) => (
                                <div key={band.id}>
                                    <img src={band?.logo ?? DefaultImg} alt="Logo" className="h-20 w-20 object-contain" />
                                </div>
                            ))}
                        </div>

                        <h3 className="font-bold mt-4 mb-2">Albums</h3>
                        <ul>
                            {albums.map((album) => (
                            <div className="group relative h-[130px] w-[130px] transform overflow-hidden border transition-transform duration-300 hover:scale-105">

                            <img src={album.cover ?? DefaultImg} alt={album.name} className="h-full w-full object-cover" />
                                </div>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <Nav />
            {children}
        </>
    );
};

export default FrontLayout;
