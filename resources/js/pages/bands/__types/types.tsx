export interface BandFormData {
    name: string;
    description?: string | null;
    logo?: File | null;
    still_active: boolean;
    _method: 'PUT' | 'POST';
    created_at?: string;
    updated_at?: string;
    [key: string]: string | number | File | null | undefined | boolean;
}

export interface Band {
    id: number;
    name: string;
    logo: string;
    description?: string | null;
    still_active?: boolean | null;
    created_at: string;
    updated_at: string;
    [key: string]: string | unknown | boolean;
}


export interface BandProps {
    band?: Band;
}

export interface IndexPageBandsProps {
    bands: Band[];
}