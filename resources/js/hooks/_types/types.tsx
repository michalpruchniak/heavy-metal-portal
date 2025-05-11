import type { PageProps as InertiaPageProps } from '@inertiajs/core';

type TranslationSegment = Record<string, string>;

export type Translations = Record<string, TranslationSegment>;

export interface PageProps extends InertiaPageProps {
  translations?: Translations;
}