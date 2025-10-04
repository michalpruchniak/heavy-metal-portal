import { EventsByDate } from '@/types';
import { Link } from '@inertiajs/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const EventCalendar = ({ events }: { events: EventsByDate }) => {
    return (
        <div className="flex-flex-col mx-auto max-w-6xl py-5">

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
                className="min-h-[200px] pb-12"
            >
                {Object.entries(events).map(([date, dayEvents]) => {
                    const [year, month, day] = date.split('-');
                    return (
                        <SwiperSlide>
                            <div className="border-light-400 h-[400px] border p-2">
                                <h4 className="text-[32px] font-bold">
                                    <span className="text-primary-500">{day}</span>.
                                    <span className="text-light-400 dark:text-light-200">{month}</span>
                                </h4>
                                <div className="flex !h-[320px] flex-col gap-2 overflow-auto">
                                    {dayEvents.map((event) => {
                                        return (
                                            <Link href={route('event.show', { event: event.slug })}>
                                                <div className="bg-light-100 dark:bg-dark-100 border-primary-200 border-l border-l-2 p-2 hover:border-l-4">
                                                    <strong>{event.name}</strong>
                                                    {event?.description && <div dangerouslySetInnerHTML={{ __html: event.description }} />}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <div className="mt-4 flex justify-end space-x-2">
                <button className="custom-prev flex h-14 w-14 items-center justify-center bg-orange-500 text-2xl leading-none font-bold text-white disabled:cursor-not-allowed disabled:bg-orange-300">
                    ←
                </button>
                <button className="custom-next flex h-14 w-14 items-center justify-center bg-orange-500 text-2xl leading-none font-bold text-white disabled:cursor-not-allowed disabled:bg-orange-300">
                    →
                </button>
            </div>
        </div>
    );
};

export default EventCalendar;
