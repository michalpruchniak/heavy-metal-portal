import useTranslation from '@/hooks/use-translate';
import { PeopleListProps } from '@/types';
import SinglePerson from './__partials/components/SinglePerson';

const PeopleList = ({ people }: PeopleListProps) => {
    const { labels } = useTranslation();

    if (people.length === 0) {
        return null;
    }

    return (
        <div className="mx-auto max-w-6xl py-5">
            <h2>{labels.people}</h2>
            <div className="flex flex-wrap gap-4">
                {people.map((person) => (
                    <SinglePerson key={person.id} person={person} />
                ))}
            </div>
        </div>
    );
};

export default PeopleList;
