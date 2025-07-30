export interface BandFormData {
    name: string;
    description?: string | null;
    cover?: File | null;
    release_date?: string;
    _method: 'PUT' | 'POST';
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

export interface AlbumProps {
    bandId?: number;
    band?: Band
}

export interface IndexPageBandsProps {
    bands: Band[];
}
