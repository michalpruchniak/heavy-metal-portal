import ButtonLink from '@/components/Button/ButtonLink';
import PermissionEnum from '@/enums/PermissionEnum';
import useTranslation from '@/hooks/use-translate';
import usePermissions from '@/hooks/usePermissions';
import { Event } from '@/types';
import DefaultImg from '@img/common/default-featured-image.jpg';
import { TableColumn } from 'react-data-table-component';

const EventsTableColumns = (): TableColumn<Event>[] => {
    const { buttons, labels } = useTranslation();
    const { hasPermission } = usePermissions();

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
            cell: (row: Event) => hasPermission(PermissionEnum.EVENTS_EDIT) && (
                <ButtonLink variant="secondary" url={route('events.edit', { event: row.id })}>
                    {buttons.edit}
                </ButtonLink>
            ),
        },
    ];
};

export default EventsTableColumns;
