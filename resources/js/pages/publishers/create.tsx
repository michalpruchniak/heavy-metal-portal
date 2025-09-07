import InputFile from '@/components/Input/InputFile';
import InputText from '@/components/Input/InputText';
import TextEditor from '@/components/TextEditor/TextEditor';
import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { PublisherFormData, PublisherProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

const PublisherForm = ({ publisher }: PublisherProps) => {
    const { labels, buttons } = useTranslation();
    const breadcrumbs = [
        {
            title: labels.publishers,
            href: route('publishers.index'),
        },
        {
            title: publisher ? labels.update_publisher : labels.create_publisher,
            href: publisher ? route('publishers.edit', { publisher: publisher.id }) : route('publishers.create'),
        },
    ];

    const { data, setData, processing, post, errors } = useForm<PublisherFormData>({
        name: typeof publisher?.name === 'string' ? publisher.name : '',
        description: typeof publisher?.description === 'string' ? publisher.description : '',
        url: typeof publisher?.url === 'string' ? publisher.url : '',
        logo: null,
        _method: publisher?.id ? 'PUT' : 'POST',
    });

    const sendRequest = () => {
        const targetRoute = publisher ? route('publishers.update', { publisher: publisher.id }) : route('publishers.store');

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
            <Head title={publisher ? labels.update_publisher : labels.create_publisher} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{publisher ? `${labels.update_publisher} ${publisher.name}` : labels.create_publisher}</h1>

                <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-4 px-[15px] md:px-[17%]">
                    <div>
                        <InputText label={labels.name} required={true} value={data.name} onChange={(e) => setData('name', e)} error={errors.name} />
                    </div>

                    <div>
                        <TextEditor
                            name="description"
                            value={data.description ?? ''}
                            limit={2500}
                            label={labels.description}
                            error={errors.description}
                            onChange={(value) => setData('description', value)}
                        />
                    </div>
                    <div>
                        <InputText label={labels.url} value={data?.url} onChange={(e) => setData('url', e)} error={errors.url} />
                    </div>

                    <div>
                        <InputFile
                            required={publisher?.id ? false : true}
                            name="logo"
                            label={labels.logo}
                            onChange={(e) => setData('logo', e)}
                            error={errors.logo}
                        />
                    </div>
                    <Button type="submit" disabled={processing} className="self-start">
                        {publisher ? buttons.update : buttons.create}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
};

export default PublisherForm;
