import {
    StyledCard,
    StyledFloorViewContainer,
    StyledFooterTitle,
    StyledLayout,
    StyledPath,
    StyledSVG
} from "../../UI/Styled";
import {Tooltip} from "@mui/material";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const FloorView = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const path = pathname.match(/[^\/]+$/)[0]
    const floor = path[1]
    const validPath = new RegExp(
        "^(f){1}([0-9]$)")

    useEffect(() => {
        if (!validPath.test(path)) {
            navigate('/badUrl', {replace: true});
        }
    }, [pathname])
    const handleSelect = (e) => {
        const apartment = e.target.id
        apartment && navigate(`${apartment}`, {replace: false});

    }
    return <StyledLayout>
        <StyledCard
            border="0"
            marginTop="-10vw"
            title={<StyledFooterTitle>Etajul {floor}</StyledFooterTitle>}
        >

            <StyledFloorViewContainer>

                <StyledSVG onClick={handleSelect} width="100%">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1689.36 1195.34">

                        <Tooltip title="Apartament TIP 5 - 111.00 mp" followCursor placement="top">
                            <StyledPath fill="#e07b39" pointer="visible" id="type5"
                                        d="M1189.26,889V604.69h376.13V889H1189.26"/>
                        </Tooltip>
                        <Tooltip title="Apartament TIP 1 - 80,40 mp" followCursor placement="top">
                            <StyledPath fill="#69bdd2" pointer="visible" id="type1"
                                        d="M1034,604.79l146.24-.1V889H878.81V681.18H1034V604.79"/>
                        </Tooltip>
                        <Tooltip title="Apartament TIP 1 - 80,40 mp" followCursor placement="top">
                            <StyledPath fill="#69bdd2" pointer="visible" id="type1"
                                        d="M568.36,889H869.81V681.18H715.22V604.69H568.36V889"/>
                        </Tooltip>
                        <Tooltip title="Apartament TIP 2 - 126.60 mp" followCursor placement="top">
                            <StyledPath fill="#80391e" pointer="visible" id="type2"
                                        d="M183.23,604.69H559.37V889H183.23V604.69"/>
                        </Tooltip>
                        <Tooltip title="Apartament TIP 4 - 116.40 mp" followCursor placement="top">
                            <StyledPath fill="#1979a9" pointer="visible" id="type4"
                                        d="M1529.4,595.69V444.52H1412.78v-3.6H1529.4l3.6,12.6h32.39V244.76H1189.26V529.11h64.79v-23.4h5.4v90h270"/>
                        </Tooltip>
                        <Tooltip title="Apartament TIP 1 - 80,40 mp" followCursor placement="top">
                            <StyledPath fill="#69bdd2" pointer="visible" id="type1"
                                        d="M568.36,244.76V529.11H715.22V452.62H869.81V244.76H568.36"/>
                        </Tooltip>
                        <Tooltip title="Apartament TIP 3 - 138.40 mp" followCursor placement="top">
                            <StyledPath fill="#b97455" pointer="visible" id="type3"
                                        d="M183.23,244.76H559.37V529.11H494.58v-23.4h-5.4v90h-306V244.76"/>
                        </Tooltip>
                        <Tooltip title="Apartament TIP 1 - 80,40 mp" followCursor placement="top">
                            <StyledPath fill="#69bdd2" pointer="visible" id="type1"
                                        d="M1180.26,529.11H1033.41V452.62H879.71l-.9-207.86h301.45V529.11"/>
                        </Tooltip>

                        <StyledPath fill="black" pointer="none" id="walls"
                                    d="M1065.8,234v-3.6H1109v14.4H1065.8V234m114.46,295.15h-83.87V490.05H1091v39.06h-1.79v9h161.25v2.69h9V505.71h-5.4v23.4h-64.79V410.33h64.79v63h5.4v-3.6h2.69v-5.4h-2.69V390.53h-70.19V244.76H1204v-14.4h-37.46v14.4h13.7V452.62H1091v8.63h5.4v-3.1h83.87v71m385.13-197.3V244.76H1304.8V439.12h23.4v5.4h-23.4v14.4h-5.4V244.76H1258v-14.4h321.78V331.81h-14.4m14.4,14.62v31.5h-14.4V358.14h-195.8v81h-5.4V352.74h131V304.15h5.39v48.59h64.79v-6.31h14.4M1437.62,604.69H1250.45V573.2h9v22.49h40V575h5.4v20.69h224.6V444.52H1412.78v-3.6H1533v12.6h32.39V410.33h14.33v57.59h-36V590.31h36.06v36h-14.4v-21.6H1443v27H1438l0-9v-18h-.36m5.4,91.79v25.2h-5.4V664.11h5.4v27h122.37v-21.6h14.4v61.19h-14.4V696.48h-72v25.2H1488v-25.2h-45m122.37,78.73V889h-54v14.4h68.39V752.27h-14.4v5.4h-72v-3.6H1488v9h77.38v12.14M1294,889h-36v14.4h82.78V889h-36V669.48H1294v5.4h5.4V889H1294m-39.59-165.56v16.19H1249V709.08h5.4v9h5.07v5.4h-5.07m-104.74,180V889h30.59V681.18H1091v-8.63h5.4v3.23h83.87V604.69h-83.87v39.07H1091V604.69h-1.79v-9h124.44v9h-24.38v64.79H1258v5.4h-3.6v9H1249v-9h-59.75V889H1204v14.4h-54.35M869.81,725.68V889h-108V735.17h-5.4v3.6H733.22v5.4h23.21V889H718.7v14.4h314.71V889H992.19V744.17h23.22v-5.4H992.19v-3.6h-5.4V889h-108V681.18h108v25.2h5.4v-25.2H1034V604.79h23.4v-9h-34.81v74.59H726V595.69h-34.2v9h23.4v76.49h41.21v25.2h5.4v-25.2h108v44.5m4.5-200.17H785.23v82.78h25.19v-9H794.23V534.51h75.58v64.78H853.62v9H895v-9h-16.2V534.51H954.4v64.78H938.2v9h25.2V525.51H874.31m4.5-117.46V244.76h21.6v-14.4H848.22v14.4h21.59V452.62h-108v-25.2h-5.4v25.2H715.22v76.49h-23.4v9H726V463.42h296.59v74.69h34.19v-9h-23.39V452.62H992.19v-25.2h-5.4v25.2h-108V244.76m-117,0V398.63h-5.4V395H733.22v-5.4h23.21V244.76H734.84v-14.4h48.59v14.4h-21.6M568.36,458.08l83.87.07v3.1h5.4v-8.63H568.36V244.76h71.29v-14.4H533.81v14.4h25.56V410.33H489.18v54h-2.53v5.4h2.53v3.6h5.4V415.73h64.79V529.11H494.58v-23.4h-5.4v32.4H659.43v-9h-1.8V490.05h-5.4v39.06H568.36v-71M443.83,431.92h-113V401.18h5.4v25.35H443.83V244.76h-36v-14.4h82.79v14.4H449.23V410.33h5.39v54h3.07v5.4H443.83v-37.8m-275-201.56H343v14.4h-6.83v124h-5.4v-3.45h-5v-5.4h5V244.76H183.23V288h-14.4V230.36m14.4,111.58v18H293.39v5.4h-5.78v3.45h-5.4v-3.45h-99v12.59h-14.4v-36h14.4m0,68.39h-14.4v54h14.4v-32.4H287.61V397.58h-5.4v28.95h-99v-16.2m306,194.36h9V573.2h-9v22.49H449.23V575h-5.4v20.69H320.2V575h-5.4v20.69H183.23V572.3h-14.4v54h14.4v-21.6h108v30.6h5.4v-30.6H489.18m55.43,298.75H599V889h-30.6V681.18h89.27v-8.63h-5.4v3.1H568.36v-71h83.87v39.07h5.4V604.69h1.8v-9H535v9h24.39v64.79H494.22v14.4h5.4v-9h59.75v64.79H499.62V709.08h-5.4v9h-5.08v5.4h5.08v21.59h65.15V889H544.61v14.4M168.83,647.89v75.59h14.4v-48.6H301.87v-5.4h-5.26v-5.4h-5.4v5.4h-108V647.89h-14.4M354.84,889v14.4h-186v-51h14.4V889H344.84V674.88h-7.19v-5.4h18v5.4h-5.4V889h3.6m90-192.56V889h-36v14.4h82.79V889H449.23V723.48h5.39v-54H443.83v5.4h5.4v16.2H397v-21.6h-9v5.4h3.6v21.6h52.19m210.73,207V889h34.27v14.4H654.56m411.24,0V889h26.27v14.4H1065.8M992.19,230.36h-27v14.4h21.59V398.63h5.4V395h23.22v-5.4H992.19V244.76h41.22v-14.4H992.19m445.43,523.88h5.4V889h14.39v14.4h-60.47V889h40.68V754.24M681.8,244.76v-14.4h33.43v14.4H681.8"/>
                        <StyledPath fill="rgb(37, 150, 190)" pointer="none" id="windows"
                                    d="M1565.39,410.34V377.93h14.33v32.41h-14.33m0-63.91V331.81h14.4v14.62h-14.4m0,323.05V626.29h14.4v43.19h-14.4m0,82.79v-21.6h14.4v21.6h-14.4m-108,151.17V889h54v14.4h-54m-116.62,0V889h56.15v14.4h-56.15m-136.77,0V889h54v14.4h-54m-112,0V889h57.6v14.4h-57.6m-58.66,0V889h32.39v14.4h-32.39m-344.58,0V889H718.7v14.4H688.83m-89.87,0V889h55.6v14.4H599m-108.34,0V889h54v14.4h-54m-135.78,0V889h53v14.4h-53m-186-51v-129h14.4v129h-14.4m0-204.58v-21.6h14.4v21.6h-14.4m0-75.59v-108h14.4v108h-14.4m0-162v-32.4h14.4v32.4h-14.4m0-68.39V288h14.4v54h-14.4M343,244.76v-14.4h64.79v14.4H343m147.58,0v-14.4h43.19v14.4H490.62m149,.06V230.36H681.8v14.46H639.65m75.58-.06V230.42h19.61v14.34H715.23m68.2,0v-14.4h64.79v14.4H783.43m117,0v-14.4H965.2v14.4H900.41m133,0v-14.4h32.39v14.4h-32.39m75.56,0v-14.4h57.59v14.4H1109m95,0v-14.4h54v14.4h-54"/>

                        <StyledPath fill="rgb(237,184,121)" pointer="none" id="balconies" className="cls-1"
                                    d="M561.17,230.36V171H869.81v59.39H561.17m317.64,0V171h310.45v59.39H878.81m-710,365.33H111L27,232.16H168.83V595.69M552,903.44H168.83V604.69H113V962.83H559.37V903.44H552m16.37,59.39V903.44H869.81v59.39H568.36m310.45,0V903.44h301.45v59.39H878.81m310.45,0V903.44H1578v59.39H1189.26m354.39-372.54V467.93h106.61V590.29H1543.65"/>

                    </svg>

                </StyledSVG>
            </StyledFloorViewContainer>
        </StyledCard>
    </StyledLayout>;
};

export default FloorView;
