import DefaultImg from '@/components/Atoms/Img/default.jpg';
import ButtonLink from '@/components/Button/ButtonLink';
import useTranslation from '@/hooks/use-translate';
import { TableColumn } from 'react-data-table-component';
import { Person } from '../__types/types';

const PersonTableColumns = (): TableColumn<Person>[] => {
    const { buttons, labels } = useTranslation();
    return [
        {
            name: labels.id,
            selector: (row: Person) => row.id,
            sortable: true,
        },
        {
            name: labels.name,
            selector: (row: Person) => row.name,
            sortable: true,
        },
        {
            name: labels.photo,
            cell: (row: Person) => <img src={row.img === 'string' ? row.img : DefaultImg} alt="Photo" className="h-10 w-10 object-contain" />,
        },
        {
            name: labels.url,
            selector: (row: Person) => (typeof row.url === 'string' ? row.url : 'N/A'),
        },
        {
            name: labels.edit,
            cell: (row: Person) => (
                <ButtonLink variant="secondary" url={route('people.edit', { person: row.id })}>
                    {buttons.edit}
                </ButtonLink>
            ),
        },
    ];
};

export default PersonTableColumns;
