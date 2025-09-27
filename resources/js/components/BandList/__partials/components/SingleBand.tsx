import { SingleBandProps } from '@/types';
import { Link } from '@inertiajs/react';

const SingleBand = ({ band }: SingleBandProps) => {
    return (
        <Link href={route('band.show', { band: band.slug })}>
            <img src={band.logo} alt={band.name} className="h-20 duration-300 hover:scale-105" />
        </Link>
    );
};

export default SingleBand;
