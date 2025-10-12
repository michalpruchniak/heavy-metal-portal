import { usePage } from '@inertiajs/react';

const usePermissions = () => {
    const { props } = usePage();

    const hasPermission = (permissionName: string): boolean => {
        const userPermissions = props?.permissions || {};

        return !!userPermissions.includes(permissionName);
    };

    return { hasPermission };
};

export default usePermissions;
