import Navbar from "./Navbar/Navbar";
import {useEffect, useRef} from "react";

const Header = ({handleFormScroll, setRef, pathname, handleOpenForm}) => {
    const top = useRef(null);
    useEffect(() => {
        if (top.current) {
            setRef(top.current);
        }
    }, [top]);
    return (
        <div ref={top}>
            <Navbar
                pathname={pathname}
                handleFormScroll={handleFormScroll}
                setRef={setRef}
                handleOpenForm={handleOpenForm}

            />
        </div>
    );
};

export default Header;
