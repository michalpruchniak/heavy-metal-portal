import Nav from "./__partials/__sections/nav/Nav";
import { FrontLayoutProps } from "./__partials/__types/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const FrontLayout = ({ children }: FrontLayoutProps) => {
    return (
        <>
            <Nav />
            <div className="w-full bg-black dark:bg-dark-500 min-h-[280px] text-white">
                <div className="max-w-6xl mx-auto py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">

                        <div className="relative w-full h-full overflow-hidden rounded">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHasQePhPujH9S0DKbigpWHfORG-9ICNVbGQ&s"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src="https://townsquare.media/site/366/files/2020/09/GettyImages-1158955897.jpg?w=980&q=75"
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        alt=""
                                    />
                                </div>
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src="https://townsquare.media/site/366/files/2020/09/GettyImages-1158955897.jpg?w=980&q=75"
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        alt=""
                                    />
                                </div>
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src="https://townsquare.media/site/366/files/2020/09/GettyImages-1158955897.jpg?w=980&q=75"
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        alt=""
                                    />
                                </div>
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src="https://townsquare.media/site/366/files/2020/09/GettyImages-1158955897.jpg?w=980&q=75"
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        alt=""
                                    />
                                </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto py-5">

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
                    <SwiperSlide><img src="https://tuonelamagazine.com/wp-content/uploads/2025/04/Epica-Aspiral.jpg" className=" w-[200px] h-[200px]"/></SwiperSlide>
                    <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/en/6/6e/The_Halo_Effect_-_March_of_the_Unheard.png" className=" w-[200px] h-[200px]"/></SwiperSlide>
                    <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/en/3/34/Primitive.png" className=" w-[200px] h-[200px]"/></SwiperSlide>
                    <SwiperSlide><img src="https://www.metalnews.pl/images/2025/03/Hate-album-Bellum-Regiis.jpg.webp" className=" w-[200px] h-[200px]"/></SwiperSlide>
                    <SwiperSlide><img src="https://independentmusicmarket.com/58411-medium_default/iron-maiden-the-number-of-the-beast-cd.jpg" className=" w-[200px] h-[200px]"/></SwiperSlide>
                    <SwiperSlide><img src="https://m.media-amazon.com/images/I/61T81lF9meL._UF1000,1000_QL80_.jpg" className=" w-[200px] h-[200px]"/></SwiperSlide>
                    <SwiperSlide><img src="https://knockoutmusicstore.pl/images/2950/bla00005_metallica_killemall_cd_eco.jpeg" className=" w-[200px] h-[200px]"/></SwiperSlide>
                    <SwiperSlide><img src="https://cdn-images.dzcdn.net/images/cover/2797e265f66e5e780dbd374f2e69ae7e/0x1900-000000-80-0-0.jpg" className=" w-[200px] h-[200px]"/></SwiperSlide>
                    <SwiperSlide><img src="https://ecsmedia.pl/c/no-more-tears-b-iext159630494.jpg" className=" w-[200px] h-[200px]"/></SwiperSlide>
                    <SwiperSlide><img src="https://www.emp-shop.pl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw3ca2e801/images/5/4/2/8/542852.jpg?sfrm=png" className=" w-[200px] h-[200px]"/></SwiperSlide>
    </Swiper>
            </div>
            <div className="max-w-6xl mx-auto py-5 flex-flex-col">


            <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-12 min-h-[200px]"
      >
                    <SwiperSlide>
                        <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="border border-light-400 h-[400px] p-2">
                            <h4 className="text-[32px] font-bold"><span className="text-primary-500">14</span>.<span className="text-light-400 dark:text-light-200">07</span></h4>
                            <div className="flex flex-col gap-2 !h-[320px] overflow-auto">
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>
                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque facere optio, quae fugiat quos ab expedita laboriosam architecto molestiae dolorem beatae a minima adipisci quasi, odio harum tempora aliquam!</p>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello World</strong>

                                </div>
                                <div className="bg-light-100 dark:bg-dark-100 p-2 border-l border-primary-200 border-l-2">
                                    <strong>Hello Worlda</strong>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="flex justify-end space-x-2 mt-4">
                    <button className="custom-prev bg-orange-500 text-white w-14 h-14 text-2xl font-bold leading-none flex items-center justify-center disabled:bg-orange-300 disabled:cursor-not-allowed">
                        ←
                    </button>
                    <button className="custom-next bg-orange-500 text-white w-14 h-14 text-2xl font-bold leading-none flex items-center justify-center disabled:bg-orange-300 disabled:cursor-not-allowed">
                        →
                    </button>
                </div>
            </div>

        </>
    );
}

export default FrontLayout;
