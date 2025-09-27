import InputFile from '@/components/Input/InputFile';
import InputText from '@/components/Input/InputText';
import RequiredStar from '@/components/RequiredStar/RequiredStar';
import TextEditor from '@/components/TextEditor/TextEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { BandFormData, BandProps, PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';

const Create = ({ article }: any) => {
    const { labels, placeholders, buttons } = useTranslation();
    const breadcrumbs = [
        {
            title: labels.articles,
            href: route('bands.index'),
        },
        {
            title: article? labels.update_article : labels.create_article,
            href: article ? route('bands.edit', { band: article.id }) : route('bands.create'),
        },
    ];


    const { data, setData, processing, post, errors } = useForm<any>({
        title: typeof article?.title === 'string' ? article.title : '',
        content: typeof article?.content === 'string' ? article?.content : '',
        cover: null,
        _method: article?.id ? 'PUT' : 'POST',
    });

    const sendRequest = () => {
        const targetRoute = article ? route('bands.update', { band: article.id }) : route('articles.store');

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
                <h1 className="text-center text-[45px]">{article ? `${labels.update_article} ${article.name}` : labels.create_article}</h1>

                <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-4 px-[15px] md:px-[17%]">
                    <div>
                        <InputText label={labels.title} required={true} value={data.title} onChange={(e) => setData('title', e)} error={errors.title} />
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
                        <InputFile
                            name="cover"
                            required={true}
                            label={labels.cover}
                            onChange={(file) => setData('cover', file)}
                            error={errors.cover}
                        />
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
