import { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Input } from '../ui/input';

const Table = ({ data, columns, filterField = 'name', placeholderFilteredInput = 'Search by name...' }) => {
    const [filterText, setFilterText] = useState('');

    const filteredElements = useMemo(() => {
        return data.filter((element) => element[filterField]?.toString().toLowerCase().includes(filterText.toLowerCase()));
    }, [data, filterText]);

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
            />
        </>
    );
};

export default Table;
