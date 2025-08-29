import ButtonLink from '@/components/Button/ButtonLink';
import Table from '@/components/Table/Table';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import PublisherTableColumns from './__partials/PublisherTableColumns';
import { IndexPageProps, Publisher } from '@/types';

export default function Index({ publishers }: IndexPageProps) {
    const { labels } = useTranslation();

    const breadcrumbs = [
        {
            title: labels.publishers,
            href: route('publishers.index'),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Publishers" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{labels.publishers}</h1>
                <div className="flex justify-end">
                    <ButtonLink url={route('publishers.create')} variant="primary">
                        {labels.add_new_publisher}
                    </ButtonLink>
                </div>
                <Table<Publisher> data={publishers} columns={PublisherTableColumns()} />
            </div>
        </AppLayout>
    );
}
