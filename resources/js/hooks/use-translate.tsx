import { PageProps, Translations } from '@/types';
import { usePage } from '@inertiajs/react';

const useTranslation = (): Translations => {
    const { props } = usePage<PageProps>();
    return props.translations ?? {};
};

export default useTranslation;
