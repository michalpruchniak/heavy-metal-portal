import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AlbumsSlider = () => {
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
            <SwiperSlide>
                <img src="https://tuonelamagazine.com/wp-content/uploads/2025/04/Epica-Aspiral.jpg" className="h-[200px] w-[200px]" />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/6/6e/The_Halo_Effect_-_March_of_the_Unheard.png"
                    className="h-[200px] w-[200px]"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://upload.wikimedia.org/wikipedia/en/3/34/Primitive.png" className="h-[200px] w-[200px]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.metalnews.pl/images/2025/03/Hate-album-Bellum-Regiis.jpg.webp" className="h-[200px] w-[200px]" />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://independentmusicmarket.com/58411-medium_default/iron-maiden-the-number-of-the-beast-cd.jpg"
                    className="h-[200px] w-[200px]"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://m.media-amazon.com/images/I/61T81lF9meL._UF1000,1000_QL80_.jpg" className="h-[200px] w-[200px]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://knockoutmusicstore.pl/images/2950/bla00005_metallica_killemall_cd_eco.jpeg" className="h-[200px] w-[200px]" />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://cdn-images.dzcdn.net/images/cover/2797e265f66e5e780dbd374f2e69ae7e/0x1900-000000-80-0-0.jpg"
                    className="h-[200px] w-[200px]"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://ecsmedia.pl/c/no-more-tears-b-iext159630494.jpg" className="h-[200px] w-[200px]" />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://www.emp-shop.pl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw3ca2e801/images/5/4/2/8/542852.jpg?sfrm=png"
                    className="h-[200px] w-[200px]"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default AlbumsSlider;
