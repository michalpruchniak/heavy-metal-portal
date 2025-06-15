import { LucideIcon } from 'lucide-react';
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

export interface Publisher {
    id: number;
    name: string;
    logo: string;
    url?: string | null;
    description?: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: string | unknown;
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
    [key: string]: string | number | boolean | File | null;
}

export interface PublisherFormData {
    name: string;
    url?: string | null;
    description?: string | null;
    logo?: File | null;
    created_at?: string | null;
    updated_at?: string | null;
    _method: 'PUT' | 'POST';
    created_at?: string;
    updated_at?: string;
    [key: string]: string | number | File | null;
}

export interface IndexPageProps {
    publishers: Publisher[];
}

export interface IndexPagePeopleProps {
    people: Person[];
}

export interface PublisherProps {
    publisher?: Publisher;
}

export interface PersonProps {
    person?: Person;
}

export interface Person {
    id: number;
    name: string;
    aka?: string;
    bio?: string;
    DOB?: string;
    img?: File;
    created_at?: string;
    updated_at?: string;
    [key: string]: string | unknown;
}
