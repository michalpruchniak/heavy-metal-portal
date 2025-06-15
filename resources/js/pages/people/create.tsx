import TextEditor from '@/components/TextEditor/TextEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { PersonFormData, PersonProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FC, FormEvent } from 'react';

const PersonForm: FC<PersonProps> = ({ person }) => {
    const { labels } = useTranslation();
    const { personType } = usePage<PageProps>().props;
    const breadcrumbs = [
        {
            title: labels.people,
            href: route('people.index'),
        },
        {
            title: person ? labels.edit_person : labels.create_person,
            href: person ? route('publishers.edit', { publisher: person.id }) : route('people.create'),
        },
    ];

    const { data, setData, processing, post, errors } = useForm<PersonFormData>({
        name: typeof person?.name === 'string' ? person.name : '',
        type: typeof person?.type === 'string' ? person.type : 'none',
        aka: typeof person?.aka === 'string' ? person.aka : '',
        bio: typeof person?.bio === 'string' ? person.bio : '',
        DOB: typeof person?.DOB === 'string' ? person.DOB : '',
        img: null,
        _method: person?.id ? 'PUT' : 'POST',
    });

    const sendRequest = () => {
        const targetRoute = person ? route('publishers.update', { publisher: person.id }) : route('people.store');

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
            <Head title={person ? labels.edit_person : labels.create_person} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{person ? `${labels.edit_person} ${person.name}` : labels.create_person}</h1>

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
                        <TextEditor
                            name="bio"
                            value={data.bio ?? ''}
                            limit={1500}
                            label="bio"
                            error={errors.bio}
                            onChange={(value) => setData('bio', value)}
                        />
                        {errors.aka && <div className="text-red-500">{errors.aka}</div>}
                    </div>

                    <div>
                        <label>Img:</label>
                        <Input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setData('img', e.target.files[0]);
                                }
                            }}
                            aria-invalid={!!errors.logo}
                        />
                        {errors.logo && <div className="text-red-500">{errors.logo}</div>}
                    </div>

                    <div>
                        <label>Type:</label>
                        <select
                            value={data.type ?? 'none'}
                            onChange={(e) => setData('type', e.target.value)}
                            aria-invalid={!!errors.type}
                            className="rounded border px-2 py-1"
                        >
                            {personType.map((type, index) => {
                                return (
                                    <option key={index} value={type}>
                                        {type}
                                    </option>
                                );
                            })}
                        </select>

                        {errors.type && <div className="text-red-500">{errors.type}</div>}
                    </div>

                    <Button type="submit" disabled={processing} className="self-start">
                        {person ? 'Update' : 'Create'}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
};

export default PersonForm;
