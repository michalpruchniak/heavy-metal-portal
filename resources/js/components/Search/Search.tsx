import InputText from '@/components/Input/InputText';
import { useFront } from '@/contexts/FrontContext';
import useTranslation from '@/hooks/use-translate';
import { Album, Band } from '@/types';
import { useForm } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import SearchResult from './__partials/components/SearchResult';

const Search = () => {
    const { labels } = useTranslation();
    const { data, setData, errors } = useForm({
        name: '',
    });

    const [debouncedName] = useDebounce(data.name, 400);
    const [bands, setBands] = useState<Band[]>([]);
    const [albums, setAlbums] = useState<Album[]>([]);

    const { isOpenSearch, closeSearch } = useFront();

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
        <div
            className={`fixed inset-0 z-50 h-full w-full bg-white/80 p-4 transition-all duration-300 dark:bg-black/80 ${
                isOpenSearch ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'
            }`}
        >
            <button
                onClick={closeSearch}
                className="absolute top-4 right-4 cursor-pointer text-3xl font-bold text-black transition-transform hover:scale-110 dark:text-white"
                aria-label="Close search"
            >
                &times;
            </button>
            <div className="mt-20 flex w-full">
                <div className="w-full">
                    <InputText label={labels.name} value={data.name} onChange={(e) => setData('name', e)} error={errors.name} />

                    {debouncedName && (
                        <div className="mt-4 h-full overflow-auto rounded p-4 shadow">
                            <SearchResult results={bands} variant="bands" />
                            <SearchResult results={albums} variant="albums" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
