import AlbumsSlider from '@/components/AlbumsSlider/AlbumsSlider';
import DefaultImg from '@/components/Atoms/Img/default.jpg';
import useTranslation from '@/hooks/use-translate';
import FrontLayout from '@/layouts/front/FrontLayout';
import { BandShowProps } from '@/types';
import { Link } from '@inertiajs/react';

import 'swiper/css';
import 'swiper/css/navigation';
export default function Show({ band }: BandShowProps) {
    const { labels } = useTranslation();
    const { albums = [], people = [] } = band;
    return (
        <FrontLayout>
            <div className="mx-auto max-w-6xl py-5">
                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="mx-auto h-34 w-64 overflow-hidden md:mx-0">
                        <img src={band.logo ?? DefaultImg} alt={band.name} className="w-full" />
                    </div>
                    <div className="px-5 md:px-0">
                        <h1 className="text-center">{band.name}</h1>
                        <div className="mt-3 flex flex-col gap-2">
                            <p>
                                <strong>{labels.still_active}:</strong> {band.still_active ? 'yes' : 'no'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl py-5">
                {band?.description && (
                    <>
                        <h2>{labels.description}</h2>
                        <div dangerouslySetInnerHTML={{ __html: band.description }} />
                    </>
                )}
            </div>
            {albums.length > 0 && (
                <div className="mx-auto max-w-6xl py-5">
                    <h2>{labels.dyscography}</h2>
                    <AlbumsSlider albums={band.albums || []} />
                </div>
            )}
            {people.length > 0 && (
                <div className="mx-auto max-w-6xl py-5">
                    <h2>{labels.people}</h2>
                    <div className='flex flex-wrap'>
                        {(band.people || []).map((person) => {
                            return(
                                <Link href={route('person.show', {'person': person.slug})}>
                                    <div className='w-40 h-40 overflow-hidden duration-300 hover:scale-105'>
                                        <img src={person.img} className='h-full w-full object-cover'/>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </FrontLayout>
    );
}
