import DefaultImg from '@/components/Atoms/Img/default.jpg';
import useTranslation from '@/hooks/use-translate';
import FrontLayout from '@/layouts/front/FrontLayout';
import { PersonShowProps } from '@/types';
import { Link } from '@inertiajs/react';

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
                        <div className="mt-3 flex flex-col gap-2">
                            <p>
                                <strong>{labels.aka}:</strong> {person.aka}
                            </p>
                            <p>
                                <strong>{labels.aka}:</strong> {person.DOB}
                            </p>
                            <p>
                                <strong>{labels.type}:</strong> {person.type}
                            </p>
                        </div>
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
            <div className="mx-auto max-w-6xl py-5">
                {bands.length > 0 && (
                    <>
                        <h2>{labels.band}</h2>
                        <div className="flex flex-wrap gap-2">
                            {bands.map((band) => {
                                return (
                                    <Link href={route('band.show', { band: band.slug })}>
                                        <img src={band.logo} alt={band.name} className="h-20 duration-300 hover:scale-105" />
                                    </Link>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </FrontLayout>
    );
}
