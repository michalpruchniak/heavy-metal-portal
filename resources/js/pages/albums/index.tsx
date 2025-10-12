import ButtonLink from '@/components/Button/ButtonLink';

import AlbumElement from '@/components/AlbumElement/AlbumElement';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Album, BandAlbumsProps } from '@/types';
import { Head } from '@inertiajs/react';
import usePermissions from '@/hooks/usePermissions';
import PermissionEnum from '@/enums/PermissionEnum';

export default function Index({ bandAlbums }: BandAlbumsProps) {
    const { hasPermission } = usePermissions();


    const { labels, buttons } = useTranslation();
    const breadcrumbs = [
        {
            title: labels.bands,
            href: route('bands.index'),
        },
        {
            title: `Band: ${bandAlbums.name}`,
            href: route('bands.index', { band: bandAlbums.id }),
        },
        {
            title: `Albums`,
            href: route('bands.albums.index', { band: bandAlbums.slug }),
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Albums" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{labels.albums}</h1>
                {hasPermission(PermissionEnum.ALBUMS_CREATE) &&                <div className="flex justify-end">
                    <ButtonLink url={route('bands.albums.create', { band: bandAlbums.slug })} variant="primary">
                        {buttons.add_new_album}
                    </ButtonLink>
                </div>}
                <div className="flex flex-wrap gap-4">
                    {bandAlbums.albums.map((album: Album) => {
                        return (
                            <AlbumElement
                                key={album.id}
                                album={album}
                                url={route('bands.albums.edit', { band: album.band_slug, album: album.slug })}
                            />
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
