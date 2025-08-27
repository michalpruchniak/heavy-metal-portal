import { Link } from '@inertiajs/react';
import DefaultImg from '@/components/Atoms/Img/default.jpg';
import { AlbumElementProps } from '@/types';



const AlbumElement = ({ album, url }: AlbumElementProps) => {
    return (
        <Link href={url}>
        <div className="group relative h-[220px] w-[220px] transform overflow-hidden border transition-transform duration-300 hover:scale-105">
            <img src={album.cover ?? DefaultImg} alt={album.name} className="h-full w-full object-cover" />
            <div className="absolute bottom-[-30px] h-[40%] w-full bg-[rgba(0,0,0,0.6)] p-2 text-white transition-all duration-300 group-hover:bottom-0">
                <h3 className="text-[15px] font-bold">{album.name}</h3>
                {album.release_date && <small>{album.release_date}</small>}
            </div>
        </div>
        </Link>
    );
};

export default AlbumElement;
