export interface BandFormData {
    name: string;
    description?: string | null;
    logo?: File | null;
    still_active: boolean;
    _method: 'PUT' | 'POST';
    people?: string | number | Array<string | number> | null;
    created_at?: string;
    updated_at?: string;
    [key: string]: string | number | File | null | undefined | boolean | Array<string | number>;
}

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


export interface BandProps {
    band?: Band;
}

export interface IndexPageBandsProps {
    bands: Band[];
}