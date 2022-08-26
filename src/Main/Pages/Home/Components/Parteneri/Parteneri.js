import Background from "../FigranSRL/Assets/background.jpg";
import RouteComponents from "../HeaderComponents/RouteComponents";
import {
    ContainerDiv,
    ContainerImage,
    ContainerParagraph,
    ContainerSection,
    ContentContainer,
    ParagraphConcept, TitleConcept
} from "./Parteneri.style";
import PCE from './Assets/PCE.jpg'

const Parteneri = () => {
    return (
        <RouteComponents background = {Background} title = "Parteneri" >
            <ContentContainer>
                <ContainerDiv>
                    <ContainerSection>
                    <ContainerParagraph>
                        <TitleConcept>PROFESSIONAL CONSULTING ENGINEERS</TitleConcept>
                        <h4>Proiectare structură</h4>
                        <ParagraphConcept>Professional Consulting Engineers este o entitate juridică românească specializată în consultanță, management și proiectare în construcții – fondată de doi ingineri structuriști, Bogdan Radu și Dragoș Mihăilă. Au dobândit în activitate o viziune valoroasă asupra diverselor aspecte, cum ar fi: proiectare structură, managementul conceptului de proiectare, consultanță, due diligence, estimarea costurilor, calendarul executării clădirilor, autorizare, supravegherea șantierului, controlul calității.
                            De-a lungul anilor, Professional Consulting Engineers a menținut un parteneriat strâns cu Viena Consulting Engineers, colaborând pe mai multe proiecte. Această colaborare profesională a fost apreciată de Marcus Stu (Manager Local) și Wolfgang Dietrich Denk (Managing Partener).</ParagraphConcept>
                    </ContainerParagraph>
                    <ContainerImage src={PCE}/>
                    </ContainerSection>
                </ContainerDiv>
            </ContentContainer>
        </RouteComponents>
    )
}

export default Parteneri