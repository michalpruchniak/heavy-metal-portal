import ButtonLink from '@/components/Button/ButtonLink';
import PermissionEnum from '@/enums/PermissionEnum';
import useTranslation from '@/hooks/use-translate';
import usePermissions from '@/hooks/usePermissions';
import { Publisher } from '@/types';
import DefaultImg from '@img/common/default-featured-image.jpg';
import { TableColumn } from 'react-data-table-component';

const PublisherTableColumns = (): TableColumn<Publisher>[] => {
    const { buttons, labels } = useTranslation();
    const { hasPermission } = usePermissions();

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
            name: labels.logo,
            cell: (row: Publisher) => <img src={row.logo ?? DefaultImg} alt={row.name} className="h-10 w-10 object-contain" />,
        },
        {
            name: labels.url,
            selector: (row: Publisher) => row.url || 'N/A',
        },
        {
            name: labels.edit,
            cell: (row: Publisher) =>
                hasPermission(PermissionEnum.PUBLISHERS_EDIT) && (
                    <ButtonLink variant="secondary" url={route('publishers.edit', { publisher: row.id })}>
                        {buttons.edit}
                    </ButtonLink>
                ),
        },
    ];
};

export default PublisherTableColumns;
