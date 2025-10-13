import FrontLayout from '@/layouts/front/FrontLayout';
import useTranslation from '@/hooks/use-translate';

import { Album, AlbumFrontPage } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';
import AlbumElement from '@/components/AlbumElement/AlbumElement';
import Pagination from '@/components/Pagination/Pagination';

export default function Index({ albums }: AlbumFrontPage) {
    const { labels } = useTranslation();
    return (
        <FrontLayout>

            <div className="mx-auto max-w-6xl py-5">
            <h1>{labels.albums}</h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-center">
                    {albums.data.map((album: Album) => {
                        return (
                            <AlbumElement
                                key={album.id}
                                album={album}
                                url={route('album.show', {album: album.slug})}
                            />
                        );
                    })}
                </div>
                <Pagination links={albums.links} />

            </div>

        </FrontLayout>
    );
}
