import messageVariant from '@/components/Message/__partials/constants/messageVariant';
import ResultsVariants from '@/components/Search/__partials/components/constants/resultsType';
import { Album } from '@/pages/albums/__types/types';
import singleArticleVariants from '@/pages/mainArticles/__partials/constants/singleArticleVariants';
import type { PageProps as InertiaPageProps } from '@inertiajs/core';
import { Editor } from '@tiptap/core';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
// ----------------- Core modele -----------------
export interface Band {
    id: number;
    name: string;
    logo: string;
    description?: string | null;
    still_active?: boolean | null;
    people?: Person[];
    albums?: Album[];
    slug: string;
    created_at: string;
    updated_at: string;
    [key: string]: string | unknown | boolean | undefined;
}

export interface Event {
    id: number;
    name: string;
    cover: string;
    description?: string;
    date: string;
    formatted_date?: string;
    created_at: string;
    updated_at: string;
    [key: string]: string | unknown | boolean | undefined;
}

export interface Article {
    id: number;
    title: string;
    content: string;
    cover: string;
    created_at: string;
    updated_at: string;
    [key: string]: string | unknown | undefined;
}

export interface Album {
    id: number;
    band_id: number;
    band_slug: string;
    name: string;
    cover?: string;
    description?: string;
    release_date?: string;
    publisher_id?: number;
    band?: Band;
    publisher?: Publisher;
    slug: string;
}

export interface bandAlbums {
    name: string;
    id: number;
    slug: string;
    albums: Album[];
}

export interface Person {
    id: number;
    name: string;
    aka?: string;
    bio?: string;
    DOB?: string;
    img?: string;
    type?: string;
    created_at?: string;
    updated_at?: string;
    bands?: Band[];
    [key: string]: string | unknown;
}

export interface Publisher {
    id: number;
    name: string;
    logo: string;
    url?: string | null | undefined;
    description?: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: string | unknown;
}

// ----------------- FormData -----------------
export interface BandFormData {
    name: string;
    description?: string | null;
    logo?: File | null;
    still_active?: boolean;
    release_date?: string;
    publisher_id?: number | string | null;
    _method: 'PUT' | 'POST';
    people?: string | number | Array<string | number> | null;
    created_at?: string;
    updated_at?: string;
    [key: string]: string | number | File | null | undefined | boolean | Array<string | number>;
}

export interface ArticleFormData {
    id?: number;
    title: string;
    content: string;
    cover?: File | null;
    _method: 'PUT' | 'POST';
    created_at?: string;
    updated_at?: string;
    [key: string]: string | number | File | null | undefined;
}

export interface EventFormData {
    name: string;
    description?: string | null;
    cover?: File | null;
    date?: string;
    _method: 'PUT' | 'POST';
    created_at?: string;
    updated_at?: string;
    [key: string]: string | number | File | null | undefined | boolean | Array<string | number>;
}

export interface AlbumFormData {
    name: string;
    description?: string | null;
    cover?: File | null;
    release_date?: string;
    publisher_id?: number | string | null;
    _method: 'PUT' | 'POST';
    created_at?: string;
    updated_at?: string;
    [key: string]: string | number | File | null | undefined | boolean | Array<string | number>;
}

export interface PersonFormData {
    id?: number | null;
    name: string;
    type?: string;
    aka?: string;
    bio?: string;
    DOB?: string;
    img?: File | null;
    created_at?: string | null;
    updated_at?: string | null;
    [key: string]: string | number | boolean | File | null | undefined;
}

export interface PublisherFormData {
    name: string;
    url?: string | null;
    description?: string | null;
    logo?: File | null;
    _method: 'PUT' | 'POST';
    created_at?: string;
    updated_at?: string;
    [key: string]: string | number | File | null | undefined;
}

export interface EventComponentProps {
    events: EventsByDate;
}

export interface MainArticlesComponentProps {
    articles: Article[];
}

export interface SingleArticleComponentProps {
    article: Article;
    variant: keyof typeof singleArticleVariants;
}

export interface PeopleListProps {
    people: Person[];
}
export interface SinglePersonProps {
    person: Person;
}

// ----------------- Propsy dla stron/komponentów -----------------
export interface AlbumShowProps {
    album: Album;
    albums: Album[];
}

export interface ArticleShowProps {
    article: Article;
}

export interface EventShowProps {
    event: Event;
}

export interface AlbumsIndexProps {
    albums: Album[];
    articles: Article[];
    events: EventsByDate;
}

export interface AlbumsSliderProps {
    label?: string;
    albums: Album[];
}

export interface AlbumElementProps {
    album: Album;
    url: string;
}

export interface AlbumProps {
    band?: Band;
    album?: Album;
}

export interface BandAlbumsProps {
    bandAlbums: bandAlbums;
}

export interface BandProps {
    band?: Band;
}
export interface ArticleProps {
    article?: Article;
}

export interface EventProps {
    event?: Event;
}

export interface IndexPageBandsProps {
    bands: Band[];
}

export interface IndexPagePeopleProps {
    people: Person[];
}

export interface PersonProps {
    person?: Person;
}

export interface IndexPageProps {
    publishers: Publisher[];
}

export interface PublisherProps {
    publisher?: Publisher;
}

export interface IndexPageEventsProps {
    events: Event[];
}

export interface IndexPageArticlesProps {
    articles: Article[];
}

export interface SearchResultProps {
    variant: keyof typeof ResultsVariants;
    results: Band[] | Album[];
}

export interface FrontContextType {
    isOpenSearch: boolean;
    openSearch: () => void;
    closeSearch: () => void;
    toggleSearch: () => void;
}

export interface BandShowProps {
    band: Band;
}

export interface PersonShowProps {
    person: Person;
}

export interface BandsListProps {
    bands: Band[];
}

export interface SingleBandProps {
    band: Band;
}
// ----------------- UI propsy -----------------
export interface InputTextProps {
    value?: string | null;
    onChange: (value: string) => void;
    name?: string;
    label?: string;
    className?: string;
    error?: string;
    type?: string;
    required?: boolean;
}

export interface InputFileProps {
    value?: string;
    onChange: (value: File) => void;
    name?: string;
    label?: string;
    className?: string;
    error?: string;
    type?: string;
    required?: boolean;
}

export interface TextEditorProps {
    value: string;
    limit?: number;
    onChange: (value: string) => void;
    name?: string;
    label?: string;
    className?: string;
    error?: string;
    required?: boolean;
}

export interface TextEditorButtonProps {
    editor: Editor;
    command: (() => void) | string;
    isActive: boolean;
    children: ReactNode;
}

export interface TextEditorToolbarProps {
    editor: Editor;
}

export interface ToolbarButton {
    command: (() => void) | string;
    isActive: boolean;
    label: React.ReactNode;
}

export interface UseTextEditorParams {
    value: string;
    limit: number;
    onChange: (value: string) => void;
}

export interface SelectInputProps {
    name: string;
    value?: string;
    label?: string;
    options: Option[];
    onChange: (value: string) => void;
    className?: string;
    error?: string;
    placeholder?: string;
    noOptionsMessage?: string;
    required?: boolean;
}

export interface FrontLayoutProps {
    children: ReactNode;
}

export interface ButtonVariant {
    className: string;
    isActive: string;
}

export interface ButtonVariants {
    primary: {
        className: string;
        isActive: string;
    };
    secondary: {
        className: string;
        isActive: string;
    };
    link: {
        className: string;
        isActive: string;
    };
}

export interface messageVariants {
    error: {
        className: string;
    };
}

export interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    isActive: boolean;
    variant?: keyof ButtonVariants;
}

export interface ButtonLinkProps {
    children: string;
    url: string;
    variant?: keyof ButtonVariants;
}

export interface MessageProps {
    variant?: keyof typeof messageVariant;
    children: ReactNode;
}

export interface DatePickerProps {
    label: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    error?: string;
    required?: boolean;
}
export type EventsByDate = Record<string, Event[]>;

// ----------------- Utility typy -----------------
export interface Option {
    value: string;
    label: string;
}

export interface SingleSelectProps {
    isMulti?: false;
    value: string | number | null | undefined;
    onChange: (value: string | number | null | undefined) => void;
}

export interface SharedProps {
    label?: string;
    required?: boolean;
    error?: string;
    options: Option[];
    placeholder?: string;
    isSearchable?: boolean;
    noOptionsMessage?: string;
}

export interface SearchableMultipleSelectProps {
    label: string;
    required?: boolean;
    error?: string;
    options?: Option[];
    value: (string | number)[];
    onChange: (value: (string | number)[]) => void;
    placeholder?: string;
    noOptionsMessage?: string;
}

export interface SearchableSelectProps {
    label: string;
    required?: boolean;
    error?: string;
    options?: Option[];
    value: string | number | null | undefined;
    onChange: (value: string | number) => void;
    placeholder?: string;
    noOptionsMessage?: string;
}

export interface TranslationSegment {
    [key: string]: string;
}

export interface Translations {
    [key: string]: TranslationSegment;
}

export interface PageProps extends InertiaPageProps {
    translations?: Translations;
    personType?: Option[];
    peopleOptions?: Option[];
    publishersOptions?: Option[];
}

export interface ButtonTypes {
    button: string;
    link: string;
}

export type SingleArticleTypes = {
    main: {
        className: string;
    };
    other: {
        className: string;
    };
};

export interface MenuElement {
    label: string;
    url: string;
    className?: string;
    hide?: boolean;
    target?: string;
}

export type VariantType = 'primary' | 'secondary' | 'link';
