import ButtonLink from '@/components/Button/ButtonLink';

import Table from '@/components/Table/Table';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Article, IndexPageArticlesProps } from '@/types';
import { Head } from '@inertiajs/react';
import ArticlesTableColumns from './__partials/components/ArticlesTableColumns';

export default function Index({ articles }: IndexPageArticlesProps) {
    const { labels, buttons, placeholders } = useTranslation();

    const breadcrumbs = [
        {
            title: labels.articles,
            href: route('articles.index'),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={labels.articles} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{labels.articles}</h1>
                <div className="flex justify-end">
                    <ButtonLink url={route('articles.create')} variant="primary">
                        {buttons.add_new_article}
                    </ButtonLink>
                </div>
                <Table<Article>
                    filterField="title"
                    placeholderFilteredInput={placeholders.search_by_title}
                    data={articles}
                    columns={ArticlesTableColumns()}
                />
            </div>
        </AppLayout>
    );
}
