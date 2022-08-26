import RouteComponents from "../HeaderComponents/RouteComponents";
import Background from "./Assets/Header.jpg"
import {GaleryContainer, GaleryTitle, ImageContainer} from "./Galerie.style";
import ImagePreviewGroup from "./ImagePreview/ImagePreviewGroup";
import Img1 from "./Assets/GaleryPhoto/1.jpg"
import Img2 from "./Assets/GaleryPhoto/2.jpg"
import Img3 from "./Assets/GaleryPhoto/3.jpg"
import Img4 from "./Assets/GaleryPhoto/4.jpg"
import Img5 from "./Assets/GaleryPhoto/5.jpg"
import Img6 from "./Assets/GaleryPhoto/6.jpg"


const Galerie = ()=>{
    const imageList =[Img1,Img2,Img3,Img4,Img5,Img6]


    return(
        <RouteComponents background = {Background} title = "Galerie" >
            <GaleryContainer>
                <GaleryTitle>Imagini</GaleryTitle>
                <ImageContainer>
                    <ImagePreviewGroup imageList = {imageList}/>
                </ImageContainer>
            </GaleryContainer>
        </RouteComponents>
        )
}
export default Galerie