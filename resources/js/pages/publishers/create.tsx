import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { FC } from 'react';

interface PublisherProps {
    publisher?: {
        id: number;
        name: string;
    };
}

const PublisherForm: FC<PublisherProps> = ({ publisher }) => {
    const breadcrumbs = [
        {
            title: 'Publishers',
            href: route('publishers.index'),
        },
        {
            title: publisher ? 'Edit publisher' : 'Create publisher',
            href:  publisher ? route('publishers.edit', {publisher: publisher.id}) : route('publishers.create'),
        },
    ];

    const { data, setData, processing, post, errors } = useForm<any>({
        name: publisher?.name ?? '',
        logo: null,
        _method: publisher?.id ? 'PUT' : 'POST',
    });

    const sendRequest = () => {
        if (publisher?.id) {
            post(route('publishers.update', { publisher: publisher?.id }), {
                ...data,
            });
        } else {
            post(route('publishers.store'), data);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        sendRequest();
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={publisher ? 'Update publisher' : 'Create publisher'} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{publisher ? `Update publisher ${publisher.name}` : 'Create publisher'}</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-4 px-[15px] md:px-[17%]">
                    <div>
                        <label>
                            Name:
                        </label>
                        <Input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} aria-invalid={!!errors.name} />
                        {errors.name && <div className="text-red-500">{errors.name}</div>}
                    </div>
                    <div>
                        <label>Url:</label>
                        <Input type="text" value={data.url} onChange={(e) => setData('url', e.target.value)} aria-invalid={!!errors.url} />
                        {errors.url && <div className="text-red-500">{errors.url}</div>}
                    </div>
                    <div>
                        <label>Logo: {!publisher && ''}</label>
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

export default PublisherForm;
