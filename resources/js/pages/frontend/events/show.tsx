import DefaultImg from '@/components/Atoms/Img/default.jpg';
import FrontLayout from '@/layouts/front/FrontLayout';

import { EventShowProps } from '@/types';

export default function Show({ event }: EventShowProps) {
    return (
        <FrontLayout>
            <div className="mx-auto max-w-6xl py-5">
                <h1 className="text-center">{event.name}</h1>

                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="mx-auto h-64 w-64 overflow-hidden rounded-lg md:mx-0">
                        <img src={event.cover ?? DefaultImg} alt={event.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="px-5 md:px-0">
                        <div className="mt-3 flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: event.description }} />
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}
