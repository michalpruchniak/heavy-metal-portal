import useTranslation from '@/hooks/use-translate';
import FrontLayout from '@/layouts/front/FrontLayout';

import Pagination from '@/components/Pagination/Pagination';
import ArticleElement from '@/pages/mainArticles/ArticleElement';
import { Article, ArticleFrontPage } from '@/types';

export default function Index({ articles }: ArticleFrontPage) {
    const { labels } = useTranslation();

    return (
        <FrontLayout>
            <div className="mx-auto max-w-6xl py-5">
                <h1>{labels.albums}</h1>

                <div className="mt-3 flex flex-wrap justify-center gap-4 text-center md:justify-start">
                    {articles.data.map((article: Article) => {
                        return <ArticleElement key={article.id} article={article} />;
                    })}
                </div>
                <Pagination links={articles.links} />
            </div>
        </FrontLayout>
    );
}
