import {Image} from "antd";
import {useState} from "react";

const MediaGallery = () => {
    const [visible, setVisible] = useState(false);
    return (<>
        <Image
            preview={{
                visible: false,
            }}
            height={240}
            width={500}
            src="https://machetearhitectura.ro/wp-content/uploads/2015/01/Randari-Interior-Ansamblu-Apartamente-Complex-Stejarii-Tiriac-Imobiliare-6.jpg"
            onClick={() => setVisible(true)}
        />
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