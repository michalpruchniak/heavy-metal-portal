import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const EventCalendar = () => {
    return(
<>
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
                </>
    )

}

export default EventCalendar