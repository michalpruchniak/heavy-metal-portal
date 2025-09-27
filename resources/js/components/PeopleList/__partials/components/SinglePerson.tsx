import { SinglePersonProps } from '@/types';
import { Link } from '@inertiajs/react';

const SinglePerson = ({ person }: SinglePersonProps) => {
    return (
        <Link key={person.id} href={route('person.show', { person: person.slug })} className="h-40 w-40 overflow-hidden duration-300 hover:scale-105">
            <img src={person.img} className="h-full w-full object-cover" />
        </Link>
    );
};
export default SinglePerson;
