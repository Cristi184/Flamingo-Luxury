import React from 'react'
import {PresentationVideoDiv, PresentationVideoVideo} from './PresentationVideo.style'
import MyVideo from '../Assets/golden_gate.mp4'

const PresentationVideo = ()=>{
    return(<PresentationVideoDiv>
        <PresentationVideoVideo autoPlay loop muted>
            <source src={MyVideo} preload="none" type='video/mp4'/>
        </PresentationVideoVideo>
        </PresentationVideoDiv>)
}
export  default PresentationVideo;