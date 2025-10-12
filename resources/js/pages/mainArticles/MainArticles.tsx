import { MainArticlesComponentProps } from '@/types';
import SingleArticle from './__partials/components/SingleArticle';

const MainArticles = ({ articles }: MainArticlesComponentProps) => {
    if (articles.length === 0) {
        return;
    }

    const limitedArticles = articles.slice(0, 5);
    const mainArticle = limitedArticles[0];
    const otherArticles = limitedArticles.slice(1);

    return (
        <div className="dark:bg-dark-500 min-h-[280px] w-full bg-black text-white">
            <div className="mx-auto max-w-6xl py-5">
                <div className="grid h-[400px] grid-cols-1 gap-4 md:grid-cols-2">
                    {mainArticle && <SingleArticle article={mainArticle} variant="main" />}

                    <div className="grid h-full grid-cols-2 gap-4">
                        {otherArticles.map((article, index) => (
                            <SingleArticle key={index} article={article} variant="other" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainArticles;
