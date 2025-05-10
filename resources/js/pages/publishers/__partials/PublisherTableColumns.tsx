import ButtonLink from '@/components/Buttons/ButtonLink';
import { Publisher } from '@/types';
import { TableColumn } from 'react-data-table-component';

const PublisherTableColumns: TableColumn<Publisher>[] = [
    {
        name: 'ID',
        selector: (row: Publisher) => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: (row: Publisher) => row.name,
        sortable: true,
    },
    {
        name: 'Logo',
        cell: (row: Publisher) => <img src={row.logo} alt="Logo" className="h-10 w-10 object-contain" />,
    },
    {
        name: 'URL',
        selector: (row: Publisher) => row.url || 'N/A',
    },
    {
        name: 'Edit',
        cell: (row: Publisher) => (
            <ButtonLink variant="link" url={route('publishers.edit', { publisher: row.id })}>
                Edit
            </ButtonLink>
        ),
    },
];

export default PublisherTableColumns;
