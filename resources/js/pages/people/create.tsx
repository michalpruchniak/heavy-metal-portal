import InputFile from '@/components/Input/InputFile';
import InputText from '@/components/Input/InputText';
import SelectInput from '@/components/SelectInput/SelectInput';
import TextEditor from '@/components/TextEditor/TextEditor';
import { Button } from '@/components/ui/button';
import { PageProps } from '@/hooks/_types/types';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FC, FormEvent } from 'react';
import { PersonFormData, PersonProps } from './__types/types';

const PersonForm: FC<PersonProps> = ({ person }) => {
    const { labels } = useTranslation();
    const { personType = [] } = usePage<PageProps>().props;

    const breadcrumbs = [
        {
            title: labels.people,
            href: route('people.index'),
        },
        {
            title: person ? labels.edit_person : labels.create_person,
            href: person ? route('people.edit', { person: person.id }) : route('people.create'),
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
        const targetRoute = person ? route('people.update', { person: person.id }) : route('people.store');

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
                        <InputText label={labels.name} value={data.name} required={true} onChange={(value) => setData('name', value)} error={errors.name} />
                    </div>

                    <div>
                        <InputText label={labels.aka} value={data.aka ?? ''} onChange={(value) => setData('aka', value)} error={errors.aka} />
                    </div>
                    <div>
                        <TextEditor
                            name="bio"
                            value={data.bio ?? ''}
                            limit={1500}
                            label={labels.bio}
                            error={errors.bio}
                            onChange={(value) => setData('bio', value)}
                        />
                    </div>
                    <div>
                        <InputFile name="logo" label={labels.image} onChange={(file) => setData('img', file)} error={errors.logo} />
                    </div>

                    <div>
                        <SelectInput
                            name="type"
                            value={data.type}
                            label={labels.type}
                            options={personType}
                            onChange={(value) => setData('type', value)}
                            error={errors.type}
                        />
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
