import { usePage } from '@inertiajs/react';
import { PageProps, Translations } from './_types/types';

const useTranslation = (): Translations => {
    const { props } = usePage<PageProps>();
    return props.translations ?? {};
};

export default useTranslation;
