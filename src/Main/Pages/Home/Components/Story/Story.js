import {
    StoryDiv,
    StoryPicture,
    StoryPicturePrincipalDiv, StoryPictureSecundarDiv,
    StoryPrincipalDiv,
    StorySecundaDiv, StorySecundarBottomDiv,
    StoryTextDiv, StoryTextSecundarDiv
} from "./Story.style";
import React from 'react'
import Poza1 from '../Assets/Story-poza1.jpg'
import Poza2 from '../Assets/Story-poza2.jpg'
import Poza3 from '../Assets/Story-poza3.jpg'
import Poza4 from '../Assets/Story-poza4.jpg'
import StoryNumber from "./StoryNumberSecundary";

const Story = () => {
    return (
        <StoryDiv>
            <StoryPrincipalDiv>
                <StorySecundaDiv>
                    <StoryTextDiv>
                        <StoryTextSecundarDiv>
                        <h1>POVESTEA WIN HERĂSTRĂU</h1>
                        <p>În conceptul propus de noi, luxul este exprimat prin armonie. În toată activitatea
                            desfășurată – de la formarea echipei, la alegerea proiectelor, la relațiile cu clienții – am
                            căutat armonia, descoperind mereu noi fațete ale ei.
                            WIN Herăstrău este un “proiect de maturitate” – la nivel profesional și de aspirație.</p>
                        </StoryTextSecundarDiv>
                    </StoryTextDiv>
                    <StoryPicturePrincipalDiv>
                        <StoryPictureSecundarDiv>
                        <StoryPicture src={Poza1}/>
                        <StoryPicture src={Poza2}/>
                        </StoryPictureSecundarDiv>
                        <StoryPictureSecundarDiv>
                            <StoryPicture src={Poza3}/>
                            <StoryPicture src={Poza4}/>
                        </StoryPictureSecundarDiv>
                    </StoryPicturePrincipalDiv>
                </StorySecundaDiv>
                <StorySecundarBottomDiv>
                    <StoryNumber numbers = {10} description = {"MP CONSTRUIȚI"} timp ={10}/>
                    <StoryNumber numbers = {300} description = {"CLĂDIRI"} timp ={10}/>
                    <StoryNumber numbers = {200} description = {"APARTAMENTE"} timp ={10}/>
                    <StoryNumber numbers = {400} description = {"LOCURI DE PARCARE"} timp ={10}/>
                </StorySecundarBottomDiv>
            </StoryPrincipalDiv>

        </StoryDiv>
    )
}
export default Story;