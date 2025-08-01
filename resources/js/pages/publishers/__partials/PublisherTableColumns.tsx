import DefaultImg from '@/components/Atoms/Img/default.jpg';
import ButtonLink from '@/components/Button/ButtonLink';
import useTranslation from '@/hooks/use-translate';
import { TableColumn } from 'react-data-table-component';
import { Publisher } from '../__types/types';

const PublisherTableColumns = (): TableColumn<Publisher>[] => {
    const { buttons, labels } = useTranslation();
    return [
        {
            name: labels.id,
            selector: (row: Publisher) => row.id,
            sortable: true,
        },
        {
            name: labels.name,
            selector: (row: Publisher) => row.name,
            sortable: true,
        },
        {
            name: labels.name,
            cell: (row: Publisher) => <img src={row.logo === 'string' ? row.logo : DefaultImg} alt="Logo" className="h-10 w-10 object-contain" />,
        },
        {
            name: labels.url,
            selector: (row: Publisher) => row.url || 'N/A',
        },
        {
            name: labels.edit,
            cell: (row: Publisher) => (
                <ButtonLink variant="secondary" url={route('publishers.edit', { publisher: row.id })}>
                    {buttons.edit}
                </ButtonLink>
            ),
        },
    ];
};

export default PublisherTableColumns;
