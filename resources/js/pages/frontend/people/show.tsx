import DefaultImg from '@img/common/default-featured-image.jpg';
import BandsList from '@/components/BandList/BandsList';
import useTranslation from '@/hooks/use-translate';
import FrontLayout from '@/layouts/front/FrontLayout';
import { PersonShowProps } from '@/types';
import PersonDetails from './__partials/components/PersonDetails';

export default function Show({ person }: PersonShowProps) {
    const { labels } = useTranslation();
    const { bands = [] } = person;

    return (
        <FrontLayout>
            <div className="mx-auto max-w-6xl py-5">
                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="mx-auto h-64 w-64 overflow-hidden md:mx-0">
                        <img src={person.img ?? DefaultImg} alt={person.name} className="w-full" />
                    </div>
                    <div className="px-5 md:px-0">
                        <h1 className="text-center">{person.name}</h1>
                        <PersonDetails person={person} />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl py-5">
                {person?.bio && (
                    <>
                        <h2>{labels.bio}</h2>
                        <div dangerouslySetInnerHTML={{ __html: person.bio }} />
                    </>
                )}
            </div>
            <BandsList bands={bands} />
        </FrontLayout>
    );
}
