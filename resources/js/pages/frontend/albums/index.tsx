import useTranslation from '@/hooks/use-translate';
import FrontLayout from '@/layouts/front/FrontLayout';

import AlbumElement from '@/components/AlbumElement/AlbumElement';
import Pagination from '@/components/Pagination/Pagination';
import { Album, AlbumFrontPage } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Index({ albums }: AlbumFrontPage) {
    const { labels } = useTranslation();
    return (
        <FrontLayout>
            <div className="mx-auto max-w-6xl py-5">
                <h1>{labels.albums}</h1>

                <div className="mt-3 flex flex-wrap justify-center gap-4 text-center md:justify-start">
                    {albums.data.map((album: Album) => {
                        return <AlbumElement key={album.id} album={album} url={route('album.show', { album: album.slug })} />;
                    })}
                </div>
                <Pagination links={albums.links} />
            </div>
        </FrontLayout>
    );
}
