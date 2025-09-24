import AlbumsSlider from '@/components/AlbumsSlider/AlbumsSlider';
import DefaultImg from '@/components/Atoms/Img/default.jpg';
import FrontLayout from '@/layouts/front/FrontLayout';

import 'swiper/css';
import 'swiper/css/navigation';
export default function Show({ band, albums }: any) {

    return (
        <FrontLayout>
            <div className="mx-auto max-w-6xl py-5">
                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="mx-auto h-64 w-64 overflow-hidden rounded-lg md:mx-0">
                        <img src={band.logo ?? DefaultImg} alt={band.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="px-5 md:px-0">
                        <h1 className="text-center">{band.name}</h1>
                        <div className="mt-3 flex flex-col gap-2">
                                <p>
                                    <strong>Still active:</strong> {band.still_active ? 'yes' : 'no'}
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl py-5">
                {band?.description && (
                    <>
                        <h2>Description</h2>
                        <div dangerouslySetInnerHTML={{ __html: band.description }} />
                    </>
                )}
            </div>
            {band?.albums.length > 0 && (
                <div className="mx-auto max-w-6xl py-5">
                    <h2>Dyscography</h2>
                    <AlbumsSlider albums={band?.albums} />
                </div>
            )}
        </FrontLayout>
    );
}
