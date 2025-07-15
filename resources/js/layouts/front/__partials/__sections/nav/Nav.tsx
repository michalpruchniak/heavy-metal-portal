import Logo from '../../../../../../img/common/logo_white.webp';
import MenuLinks from './__constants/MenuLinks';

const Nav = () => {
    return (
        <nav className="border-light-300 border-b bg-black py-[10px] shadow-md lg:py-[25px]">
            <div className="mx-auto flex flex-wrap items-center justify-center gap-[20px] md:w-fit lg:gap-[50px]">
                <img src={Logo} className="w-[25px]" />
                <MenuLinks />
            </div>
        </nav>
    );
};

export default Nav;
