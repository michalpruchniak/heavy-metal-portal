import messageVariant from '@/components/Message/__partials/constants/messageVariant';
import { Album } from '@/pages/albums/__types/types';
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
    people?: any[] | null;
    created_at: string;
    updated_at: string;
    [key: string]: string | unknown | boolean | undefined;
}

export interface Event {
    id: number;
    name: string;
    cover: string;
    description?: string | null;
    date: string;
    formatted_date?: string;
    created_at: string;
    updated_at: string;
    [key: string]: string | unknown | boolean | undefined;
}

export interface Album {
    id: number;
    band_id: number;
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
    albums: Album[];
}

export interface Person {
    id: number;
    name: string;
    aka?: string;
    bio?: string;
    DOB?: string;
    img?: string;
    created_at?: string;
    updated_at?: string;
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

// ----------------- Propsy dla stron/komponentów -----------------
export interface AlbumShowProps {
    album: Album;
    albums: Album[];
}

export interface AlbumsIndexProps {
    albums: Album[];
    events: EventsByDate
}

export interface AlbumsSliderProps {
    albums: Album[];
}

export interface AlbumElementProps {
    album: Album;
    url: string;
}

export interface AlbumProps {
    bandId?: number;
    album?: Album;
}

export interface BandAlbumsProps {
    bandAlbums: bandAlbums;
}

export interface BandProps {
    band?: Band;
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
    primary: ButtonVariant;
    secondary: ButtonVariant;
    link: ButtonVariant;
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

export interface EventComponentProps {
    events: EventsByDate;
}

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

export interface MenuElement {
    label: string;
    url: string;
    className?: string;
    hide?: boolean;
    target?: string;
}

export type VariantType = 'primary' | 'secondary' | 'link';
