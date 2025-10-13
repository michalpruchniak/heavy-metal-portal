import { MenuElement } from '@/types';
import { route } from 'ziggy-js';

const useMenu = (): MenuElement[] => {
    return [
        {
            label: 'Home',
            url: route('home'),
        },
        {
            label: 'Albums',
            url: route('album.index'),
        },
    ];
};

export default useMenu;
