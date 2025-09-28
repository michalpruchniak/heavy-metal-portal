import DefaultImg from '@/components/Atoms/Img/default.jpg';
import ButtonLink from '@/components/Button/ButtonLink';
import useTranslation from '@/hooks/use-translate';
import { Article, Event } from '@/types';
import { TableColumn } from 'react-data-table-component';

const ArticlesTableColumns = (): TableColumn<Article>[] => {
    const { buttons, labels } = useTranslation();
    return [
        {
            name: labels.id,
            selector: (row: Article) => row.id,
            sortable: true,
        },
        {
            name: labels.title,
            selector: (row: Article) => row.title,
            sortable: true,
        },
        {
            name: labels.cover,
            cell: (row: Article) => <img src={row.cover ?? DefaultImg} alt="Logo" className="h-10 w-10 object-contain" />,
        },
        {
            name: labels.edit,
            cell: (row: Article) => (
                <ButtonLink variant="secondary" url={route('articles.edit', { article: row.slug })}>
                    {buttons.edit}
                </ButtonLink>
            ),
        },
    ];
};

export default ArticlesTableColumns;
