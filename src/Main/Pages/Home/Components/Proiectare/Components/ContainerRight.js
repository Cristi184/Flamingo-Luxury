import {ContainerImage, ContainerRow, ContainerTextRight} from "../Proiectare.style";

const ContainerRight = (props) => {
    const getList = ((props.paragraf).map((item) =>
    <li>{item}</li>
    ))


    return (<ContainerRow>
            <ContainerImage imgUrl={props.img}></ContainerImage>
            <ContainerTextRight>
                <h1>{props.title}</h1>
                {getList}
            </ContainerTextRight>
        </ContainerRow>
    )
}
export default ContainerRight