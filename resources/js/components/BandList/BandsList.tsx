import useTranslation from '@/hooks/use-translate';
import { BandsListProps } from '@/types';
import SingleBand from './__partials/components/SingleBand';

const BandsList = ({ bands }: BandsListProps) => {
    const { labels } = useTranslation();

    if (bands.length === 0) {
        return;
    }

    return (
        <div className="mx-auto max-w-6xl py-5">
            <>
                <h2>{labels.band}</h2>
                <div className="flex flex-wrap gap-2">
                    {bands.map((band) => {
                        return <SingleBand key={band.id} band={band} />;
                    })}
                </div>
            </>
        </div>
    );
};

export default BandsList;
