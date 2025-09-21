import { createContext, ReactNode, useContext, useState } from 'react';

type FrontContextType = {
    isOpenSearch: boolean;
    openSearch: () => void;
    closeSearch: () => void;
    toggleSearch: () => void;
};

const FrontContext = createContext<FrontContextType | undefined>(undefined);

export const FrontProvider = ({ children }: { children: ReactNode }) => {
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const openSearch = () => setIsOpenSearch(true);
    const closeSearch = () => setIsOpenSearch(false);
    const toggleSearch = () => setIsOpenSearch((prev) => !prev);

    return <FrontContext.Provider value={{ isOpenSearch, openSearch, closeSearch, toggleSearch }}>{children}</FrontContext.Provider>;
};

export const useFront = () => {
    const ctx = useContext(FrontContext);
    if (!ctx) {
        throw new Error('useFront must be used within FrontProvider');
    }
    return ctx;
};
