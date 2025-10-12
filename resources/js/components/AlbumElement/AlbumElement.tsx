import PermissionEnum from '@/enums/PermissionEnum';
import usePermissions from '@/hooks/usePermissions';
import { AlbumElementProps } from '@/types';
import DefaultImg from '@img/common/default-featured-image.jpg';
import { Link } from '@inertiajs/react';

const AlbumElement = ({ album, url }: AlbumElementProps) => {
  const { hasPermission } = usePermissions();

  const canEdit = hasPermission(PermissionEnum.ALBUMS_EDIT);
  const linkUrl = canEdit ? url : '#';

  return (
    <Link href={linkUrl}>
      <div className="group relative h-[220px] w-[220px] transform overflow-hidden border transition-transform duration-300 hover:scale-105">
        <img
          src={album.cover || DefaultImg}
          alt={album.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-[-30px] h-[40%] w-full bg-[rgba(0,0,0,0.6)] p-2 text-white transition-all duration-300 group-hover:bottom-0">
          <h3 className="text-[15px] font-bold">{album.name}</h3>
          {album.release_date && <small>{album.release_date}</small>}
        </div>
      </div>
    </Link>
  );
};

export default AlbumElement;
