import {ContainerDiv, ContentContainer, ParagraphConcept, TitleConcept} from "./Concept.style";
import Background from "./Assets/header.jpg"
import RouteComponents from "../HeaderComponents/RouteComponents";

const Concept = ()=>{
    return(
        <RouteComponents background = {Background} title = "Concept" >
            <ContentContainer>
                <ContainerDiv>
                <TitleConcept>Concept</TitleConcept>
                <ParagraphConcept>WIN Herăstrău este un ansamblu imobiliar exclusivist, situat în partea de nord a capitalei – cartierul Șoseaua Nordului. Include 6 clădiri (2S+DS+P+5E) cu apartamente cu câte 2-5 camere și oferă, prin toate componentele sale, confort, siguranță, funcționalitate și frumusețe.
                    <br/>
                    Nucleul echipei noastre – PSC Group – reunește perspectivele și experiența a două generații în sectorul construcțiilor și al dezvoltărilor imobiliare. Suma părerilor – uneori diferite, poate în aparență contrastante – a condus mereu la soluții creative și idei solid fundamentate, care ne-au plasat în “avangarda” domeniului nostru.
                    <br/>
                    Ingeniozitatea în a “potrivi” și reflecta contribuția fiecărui membru al echipei a fost, poate, primul și cel mai important pas către armonie.<br/>
                    Această coeziune se manifestă în egală măsură în relațiile interumane, cât și în aspectul și funcționalitatea lucrărilor realizate de noi. WIN Herăstrău este un exponent excelent. Pornind de la forme și culori, divizia de arhitectură – Metrik Architecture – a elaborat un plan echilibrat, fără stridențe, evitând monotonia prin fațade atipice. Un exemplu în acest sens este înlocuirea balcoanelor clasice cu logii dispuse în zigzag.
<br/>
                    Împreună cu Professional Consulting Engineers, Bettco Consulting și Vision Energy Partners – diviziile de proiectare rezistență, proiectare instalații electrice, sanitare și termice, și respectiv project management – s-a reușit încorporarea elementelor de rezistență și instalații în așa fel încât să nu fie vizibile din interiorul apartamentelor.
                    <br/>
                    Întreg cadrul WIN Herăstrău – natural și construit – invită la bună înțelegere și colaborare. Aleile pietonale și parcul adiacent contribuie la o atmosferă relaxantă și caldă, pentru adulți și pentru copii. Spațiul prevăzut pentru evenimente private, cât și celelalte facilități cu acces rezervat, sunt menite să înlesnească activitățile zilnice și relațiile sociale.
                    <br/>
                    Ansamblul WIN Herăstrău este susținut de pilonii armoniei și cultivă spiritul ei. Grație acestor caracteristici, se distinge prin eleganță, farmec și sentimentul de apartenență.
                </ParagraphConcept>
                </ContainerDiv>
            </ContentContainer>

        </RouteComponents>


    )
}
export default Concept