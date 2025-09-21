import { FrontLayoutProps } from '@/types';
import Nav from './__partials/__sections/nav/Nav';
import Search from '@/components/Search/Search';

const FrontLayout = ({ children }: FrontLayoutProps) => {

    return (
        <>
            <Search />
            <Nav />
            {children}
        </>
    );
};

export default FrontLayout;
