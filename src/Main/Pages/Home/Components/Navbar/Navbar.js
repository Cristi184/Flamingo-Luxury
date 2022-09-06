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
            setTimeout(() => {
                toggleExtendedBar()
            }, 1000);
        } else {
            setExtendNavbar(false);
            handleOpenForm();
        }
    };


    return (
        <NavbarContainer extendNavbar={extendNavbar} heightScroll={offset}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo/>
                </LeftContainer>
                <CenterContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Acasă</NavbarLink>
                        <DropButton
                            title="Flamingo"
                            list={["Concept", "Proiectare", "Facilitati"]}
                        />
                        <NavbarLink to="/Galerie">Galerie</NavbarLink>
                        <DropButton title="Echipă" list={["FigranSRL", "Parteneri"]}/>
                    </NavbarLinkContainer>
                </CenterContainer>
                <RightContainer>
                    <NavbarButton>
                        <Button
                            onClick={handleClick}
                            sx={{
                                ":hover": {
                                    // bgcolor: "rgb(213, 160, 118)",
                                    color: "white",
                                },
                                "&.Mui-disabled": {
                                    color: "white",
                                },
                            }}
                            color="gold"
                            variant="contained"
                        >
                            Programează o întâlnire
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
                                bgcolor: "rgb(213, 160, 118)",
                                color: "white",
                            },
                            "&.Mui-disabled": {
                                color: "white",
                                background: "rgb(213, 160, 118)",
                            },
                        }}
                        color="gold"
                        variant="contained"
                    >
                        Programează o întâlnire
                    </Button>
                </NavbarExtendedContainer>
            ) : (
                <></>
            )}
        </NavbarContainer>
    );
};

export default Navbar;
