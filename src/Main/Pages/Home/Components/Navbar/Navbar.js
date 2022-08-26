import React, {useEffect, useState} from "react";
import {
    CenterContainer,
    LeftContainer,
    NavbarButton,
    NavbarContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLink,
    NavbarLinkContainer,
    NavbarLinkExtended,
    OpenLinksButton,
    RightContainer,
} from "./Navbar.style";
import DropButton from "./DropButton/DropButton";
import {Button} from "@mui/material";
import Logo from "../Assets/Logo";

const Navbar = ({handleFormScroll, handleOpenForm, pathname}) => {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [offset, setOffset] = useState(0);

    const toggleExtendedBar = () => {
        setExtendNavbar((curr) => !curr);
    }
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        if (pathname === "/") {
            handleFormScroll();
        } else {
            setExtendNavbar(false);
            handleOpenForm();
        }
    };


    return (
        <NavbarContainer extendNavbar={extendNavbar} heightScroll={offset}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo></Logo>
                </LeftContainer>
                <CenterContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Acasă</NavbarLink>
                        <DropButton
                            title="Flamingo"
                            list={["Concept", "Proiectare", "Facilitati"]}
                        />
                        <NavbarLink to="/Galerie">Galerie</NavbarLink>
                        <DropButton title="Echipa" list={["FigranSRL", "Parteneri"]}/>
                    </NavbarLinkContainer>
                </CenterContainer>
                <RightContainer>
                    <NavbarButton>
                        <Button
                            onClick={handleClick}
                            sx={{
                                ":hover": {
                                    bgcolor: "#b8a87f",
                                    color: "white",
                                },
                                "&.Mui-disabled": {
                                    color: "white",
                                },
                            }}
                            color="gold"
                            variant="contained"
                        >
                            Programeaza o intalnire
                        </Button>
                    </NavbarButton>
                    <OpenLinksButton onClick={toggleExtendedBar}>
                        {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                    </OpenLinksButton>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar ? (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended onClick={toggleExtendedBar} to="/">Acasă</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={toggleExtendedBar} to="/Concept">Concept</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={toggleExtendedBar} to="/Proiectare">Proiectare</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={toggleExtendedBar} to="/Facilitati">Facilități</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={toggleExtendedBar} to="/Galerie">Galerie</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={toggleExtendedBar} to="/FigranSRL">Figran SRL</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={toggleExtendedBar} to="/Parteneri">Parteneri</NavbarLinkExtended>
                    <Button
                        onClick={handleClick}
                        sx={{
                            ":hover": {
                                bgcolor: "#b8a87f",
                                color: "white",
                            },
                            "&.Mui-disabled": {
                                color: "white",
                                background: "#a3674a",
                            },
                        }}
                        color="gold"
                        variant="contained"
                    >
                        Programeaza o intalnire
                    </Button>
                </NavbarExtendedContainer>
            ) : (
                <></>
            )}
        </NavbarContainer>
    );
};

export default Navbar;
