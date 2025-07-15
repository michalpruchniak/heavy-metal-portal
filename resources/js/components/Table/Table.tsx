import { useAppearance } from '@/hooks/use-appearance';
import { useMemo, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Input } from '../ui/input';

type TableProps<T> = {
    data: T[];
    columns: TableColumn<T>[];
    filterField?: string;
    placeholderFilteredInput?: string;
};

const Table = <T extends Record<string, unknown>>({
    data,
    columns,
    filterField = 'name',
    placeholderFilteredInput = 'Search by name...',
}: TableProps<T>) => {
    const [filterText, setFilterText] = useState('');
    const { appearance } = useAppearance();
    const filteredElements = useMemo(() => {
        return data.filter((element) => element[filterField]?.toString().toLowerCase().includes(filterText.toLowerCase()));
    }, [data, filterText, filterField]);

    return (
        <>
            <Input
                type="text"
                placeholder={placeholderFilteredInput}
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="mb-4 w-full max-w-sm rounded border px-3 py-2 text-sm shadow-sm"
            />

            <DataTable
                columns={columns}
                data={filteredElements}
                pagination
                paginationPerPage={20}
                highlightOnHover
                striped
                responsive
                noDataComponent="No elements found"
                theme={appearance}
            />
        </>
    );
};

export default Table;
