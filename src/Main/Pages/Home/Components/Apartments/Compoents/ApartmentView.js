import {useEffect, useState} from "react";
import {
    StyledCard,
    StyledFlexContainer,
    StyledFooterTitle,
    StyledLabel,
    StyledLayout,
    StyledParagraph,
    StyledTitle
} from "../../UI/Styled";
import {useLocation, useNavigate} from "react-router-dom";
import MediaGallery from "../../MediaGallery/MediaGalery";


const ApartmentView = () => {
    const [selected, setSelected] = useState([]);
    const apartmentTypes = ["type1", "type2", "type3", "type4", "type5"]
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const path = pathname.match(/[^\/]+$/)[0]
    const apartment = path.slice(-1)
    const apartmentDetails = [{
        type: 1,
        totalArea: "80,40 mp",
        livingArea: "30,20 mp",
        bedroomArea: ["17.30 mp"],
        hallway: "3,40 mp",
        bathRoom: ["4,60 mp"],
        terrace: "12,70 mp",
        openSpace: true
    }, {
        type: 2,
        totalArea: "126.60 mp",
        livingArea: "16,40 mp",
        bedroomArea: ["14.30 mp", "14.60 mp"],
        kitchenette: "10,10 mp",
        bathRoom: ["5,40 mp", "3,00 mp"],
        terrace: "34,20 mp",
        dressing: "13,90 mp",
    }, {
        type: 3,
        totalArea: "138.40 mp",
        livingArea: "30,40 mp",
        bedroomArea: ["19.80 mp", "15.30 mp"],
        kitchenette: "13,30 mp",
        bathRoom: ["5,30 mp", "5,60 mp"],
        terrace: "28.70 mp",
        hallway: "4,40 mp",
        bedRoomDressing: true
    }, {
        type: 4,
        totalArea: "116.40 mp",
        livingArea: "26,20 mp",
        bedroomArea: ["19.80 mp", "15.30 mp"],
        kitchenette: "13,30 mp",
        bathRoom: ["5,30 mp", "5,60 mp"],
        terrace: "10,00 mp",
        hallway: "4,40 mp",
        bedRoomDressing: true
    },
        {
            type: 5,
            totalArea: "111,00 mp",
            livingArea: "29,20 mp",
            bedroomArea: ["14.30 mp", "14.30 mp"],
            kitchenette: "8.10 mp",
            bathRoom: ["3,40 mp", "3,00 mp"],
            terrace: "18,60 mp",
            hallway: "5,80 mp",
        }]

    useEffect(() => {
        if (apartmentTypes.indexOf(path) === -1) {
            navigate('/badUrl', {replace: true});
        }
        setSelected(apartmentDetails.filter(item => (item.type).toString() === apartment))
    }, [pathname])
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    return (

        <StyledLayout>
            <StyledCard
                border="none"
                size="small"
                title={<StyledFooterTitle>Apartament Tip {apartment}</StyledFooterTitle>}

            >
                <StyledFlexContainer gap="20px" align="flex-start">
                    <StyledFlexContainer width="50%">
                        <StyledCard
                            size="small"
                            border="none"
                            title={<StyledTitle>Suprafața totlă: {selected[0]?.totalArea}</StyledTitle>}
                        >
                            <StyledFlexContainer direction="column" justify="flex-start" align="flex-start" width="50%">
                                <StyledFlexContainer justify="flex-start">
                                    <StyledLabel>Living </StyledLabel>
                                    <StyledParagraph> {": " + selected[0]?.livingArea}</StyledParagraph>
                                </StyledFlexContainer>
                                {selected[0]?.dressing && <StyledFlexContainer>
                                    <StyledLabel>Dressing </StyledLabel>
                                    <StyledParagraph> {": " + selected[0]?.dressing}</StyledParagraph>
                                </StyledFlexContainer>}
                                {selected[0]?.kitchenette && <StyledFlexContainer>
                                    <StyledLabel>Bucătarie </StyledLabel>
                                    <StyledParagraph> {": " + selected[0]?.kitchenette}</StyledParagraph>
                                </StyledFlexContainer>}
                                {selected[0]?.bedroomArea.map((item, index) => <StyledFlexContainer>
                                    <StyledLabel>Dormitor{index > 0 && index + 1} </StyledLabel>
                                    <StyledParagraph> {": " + item}</StyledParagraph>
                                </StyledFlexContainer>)
                                }
                                {selected[0]?.bathRoom.map((item, index) => <StyledFlexContainer>
                                    <StyledLabel>Baie{index > 0 && index + 1} </StyledLabel>
                                    <StyledParagraph> {": " + item}</StyledParagraph>
                                </StyledFlexContainer>)
                                }
                                {selected[0]?.hallway && <StyledFlexContainer>
                                    <StyledLabel>Hol </StyledLabel>
                                    <StyledParagraph> {": " + selected[0]?.hallway}</StyledParagraph>
                                </StyledFlexContainer>}
                                {selected[0]?.terrace && <StyledFlexContainer>
                                    <StyledLabel>Terasă </StyledLabel>
                                    <StyledParagraph> {": " + selected[0]?.terrace}</StyledParagraph>
                                </StyledFlexContainer>}
                            </StyledFlexContainer>

                        </StyledCard>

                    </StyledFlexContainer>
                    <StyledFlexContainer width="50%" heigth="100%">
                        <StyledCard hoverable border="none"><MediaGallery/></StyledCard>
                    </StyledFlexContainer>
                </StyledFlexContainer>
            </StyledCard>

        </StyledLayout>

    );


}
export default ApartmentView;


