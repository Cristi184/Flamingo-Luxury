import {useState, useEffect} from "react";
import {StoryNumberSecundaryDiv, StoryParagraph} from './Story.style'


const StoryNumber = (props) => {
    const [count, setCount] = useState(0)

    const setTime = () => {
        let a = props.timp*1000
        let b = props.numbers*1000
        return (a/b)*100
    }

    useEffect(() => {
        setTimeout(() => {
            if (count < props.numbers) {
                setCount((count) =>
                    count + 1)
            }
        }, setTime());
    });


    return (<>
        <StoryNumberSecundaryDiv>
            <h1>{count}</h1>
            <StoryParagraph>{props.description}</StoryParagraph>
        </StoryNumberSecundaryDiv>
    </>)

}
export default StoryNumber;