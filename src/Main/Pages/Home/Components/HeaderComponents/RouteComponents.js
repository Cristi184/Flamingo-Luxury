import {
    ContainerImage,
    HaderContainerConcept,
    ParagraphHeader,
    ParentContainerConcept, TitleH1,
    TitleHeader
} from "./RouteComponents.style";


const RouteComponents = (props) => {
    return (
        <ParentContainerConcept>
            <ContainerImage>
                <HaderContainerConcept imgUrl={props.background}>
                    <TitleHeader>
                        <TitleH1>{props.title} </TitleH1>
                        <p>Flamingo > {props.title}</p>
                    </TitleHeader>
                </HaderContainerConcept>
            </ContainerImage>
            {props.children}
        </ParentContainerConcept>
    )
}
export default RouteComponents