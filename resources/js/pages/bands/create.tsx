import InputText from '@/components/Input/InputText';
import SearchableSelect from '@/components/SearchableSelect/SearchableSelect';
import TextEditor from '@/components/TextEditor/TextEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageProps } from '@/hooks/_types/types';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';
import { BandFormData, BandProps } from './__types/types';

const Create = ({ band }: BandProps) => {
    const { labels, placeholders } = useTranslation();
    const breadcrumbs = [
        {
            title: labels.bands,
            href: route('bands.index'),
        },
        {
            title: band ? labels.update_band : labels.create_band,
            href: band ? route('bands.edit', { band: band.id }) : route('bands.create'),
        },
    ];

    const { peopleOptions = [] } = usePage<PageProps>().props;

    const { data, setData, processing, post, errors } = useForm<BandFormData>({
        name: typeof band?.name === 'string' ? band.name : '',
        description: typeof band?.description === 'string' ? band.description : '',
        logo: null,
        still_active: band?.still_active ?? true,
        people: band?.people ?? [],
        _method: band?.id ? 'PUT' : 'POST',
    });

    const sendRequest = () => {
        const targetRoute = band ? route('bands.update', { band: band.id }) : route('bands.store');

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
            <Head title={band ? labels.update_band : labels.create_band} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{band ? `${labels.update_band} ${band.name}` : labels.create_band}</h1>

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
                        <label className="dark:text-whtie">{labels.logo}:</label>
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
                    <div>
                        <SearchableSelect
                            label="People"
                            onChange={(value) => setData('people', value)}
                            placeholder={placeholders.please_select_people}
                            options={peopleOptions}
                            value={data.people ?? null}
                            error={errors.people}
                            noOptionsMessage={placeholders.no_people_to_display}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="still_active"
                            checked={data.still_active}
                            onChange={(e) => setData('still_active', e.target.checked)}
                            className="h-4 w-4"
                        />
                        <label htmlFor="still_active" className="dark:text-white">
                            {labels.still_active || 'Still active'}
                        </label>
                        {errors.still_active && <div className="text-red-500">{errors.still_active}</div>}
                    </div>
                    <Button type="submit" disabled={processing} className="self-start">
                        {band ? 'Update' : 'Create'}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
};

export default Create;
