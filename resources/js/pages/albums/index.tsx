import ButtonLink from '@/components/Button/ButtonLink';

import DefaultImg from '@/components/Atoms/Img/default.jpg';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ bandAlbums }: any) {
    const { labels, buttons } = useTranslation();
    const breadcrumbs = [
        {
            title: labels.bands,
            href: route('bands.index'),
        },
        {
            title: bandAlbums.name,
            href: route('albums.index', {band: bandAlbums.id}),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Albums" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{labels.albums}</h1>
                <div className="flex justify-end">
                    <ButtonLink url={route('bands.create')} variant="primary">
                        {buttons.add_new_album}
                    </ButtonLink>
                </div>
                <div className="flex flex-wrap gap-4">
                    {bandAlbums.albums.map((album: any) => {
                        return (
                            <Link href={route('albums.edit',{band: album.band_id, album: album.id})}>
                            <div className="group relative h-[220px] w-[220px] transform overflow-hidden border transition-transform duration-300 hover:scale-105">
                                <img src={album.cover ?? DefaultImg} alt={album.name} className="h-full w-full object-cover" />
                                <div className="absolute bottom-[-30px] h-[40%] w-full bg-[rgba(0,0,0,0.6)] p-2 text-white transition-all duration-300 group-hover:bottom-0">
                                    <h3 className="text-[15px] font-bold">{album.name}</h3>
                                    {album.release_date && <small>{album.release_date}</small>}
                                </div>
                            </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
