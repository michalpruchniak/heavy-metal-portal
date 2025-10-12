import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import PermissionEnum from '@/enums/PermissionEnum';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Calendar, CircleUserRound, LayoutGrid, Mic, Pen } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Publishers',
        href: route('publishers.index'),
        icon: LayoutGrid,
        permission: PermissionEnum.PUBLISHERS_INDEX,
    },
    {
        title: 'People',
        href: route('people.index'),
        icon: CircleUserRound,
        permission: PermissionEnum.PEOPLE_INDEX,
    },
    {
        title: 'Bands',
        href: route('bands.index'),
        icon: Mic,
        permission: PermissionEnum.BANDS_INDEX,
    },
    {
        title: 'Events',
        href: route('events.index'),
        icon: Calendar,
        permission: PermissionEnum.EVENTS_INDEX,
    },
    {
        title: 'Articles',
        href: route('articles.index'),
        icon: Pen,
        permission: PermissionEnum.ARTICLES_INDEX,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
