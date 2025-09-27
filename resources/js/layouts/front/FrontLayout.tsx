import Search from '@/components/Search/Search';
import { FrontProvider } from '@/contexts/FrontContext';
import { FrontLayoutProps } from '@/types';
import Nav from './__partials/__sections/nav/Nav';

const FrontLayout = ({ children }: FrontLayoutProps) => {
    return (
        <FrontProvider>
            <Search />
            <Nav />
            {children}
        </FrontProvider>
    );
};

export default FrontLayout;
