import InputText from '@/components/Input/InputText';
import TextEditor from '@/components/TextEditor/TextEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect } from 'react';
import { AlbumProps, BandFormData,  } from './__types/types'
import DatePickerInput from '@/components/DatePicker/DatePicker';
import SearchableSelect from '@/components/SearchableSelect/SearchableSelect';
import { PageProps } from '@/hooks/_types/types';

const Create = ({ bandId, album }: AlbumProps) => {
    const { labels, placeholders } = useTranslation();
    const { publishersOptions = [] } = usePage<PageProps>().props;

    const breadcrumbs = [
        {
            title: labels.albums,
            href: route('bands.index'),
        },
        {
            title: album ? labels.update_album : labels.create_album,
            href: album ? route('albums.edit', { band: bandId, album: album.id }) : route('bands.create', {band: bandId}),
        },
    ];
    const { data, setData, processing, post, errors } = useForm<BandFormData>({
        name: typeof album?.name === 'string' ? album.name : '',
        description: typeof album?.description === 'string' ? album.description : '',
        release_date: typeof album?.release_date === 'string' ? album.release_date : '',
        cover: null,
        band_id: bandId,
        publisher_id: typeof album?.publisher_id === 'number' ? album.publisher_id : null,
        _method: album?.id ? 'PUT' : 'POST',
    });
    const sendRequest = () => {
        const targetRoute = album ? route('albums.update', { album: album.id }) : route('albums.store');

        console.log(data);
        post(targetRoute, {
            preserveScroll: true,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendRequest();
    };
    console.log(publishersOptions);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={album ? labels.update_band : labels.create_album} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{album ? `${labels.update_album} ${album.name}` : labels.create_album}</h1>

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
                    <div>
                        <SearchableSelect
                            label="Publisher"
                            onChange={(value) => setData('publisher_id', value)}
                            placeholder={placeholders.please_select_people}
                            options={publishersOptions}
                            value={data.publisher_id ?? null}
                            error={errors.publisher_id}
                            isMulti={false}
                            noOptionsMessage={placeholders.no_people_to_display}
                        />
                    </div>
                    <div className='relative'>
                        <DatePickerInput
                            label={labels.release_date}
                            value={data.release_date ? new Date(data.release_date) : null}
                            onChange={(date) => {
                                if (date) {
                                    setData('release_date', date.toISOString().split('T')[0]);
                                } else {
                                    setData('release_date', '');
                                }
                            }}
                            error={errors.release_date}
                        />
                    </div>
                    <Button type="submit" disabled={processing} className="self-start">
                        {album ? 'Update' : 'Create'}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
};

export default Create;
