import FrontLayout from "@/layouts/front/FrontLayout";
import 'swiper/css/navigation';
import 'swiper/css';
import EventCalendar from "@/components/EventCalendar/EventCalendar";
import AlbumsSlider from "@/components/AlbumsSlider/AlbumsSlider";
import MainArticles from "../mainArticles/MainArticles";
export default function Index() {
    return(
        <FrontLayout>
             <div className="w-full bg-black dark:bg-dark-500 min-h-[280px] text-white">
                <MainArticles />
            </div>
            <div className="max-w-6xl mx-auto py-5">
            <AlbumsSlider />

            </div>
            <div className="max-w-6xl mx-auto py-5 flex-flex-col">
                <EventCalendar />
            </div>
        </FrontLayout>
    )
}
