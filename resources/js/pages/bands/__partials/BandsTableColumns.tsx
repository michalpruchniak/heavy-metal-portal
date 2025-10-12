import ButtonLink from '@/components/Button/ButtonLink';
import PermissionEnum from '@/enums/PermissionEnum';
import useTranslation from '@/hooks/use-translate';
import usePermissions from '@/hooks/usePermissions';
import { Band } from '@/types';
import DefaultImg from '@img/common/default-featured-image.jpg';
import { TableColumn } from 'react-data-table-component';

const BandsTableColumns = (): TableColumn<Band>[] => {
    const { buttons, labels } = useTranslation();
    const { hasPermission } = usePermissions();

    return [
        {
            name: labels.id,
            selector: (row: Band) => row.id,
            sortable: true,
        },
        {
            name: labels.name,
            selector: (row: Band) => row.name,
            sortable: true,
        },
        {
            name: labels.logo,
            cell: (row: Band) => <img src={row.logo ?? DefaultImg} alt="Logo" className="h-10 w-10 object-contain" />,
        },
        {
            name: labels.albums,
            cell: (row: Band) =>
                hasPermission(PermissionEnum.ALBUMS_INDEX) && (
                    <ButtonLink variant="primary" url={route('bands.albums.index', { band: row.slug })}>
                        {buttons.albums}
                    </ButtonLink>
                ),
        },
        {
            name: labels.edit,
            cell: (row: Band) =>
                hasPermission(PermissionEnum.BANDS_EDIT) && (
                    <ButtonLink variant="secondary" url={route('bands.edit', { band: row.slug })}>
                        {buttons.edit}
                    </ButtonLink>
                ),
        },
    ];
};

export default BandsTableColumns;
