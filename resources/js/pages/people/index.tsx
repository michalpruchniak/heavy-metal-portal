import ButtonLink from '@/components/Button/ButtonLink';

import Table from '@/components/Table/Table';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import PersonTableColumns from './__partials/PersonTableColumns';
import { IndexPagePeopleProps, Person } from './__types/types';

export default function Index({ people }: IndexPagePeopleProps) {
    const { labels } = useTranslation();

    const breadcrumbs = [
        {
            title: labels.people,
            href: route('people.index'),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="People" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{labels.people}</h1>
                <div className="flex justify-end">
                    <ButtonLink url={route('people.create')} variant="primary">
                        {labels.add_new_person}
                    </ButtonLink>
                </div>
                <Table<Person> data={people} columns={PersonTableColumns()} />
            </div>
        </AppLayout>
    );
}
