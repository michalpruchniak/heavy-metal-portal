import DefaultImg from '@img/common/default-featured-image.jpg';
import ButtonLink from '@/components/Button/ButtonLink';
import useTranslation from '@/hooks/use-translate';
import { Event } from '@/types';
import { TableColumn } from 'react-data-table-component';

const EventsTableColumns = (): TableColumn<Event>[] => {
    const { buttons, labels } = useTranslation();
    return [
        {
            name: labels.id,
            selector: (row: Event) => row.id,
            sortable: true,
        },
        {
            name: labels.name,
            selector: (row: Event) => row.name,
            sortable: true,
        },
        {
            name: labels.cover,
            cell: (row: Event) => <img src={row.cover ?? DefaultImg} alt="Logo" className="h-10 w-10 object-contain" />,
        },
        {
            name: labels.edit,
            cell: (row: Event) => (
                <ButtonLink variant="secondary" url={route('events.edit', { event: row.id })}>
                    {buttons.edit}
                </ButtonLink>
            ),
        },
    ];
};

export default EventsTableColumns;
