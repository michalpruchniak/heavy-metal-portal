import DefaultImg from '@/components/Atoms/Img/default.jpg';
import ResultsVariants from './constants/resultsType';
import { SearchResultProps } from '@/types';

const SearchResult = ({ variant, results }: SearchResultProps) => {
  const { label, imageKey, containerClass, imageClass } =
    ResultsVariants[variant];

  if (results.length === 0) return null;

  return (
    <>
      <h3 className="mt-4 mb-2 font-bold">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {results.map((element) => {
          const imgSrc = element[imageKey] ?? DefaultImg;
          return (
            <div key={element.id} className={containerClass}>
              <img src={imgSrc} className={imageClass} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
