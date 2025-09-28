import { MainArticlesComponentProps } from "@/types";

const MainArticles = ({ articles }: MainArticlesComponentProps) => {
    const limitedArticles = articles.slice(0, 5);

    const mainArticle = limitedArticles[0];

    const otherArticles = limitedArticles.slice(1);
    return (
        <div className="mx-auto max-w-6xl py-5">
            <div className="grid h-[400px] grid-cols-1 gap-4 md:grid-cols-2">
                {mainArticle && (
                    <div className="relative h-full w-full overflow-hidden rounded">
                        <img src={mainArticle.cover} className="absolute top-0 left-0 h-full w-full object-cover" alt={mainArticle.title || ''} />
                    </div>
                )}

                <div className="grid h-full grid-cols-2 gap-4">
                    {otherArticles.map((article, index) => (
                        <div key={index} className="relative h-full w-full overflow-hidden rounded">
                            <img src={article.cover} className="absolute top-0 left-0 h-full w-full object-cover" alt={article.title || ''} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainArticles;
