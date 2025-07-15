import MenuLinks from './__constants/MenuLinks';
import Logo from '../../../../../../img/common/logo_white.webp'

const Nav = () => {
    return (
        <nav className="py-[10px] shadow-md lg:py-[25px] bg-black border-b border-light-300">
            <div className="mx-auto flex md:w-fit flex-wrap items-center gap-[20px] lg:gap-[50px] justify-center">
                <img src={Logo} className='w-[25px]'/>
                <MenuLinks />
            </div>
        </nav>
    );
};

export default Nav;
