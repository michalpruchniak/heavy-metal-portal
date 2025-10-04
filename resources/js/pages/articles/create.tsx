import InputFile from '@/components/Input/InputFile';
import InputText from '@/components/Input/InputText';
import TextEditor from '@/components/TextEditor/TextEditor';
import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { ArticleFormData, ArticleProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

const Create = ({ article }: ArticleProps) => {
    const { labels, buttons } = useTranslation();
    const breadcrumbs = [
        {
            title: labels.articles,
            href: route('articles.index'),
        },
        {
            title: article ? labels.update_article : labels.create_article,
            href: article ? route('articles.edit', { article: article.id }) : route('articles.create'),
        },
    ];

    const { data, setData, processing, post, errors } = useForm<ArticleFormData>({
        title: typeof article?.title === 'string' ? article.title : '',
        content: typeof article?.content === 'string' ? article?.content : '',
        cover: null,
        _method: article?.id ? 'PUT' : 'POST',
    });

    const sendRequest = () => {
        const targetRoute = article ? route('articles.update', { article: article.slug }) : route('articles.store');

        post(targetRoute, {
            preserveScroll: true,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendRequest();
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={article ? labels.update_article : labels.create_article} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{article ? `${labels.update_article} ${article.title}` : labels.create_article}</h1>

                <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-4 px-[15px] md:px-[17%]">
                    <div>
                        <InputText
                            label={labels.title}
                            required={true}
                            value={data.title}
                            onChange={(e) => setData('title', e)}
                            error={errors.title}
                        />
                    </div>
                    <div>
                        <TextEditor
                            name="content"
                            value={data.content ?? ''}
                            required={true}
                            limit={10000}
                            label={labels.content}
                            error={errors.content}
                            onChange={(value) => setData('content', value)}
                        />
                    </div>
                    <div>
                        <div>
                            <InputFile name="cover" label={labels.cover} onChange={(file) => setData('cover', file)} error={errors.cover} />
                        </div>
                    </div>
                    <Button type="submit" disabled={processing} className="self-start">
                        {article ? buttons.update : buttons.create}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
};

export default Create;
