import { SingleArticleComponentProps } from '@/types';
import singleArticleVariants from '../constants/singleArticleVariants';

const SingleArticle = ({ article, variant }: SingleArticleComponentProps) => {
    const className = singleArticleVariants[variant].className || singleArticleVariants['other'].className;

    return (
            <div className="group relative h-full w-full overflow-hidden rounded">
                <img
                    src={article.cover}
                    className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={article.title || ''}
                />

                <div className="before:bg-primary-500 absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent before:absolute before:bottom-0 before:left-0 before:h-full before:w-1 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-500 group-hover:before:scale-y-100">
                    <div className="relative bottom-3 left-3 transition-transform duration-500 group-hover:-translate-y-2">
                        <h2 className={`${className}`}>{article.title}</h2>
                    </div>
                </div>
            </div>
    );
};

export default SingleArticle;
