import ButtonLink from '@/components/Button/ButtonLink';

import Table from '@/components/Table/Table';
import PermissionEnum from '@/enums/PermissionEnum';
import useTranslation from '@/hooks/use-translate';
import usePermissions from '@/hooks/usePermissions';
import AppLayout from '@/layouts/app-layout';
import { Event, IndexPageEventsProps } from '@/types';
import { Head } from '@inertiajs/react';
import EventsTableColumns from './__partials/EventsTableColumns';

export default function Index({ events }: IndexPageEventsProps) {
    const { labels, buttons } = useTranslation();
    const { hasPermission } = usePermissions();

    const breadcrumbs = [
        {
            title: labels.events,
            href: route('events.index'),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Event" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{labels.events}</h1>
                {hasPermission(PermissionEnum.EVENTS_CREATE) && (
                    <div className="flex justify-end">
                        <ButtonLink url={route('events.create')} variant="primary">
                            {buttons.add_new_event}
                        </ButtonLink>
                    </div>
                )}

                <Table<Event> data={events} columns={EventsTableColumns()} />
            </div>
        </AppLayout>
    );
}
