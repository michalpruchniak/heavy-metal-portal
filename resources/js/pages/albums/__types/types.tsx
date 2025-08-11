export interface BandFormData {
    name: string;
    description?: string | null;
    cover?: File | null;
    release_date?: string;
    publisher_id?: number |  string | null;
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

export interface Album {
    'id': number;
    'band_id': number;
    'name': string;
    'description'?: string;
    'release_date'?: string;
    'publisher_id'?: number;
}
export interface AlbumProps {
    bandId?: number;
    album?: Album
}

export interface IndexPageBandsProps {
    bands: Band[];
}
