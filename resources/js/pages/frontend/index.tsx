import AlbumsSlider from '@/components/AlbumsSlider/AlbumsSlider';
import EventCalendar from '@/components/EventCalendar/EventCalendar';
import FrontLayout from '@/layouts/front/FrontLayout';
import { AlbumsIndexProps } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';
import MainArticles from '../mainArticles/MainArticles';

export default function Index({ albums, events, articles }: AlbumsIndexProps) {
    return (
        <FrontLayout>
            <MainArticles articles={articles} />
            <AlbumsSlider albums={albums} />
            <EventCalendar events={events} />
        </FrontLayout>
    );
}
