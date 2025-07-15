import Nav from './__partials/__sections/nav/Nav';
import { FrontLayoutProps } from './__partials/__types/types';

const FrontLayout = ({ children }: FrontLayoutProps) => {
    return (
        <>
            <Nav />
            {children}
        </>
    );
};

export default FrontLayout;
