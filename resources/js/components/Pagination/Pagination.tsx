import { PaginationProps } from '@/types';
import { Link } from '@inertiajs/react';

const Pagination = ({ links }: PaginationProps) => {
    return (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
            {links?.map((link: any, index: number) => (
                <Link
                    key={index}
                    href={link.url || '#'}
                    className={`rounded border px-3 py-1 transition ${
                        link.active ? 'bg-primary-500 border-primary-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                    } ${!link.url ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default Pagination;
