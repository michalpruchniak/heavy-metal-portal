import { AlbumsSliderProps } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AlbumElement from '../AlbumElement/AlbumElement';

const AlbumsSlider = ({ albums, label = '' }: AlbumsSliderProps) => {
    if (albums.length === 0) {
        return;
    }

    return (
        <div className="mx-auto max-w-6xl py-5">
            <h2>{label}</h2>
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
                {albums.map((album) => {
                    return (
                        <SwiperSlide key={album.id}>
                            <AlbumElement album={album} url={route('album.show', { album: album.slug })} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default AlbumsSlider;
