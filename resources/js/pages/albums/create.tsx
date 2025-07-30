import InputText from '@/components/Input/InputText';
import TextEditor from '@/components/TextEditor/TextEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import { AlbumProps, BandFormData,  } from './__types/types'
import DatePickerInput from '@/components/DatePicker/DatePicker';

const Create = ({ bandId, band }: AlbumProps) => {
    const { labels } = useTranslation();
    const breadcrumbs = [
        {
            title: labels.albums,
            href: route('bands.index'),
        },
        {
            title: band ? labels.update_album : labels.create_album,
            href: band ? route('bands.edit', { band: band.id }) : route('bands.create'),
        },
    ];


    const { data, setData, processing, post, errors } = useForm<BandFormData>({
        name: typeof band?.name === 'string' ? band.name : '',
        description: typeof band?.description === 'string' ? band.description : '',
        release_date: typeof band?.release_date === 'string' ? band.release_date : '',
        cover: null,
        band_id: bandId,
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
            <Head title={band ? labels.update_band : labels.create_album} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{band ? `${labels.update_album} ${band.name}` : labels.create_album}</h1>

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
                        <label className="dark:text-whtie">{labels.cover}:</label>
                        <Input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setData('cover', e.target.files[0]);
                                }
                            }}
                            aria-invalid={!!errors.cover}
                        />
                        {errors.cover && <div className="text-red-500">{errors.cover}</div>}
                    </div>
                    <div className='relative'>
                        <DatePickerInput
                            label={labels.release_date}
                            value={data.release_date ? new Date(data.release_date) : null}
                            onChange={(date) => {
                                if (date) {
                                    setData('release_date', date.toISOString().split('T')[0]); // YYYY-MM-DD
                                } else {
                                    setData('release_date', '');
                                }
                            }}
                            error={errors.release_date}
                        />
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
