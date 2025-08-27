import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AlbumElement from '../AlbumElement/AlbumElement';
import { Album } from '@/pages/albums/__types/types';
import { ReceiptPoundSterling } from 'lucide-react';

const AlbumsSlider = ({albums}: any) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={5}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                },
            }}
        >
            {albums.map((album: Album) => {
                return <SwiperSlide>
                    <AlbumElement album={album} url={route('album.show', {album: album.slug})} />
                </SwiperSlide>
            })}

        </Swiper>
    );
};

export default AlbumsSlider;
