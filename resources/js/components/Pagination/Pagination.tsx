import { PaginationProps } from '@/types';
import { Link } from '@inertiajs/react';

const Pagination = ({ links }: PaginationProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      {links?.map((link: any, index: number) => (
        <Link
          key={index}
          href={link.url || '#'}
          className={`rounded border px-3 py-1 transition ${
            link.active
              ? 'bg-primary-500 text-white border-primary-500'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } ${!link.url ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}

        >{link.label}</Link>
      ))}
    </div>
  );
};

export default Pagination;
