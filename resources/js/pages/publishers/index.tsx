import Table from '@/components/Table/Table';
import AppLayout from '@/layouts/app-layout';
import { IndexPageProps, Publisher } from '@/types';
import { Head } from '@inertiajs/react';
import PublisherTableColumns from './__partials/PublisherTableColumns';
import ButtonLink from '@/components/Buttons/ButtonLink';

const breadcrumbs = [
    {
        title: 'Publishers',
        href: route('publishers.index'),
    },
];

export default function Index({ publishers }: IndexPageProps) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Publishers" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">Publishers</h1>
                <div className="flex justify-end">
                    <ButtonLink url={route('publishers.create')}>Add new publisher</ButtonLink>
                </div>
                <Table<Publisher> data={publishers} columns={PublisherTableColumns} />
            </div>
        </AppLayout>
    );
}
