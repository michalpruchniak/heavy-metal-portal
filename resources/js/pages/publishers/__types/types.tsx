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

export interface IndexPageProps {
    publishers: Publisher[];
}

export interface PublisherProps {
    publisher?: Publisher;
}
