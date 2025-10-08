import { usePage } from "@inertiajs/react";

const usePermissions = () => {
    const { props } = usePage();
    const hasPermission = (permissionName) => {
        const userPermissions = props?.permissions || {};
        return !!userPermissions[permissionName];
    }

    return { hasPermission };
}

export default usePermissions;
