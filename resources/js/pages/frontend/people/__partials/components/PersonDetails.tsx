import useTranslation from '@/hooks/use-translate';
import { PersonProps } from '@/types';

const PersonDetails = ({ person }: PersonProps) => {
    const { labels } = useTranslation();

    const personDetals = [
        { label: labels.aka, value: person?.aka },
        { label: labels.DOB, value: person?.DOB },
        { label: labels.type, value: person?.type },
    ];

    return (
        <div className="mt-3 flex flex-col gap-2">
            {personDetals.map((detail) => (
                <div key={detail.label}>
                    {detail.value && (
                        <p>
                            <strong>{detail.label}:</strong> {detail.value}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PersonDetails;
