import DefaultImg from '@/components/Atoms/Img/default.jpg';
import ButtonLink from '@/components/Button/ButtonLink';
import useTranslation from '@/hooks/use-translate';
import { TableColumn } from 'react-data-table-component';
import { Band } from '../__types/types';

const BandsTableColumns = (): TableColumn<Band>[] => {
    const { buttons, labels } = useTranslation();
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
            cell: (row: Band) =>
                    <img src={row.logo ?? DefaultImg} alt="Logo" className="h-10 w-10 object-contain" />
        },
        {
            name: labels.albums,
            cell: (row: Band) => (
                <ButtonLink variant="primary" url={route('albums.index', { band: row.id })}>
                    {buttons.albums}
                </ButtonLink>
            ),
        },
        {
            name: labels.edit,
            cell: (row: Band) => (
                <ButtonLink variant="secondary" url={route('bands.edit', { band: row.id })}>
                    {buttons.edit}
                </ButtonLink>
            ),
        },
    ];
};

export default BandsTableColumns;
