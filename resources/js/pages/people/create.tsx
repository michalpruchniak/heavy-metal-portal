import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { PublisherFormData, PublisherProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FC, FormEvent } from 'react';

const PersonForm: FC<PublisherProps> = ({ publisher }) => {
    const { labels } = useTranslation();
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
        name: publisher?.name ?? '',
        url: publisher?.url ?? '',
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
                        <label>Name:</label>
                        <Input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} aria-invalid={!!errors.name} />
                        {errors.name && <div className="text-red-500">{errors.name}</div>}
                    </div>

                    <div>
                        <label>Aka:</label>
                        <Input type="text" value={data.aka ?? ''} onChange={(e) => setData('aka', e.target.value)} aria-invalid={!!errors.aka} />
                        {errors.aka && <div className="text-red-500">{errors.aka}</div>}
                    </div>

                    <div>
                        <label>Logo:</label>
                        <Input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setData('logo', e.target.files[0]);
                                }
                            }}
                            aria-invalid={!!errors.logo}
                        />
                        {errors.logo && <div className="text-red-500">{errors.logo}</div>}
                    </div>

                    <Button type="submit" disabled={processing} className="self-start">
                        {publisher ? 'Update' : 'Create'}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
};

export default PersonForm;
