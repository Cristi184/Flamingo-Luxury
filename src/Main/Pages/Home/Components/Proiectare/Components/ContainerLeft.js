import {ContainerImage, ContainerRow, ContainerTextLeft} from "../Proiectare.style";

const ContainerLeft = (props) => {
    const getList = ((props.paragraf).map((item) =>
    <li>{item}</li>
    ))


    return (<ContainerRow>
            <ContainerTextLeft>
                <h1>{props.title}</h1>
                {getList}
            </ContainerTextLeft>
            <ContainerImage imgUrl={props.img}></ContainerImage>
        </ContainerRow>
    )
}
export default ContainerLeft