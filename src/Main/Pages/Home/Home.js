import Header from "./Components/Header";
import Footer from "./Components/Footer.Js";
import {Button, ThemeProvider} from "@mui/material";
import {StyledContainer, StyledScroll} from "./Components/UI/Styled";
import {useEffect, useState} from "react";
import {createTheme} from "@mui/material/styles";
import {Outlet, useLocation} from "react-router-dom";
import PresentationVideo from "./Components/PresentationVideo/PresentationVideo";
import Story from "./Components/Story/Story";
import Map from './Components/Location/MyMap'
import Apartments from "./Components/Apartments/Apartments";


const Home = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [formRef, setFormRef] = useState(null);
    const [headerRef, setHeaderRef] = useState(null);
    const [openForm, setOpenForm] = useState(false);

    const {palette} = createTheme();
    const {augmentColor} = palette;
    const createColor = (mainColor, textColor) =>
        augmentColor({color: {main: mainColor, contrastText: textColor}});
    const theme = createTheme({
        palette: {
            anger: createColor("#F40B27"),
            apple: createColor("#5DBA40"),
            steelBlue: createColor("#5C76B7"),
            gold: createColor("#a3674a", "white"),
        },
    });
    const {pathname} = useLocation();

    const handleFormScroll = () =>
        formRef.scrollIntoView({
            top: 500,
            behavior: "smooth",
        });
    const handleOpenForm = () => {
        setOpenForm(true);
    };
    const handleCloseForm = () => {
        setOpenForm(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const handleHeaderScroll = () => {
        headerRef.scrollIntoView({
            behavior: "smooth",
        });
    };
    const HomeContent = () =>
        <><PresentationVideo/>
            <Story/>
            <Apartments/>
            <Map/></>

    return (
        <ThemeProvider theme={theme}>
            <Header
                pathname={pathname}
                setRef={setHeaderRef}
                handleFormScroll={handleFormScroll}
                handleOpenForm={handleOpenForm}
            />
            <StyledContainer height="100%">
                {pathname === "/" ? <HomeContent/> : <Outlet/>}
                <StyledScroll>
                    {showTopBtn && (
                        <Button
                            color="gold"
                            variant="contained"
                            onClick={handleHeaderScroll}
                        >
                            ^
                        </Button>

                    )}
                </StyledScroll>
            </StyledContainer>

            <Footer
                pathname={pathname}
                setRef={setFormRef}
                handleCloseForm={handleCloseForm}
                openForm={openForm}
            />
        </ThemeProvider>
    );
};

export default Home;
