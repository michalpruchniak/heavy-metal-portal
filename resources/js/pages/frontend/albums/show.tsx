import AlbumsSlider from '@/components/AlbumsSlider/AlbumsSlider';
import DefaultImg from '@/components/Atoms/Img/default.jpg';
import FrontLayout from '@/layouts/front/FrontLayout';

import { AlbumShowProps } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';
export default function Show({ album, albums }: AlbumShowProps) {
    return (
        <FrontLayout>
            <div className="mx-auto max-w-6xl py-5">
                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="mx-auto h-64 w-64 overflow-hidden rounded-lg md:mx-0">
                        <img src={album.cover ?? DefaultImg} alt={album.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="px-5 md:px-0">
                        <h1 className="text-center">{album.name}</h1>
                        <div className="mt-3 flex flex-col gap-2">
                            {album?.band && (
                                <p>
                                    <strong>Band:</strong> {album.band.name}
                                </p>
                            )}
                            {album?.publisher && (
                                <p>
                                    <strong>Publisher:</strong> {album.publisher.name}
                                </p>
                            )}
                            {album?.release_date && (
                                <p>
                                    <strong>Release date:</strong> {album.release_date}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl py-5">
                {album?.description && (
                    <>
                        <h2>Description</h2>
                        <div dangerouslySetInnerHTML={{ __html: album.description }} />
                    </>
                )}
            </div>
            {albums.length > 0 && (
                <div className="mx-auto max-w-6xl py-5">
                    <h2>Other albums</h2>
                    <AlbumsSlider albums={albums} />
                </div>
            )}
        </FrontLayout>
    );
}
