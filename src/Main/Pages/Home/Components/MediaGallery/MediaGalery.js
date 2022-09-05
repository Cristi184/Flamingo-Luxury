import {Image} from "antd";
import {useState} from "react";
import {StyledImageWrapper} from "../UI/Styled";

const MediaGallery = () => {
    const [visible, setVisible] = useState(false);
    return (<>
        <StyledImageWrapper>
        <Image
            preview={{
                visible: false,
            }}
            src="https://machetearhitectura.ro/wp-content/uploads/2015/01/Randari-Interior-Ansamblu-Apartamente-Complex-Stejarii-Tiriac-Imobiliare-6.jpg"
            onClick={() => setVisible(true)}
        />
        </StyledImageWrapper>
        <div
            style={{
                display: 'none',
            }}
        >
            <Image.PreviewGroup
                preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                }}
            >
                <Image
                    src="https://machetearhitectura.ro/wp-content/uploads/2015/01/Randari-Interior-Ansamblu-Apartamente-Complex-Stejarii-Tiriac-Imobiliare-6.jpg"/>
                <Image
                    src="https://machetearhitectura.ro/wp-content/uploads/2015/01/Randari-Interior-Ansamblu-Apartamente-Complex-Stejarii-Tiriac-Imobiliare-7.jpg"/>
                <Image
                    src="https://machetearhitectura.ro/wp-content/uploads/2015/01/Randari-Interior-Ansamblu-Apartamente-Complex-Stejarii-Tiriac-Imobiliare-2.jpg"/>
            </Image.PreviewGroup>
        </div>
    </>)
}
export default MediaGallery