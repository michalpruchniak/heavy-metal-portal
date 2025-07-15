import { route } from 'ziggy-js';

const useMenu = (): MenuElement[] => {
    return [
        {
            label: 'Home',
            url: route('home'),
        },
        {
            label: 'Test',
            url: '#',
        },
    ];
};

export default useMenu;
