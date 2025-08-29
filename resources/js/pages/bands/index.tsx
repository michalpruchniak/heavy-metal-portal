import ButtonLink from '@/components/Button/ButtonLink';

import Table from '@/components/Table/Table';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Band, IndexPageBandsProps } from '@/types';
import { Head } from '@inertiajs/react';
import BandsTableColumns from './__partials/BandsTableColumns';

export default function Index({ bands }: IndexPageBandsProps) {
    const { labels, buttons } = useTranslation();

    const breadcrumbs = [
        {
            title: labels.bands,
            href: route('bands.index'),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Bands" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{labels.bands}</h1>
                <div className="flex justify-end">
                    <ButtonLink url={route('bands.create')} variant="primary">
                        {buttons.add_new_band}
                    </ButtonLink>
                </div>
                <Table<Band> data={bands} columns={BandsTableColumns()} />
            </div>
        </AppLayout>
    );
}
