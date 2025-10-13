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
        {
            label: 'Articles',
            url: route('article.index'),
        },
    ];
};

export default useMenu;
