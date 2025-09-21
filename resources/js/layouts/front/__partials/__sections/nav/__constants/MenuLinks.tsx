import { useFront } from '@/contexts/FrontContext';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { useState } from 'react';
import useMenu from '../hooks/useMenu';

const MenuLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    const { isOpenSearch, closeSearch, openSearch } = useFront();

    const menuElements = useMenu();

    return (
        <>
            <button className="block w-full cursor-pointer lg:hidden" onClick={toggleOpenMenu} aria-label="Menu">
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="2x" />
            </button>
            <ul
                className={`${
                    !isOpen ? 'hidden' : 'block'
                } flex w-full flex-col items-center gap-4 text-[#0B0952] uppercase lg:flex lg:w-auto lg:flex-row lg:gap-7`}
            >
                {menuElements.map((link, key) => {
                    if (link.hide) return null;
                    return (
                        <li key={key}>
                            <Link href={link.url} target={link.target ?? '_self'} className={`${link.className} text-white hover:text-[#FB7419]`}>
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
                <li>
                    <a onClick={openSearch} className="text-white hover:text-[#FB7419]">
                        <Search />
                    </a>
                </li>
            </ul>
        </>
    );
};

export default MenuLinks;
