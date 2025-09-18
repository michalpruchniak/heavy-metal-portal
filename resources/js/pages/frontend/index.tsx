import AlbumsSlider from '@/components/AlbumsSlider/AlbumsSlider';
import EventCalendar from '@/components/EventCalendar/EventCalendar';
import FrontLayout from '@/layouts/front/FrontLayout';
import { AlbumsIndexProps } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';
import MainArticles from '../mainArticles/MainArticles';

export default function Index({ albums, events }: AlbumsIndexProps) {
    return (
        <FrontLayout>
            <div className="dark:bg-dark-500 min-h-[280px] w-full bg-black text-white">
                <MainArticles />
            </div>
            <div className="mx-auto max-w-6xl py-5">
                <AlbumsSlider albums={albums} />
            </div>
            <div className="flex-flex-col mx-auto max-w-6xl py-5">
                <EventCalendar events={events} />
            </div>
        </FrontLayout>
    );
}
