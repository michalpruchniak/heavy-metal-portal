import DatePickerInput from '@/components/DatePicker/DatePicker';
import InputFile from '@/components/Input/InputFile';
import InputText from '@/components/Input/InputText';
import TextEditor from '@/components/TextEditor/TextEditor';
import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translate';
import AppLayout from '@/layouts/app-layout';
import { BandFormData, BandProps, EventFormData, EventProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';

const Create = ({ event }: EventProps) => {
    const { labels, placeholders, buttons } = useTranslation();
    const breadcrumbs = [
        {
            title: labels.bands,
            href: route('bands.index'),
        },
        {
            title: event ? labels.update_band : labels.create_band,
            href: event ? route('bands.edit', { band: event.id }) : route('bands.create'),
        },
    ];


    const { data, setData, processing, post, errors } = useForm<EventFormData>({
        name: typeof event?.name === 'string' ? event.name : '',
        description: typeof event?.description === 'string' ? event.description : '',
        cover: null,
        date: typeof event?.date === 'string' ? event.date : '',
        _method: event?.id ? 'PUT' : 'POST',
    });

    const sendRequest = () => {
        const targetRoute = event ? route('bands.update', { band: event.id }) : route('events.store');

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
            <Head title={event ? labels.update_event : labels.create_event} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-center text-[45px]">{event ? `${labels.update_event} ${event.name}` : labels.create_event}</h1>

                <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-4 px-[15px] md:px-[17%]">
                    <div>
                        <InputText label={labels.name} required={true} value={data.name} onChange={(e) => setData('name', e)} error={errors.name} />
                    </div>
                    <div>
                        <TextEditor
                            name="description"
                            value={data.description ?? ''}
                            required={true}
                            limit={2500}
                            label={labels.description}
                            error={errors.description}
                            onChange={(value) => setData('description', value)}
                        />
                    </div>
                    <div>
                    <DatePickerInput
                            label={labels.date}
                            required={true}
                            value={data.date ? new Date(data.date) : null}
                            onChange={(date) => {
                                if (date) {
                                    setData('date', date.toISOString().split('T')[0]);
                                } else {
                                    setData('date', '');
                                }
                            }}
                            error={errors.date}
                        />
                    </div>
                    <div>
                        <InputFile name="cover" label={labels.cover} required={event ? false : true} onChange={(file) => setData('cover', file)} error={errors.cover} />
                    </div>
                    <Button type="submit" disabled={processing} className="self-start">
                        {event ? buttons.update : buttons.create}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
};

export default Create;
