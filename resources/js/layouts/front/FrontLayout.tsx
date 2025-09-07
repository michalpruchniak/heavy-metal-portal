import { FrontLayoutProps } from '@/types';
import Nav from './__partials/__sections/nav/Nav';

const FrontLayout = ({ children }: FrontLayoutProps) => {
    return (
        <>
            <Nav />
            {children}
        </>
    );
};

export default FrontLayout;
