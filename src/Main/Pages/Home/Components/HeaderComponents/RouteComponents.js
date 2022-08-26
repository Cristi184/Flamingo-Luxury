import {HaderContainerConcept, ParagraphHeader, ParentContainerConcept, TitleHeader} from "./RouteComponents.style";


const RouteComponents = (props) => {
    return (
        <ParentContainerConcept>
            <HaderContainerConcept imgUrl={props.background}>
                <div>
                    <TitleHeader>{props.title} </TitleHeader>
                    <ParagraphHeader>Flamingo > {props.title}</ParagraphHeader>
                </div>
            </HaderContainerConcept>
            {props.children}
        </ParentContainerConcept>
    )
}
export default RouteComponents