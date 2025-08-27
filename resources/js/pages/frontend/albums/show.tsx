import AlbumsSlider from '@/components/AlbumsSlider/AlbumsSlider';
import FrontLayout from '@/layouts/front/FrontLayout';
import DefaultImg from '@/components/Atoms/Img/default.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import { AlbumShowProps } from '@/types';
export default function Show({album, albums}: AlbumShowProps ) {
    return (
        <FrontLayout>
            <div className="mx-auto max-w-6xl py-5">
                <div className='flex flex-col md:flex-row gap-3'>
                <div className="w-64 h-64 overflow-hidden rounded-lg mx-auto md:mx-0">
                    <img
                        src={album.cover ?? DefaultImg}
                        alt={album.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                    <div className=' px-5 md:px-0'>
                        <h1 className='text-center'>{album.name}</h1>
                        <div className='flex flex-col gap-2 mt-3'>
                            {album?.band && <p><strong>Band:</strong> {album.band.name}</p>}
                            {album?.publisher && <p><strong>Publisher:</strong> {album.publisher.name}</p>}
                            {album?.release_date && <p><strong>Release date:</strong> {album.release_date}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl py-5">
                {album?.description && <><h2>Description</h2><div dangerouslySetInnerHTML={{ __html: album.description }} /></>}
            </div>
            {albums.length > 0 && <div className="mx-auto max-w-6xl py-5">
                <h2>Other albums</h2>
                <AlbumsSlider albums={albums} />
            </div>}
        </FrontLayout>
    );
}
