import type { PageProps as InertiaPageProps } from '@inertiajs/core';

type TranslationSegment = Record<string, string>;

export type Translations = Record<string, TranslationSegment>;
interface Options {
    value: string;
    label: string;
}
export interface PageProps extends InertiaPageProps {
    translations?: Translations;
    personType?: string[];
    peopleOptions?: Options[];
}
