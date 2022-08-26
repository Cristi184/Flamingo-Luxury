import 'antd/dist/antd.css';
import {Image} from 'antd';
import {PhotoContainer} from "./ImagePreviewGroup.style";


const ImagePreviewGroup = (prop) => {

    const Images = prop.imageList.map((item) => {
        return(
        <PhotoContainer>
            <Image width={400} src={item}/>
        </PhotoContainer>
        )
    })
    return (
        <Image.PreviewGroup>
            {Images}

        </Image.PreviewGroup>

    )
}
export default ImagePreviewGroup