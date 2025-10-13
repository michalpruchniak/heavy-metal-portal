import { ArticleElementComponentProps } from '@/types';
import SingleArticle from './__partials/components/SingleArticle';

const ArticleElement = ({ article }: ArticleElementComponentProps) => {
    return (
        <div className="h-[144px] w-[224px] md:h-[180px] md:w-[280px]">
            <SingleArticle article={article} variant="other" />
        </div>
    );
};

export default ArticleElement;
