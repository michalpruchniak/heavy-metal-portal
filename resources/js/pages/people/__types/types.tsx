interface PageProps {
    personType: string[];
    [key: string]: any;
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

export interface IndexPagePeopleProps {
    people: Person[];
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
    img?: string | File;
    created_at?: string;
    updated_at?: string;
    [key: string]: string | unknown;
}
