import DefaultImg from '@img/common/default-featured-image.jpg';
import { SearchResultProps } from '@/types';
import { Link } from '@inertiajs/react';
import ResultsVariants from './constants/resultsType';

const SearchResult = ({ variant, results }: SearchResultProps) => {
    const {
        label,
        imageKey,
        containerClass,
        imageClass,
        route: { name: routeName, paramKey },
    } = ResultsVariants[variant];

    if (results.length === 0) return null;

    return (
        <>
            <h3 className="mt-4 mb-2 font-bold">{label}</h3>
            <div className="flex flex-wrap gap-2">
                {results.map((element) => {
                    const imgSrc = element[imageKey] ?? DefaultImg;
                    return (
                        <Link key={element.id} href={route(routeName, { [paramKey]: element.slug })}>
                            <div key={element.id} className={containerClass}>
                                <img src={imgSrc} className={imageClass} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default SearchResult;
