import DefaultImg from '@img/common/default-featured-image.jpg';

import ButtonLink from '@/components/Button/ButtonLink';
import useTranslation from '@/hooks/use-translate';
import { Person } from '@/types';
import { TableColumn } from 'react-data-table-component';
import usePermissions from '@/hooks/usePermissions';
import PermissionEnum from '@/enums/PermissionEnum';

const PersonTableColumns = (): TableColumn<Person>[] => {
    const { buttons, labels } = useTranslation();
    const { hasPermission } = usePermissions();

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
            cell: (row: Person) => <img src={row.img ?? DefaultImg} alt={row.name} className="h-10 w-10 object-contain" />,
        },
        {
            name: labels.url,
            selector: (row: Person) => (typeof row.url === 'string' ? row.url : 'N/A'),
        },
        {
            name: labels.edit,
            cell: (row: Person) => hasPermission(PermissionEnum.PEOPLE_EDIT) && (
                <ButtonLink variant="secondary" url={route('people.edit', { person: row.id })}>
                    {buttons.edit}
                </ButtonLink>
            ),
        },
    ];
};

export default PersonTableColumns;
