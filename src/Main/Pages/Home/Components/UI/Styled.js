import styled, {css} from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Modal} from "@mui/material";
import {Card} from "antd";

export const StyledContainer = styled.div`
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  width: ${({width}) => width};
  height: ${({height}) => height};
`;

//Footer

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;


  .MuiOutlinedInput-notchedOutline-hover {
    border-color: #a3674a;

  }
`;
export const StyledFooterTitle = styled.p`
  font-size: 30px;
  color: #a3674a;
  text-transform: uppercase;

`;
export const StyledCardContainer = styled.div`


  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 4px;
  }
`;

export const StyledForm = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;



`;
export const StyledFlexContainer = styled.div`
  display: flex;
  gap: ${({gap}) => gap};
  width: ${({width}) => width};
  height: ${({height}) => height};
  justify-content: ${({justify}) => justify || "center"};
  align-items: ${({align}) => align || "center"};
  flex-direction: ${({direction}) => direction};

`;
export const StyledResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {

    flex-direction: ${({direction}) => direction || "column"};

  }
`;

export const StyledResponsiveView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:50%;

  @media (max-width: 768px) {
 width:100%;
    flex-direction: ${({direction}) => direction || "column"};

  }
`;
export const StyledImageWrapper = styled.div`

  img{
    width:500px;
    
  }
  @media (max-width: 768px) {
  img{width:100vw;} 
  

  }
`;

export const StyledTextField = styled(TextField)`

  .MuiOutlinedInput-notchedOutline {
    border-color: #a3674a;

  }

  .MuiFormLabel-root.MuiInputLabel-root {
    color: #9ea0a6;
    ${({hasError}) =>
            hasError &&
            css`
              color: #d32f2f;
            `}
  }

  .MuiFormLabel-root.MuiInputLabel-root.Mui-focused {
    color: #a3674a;
    ${({hasError}) =>
            hasError &&
            css`
              color: #d32f2f;
            `}

  }
}

.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: #a3674a;
  ${({hasError}) =>
          hasError &&
          css`
            border-color: #d32f2f;
          `}

}

`;
export const StyledSocialMediaContainer = styled.div`
  margin-top: 10px;
  background-color: #3f4448;
`;

export const StyledText = styled.div`
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  color: white;
  font-size: ${({size}) => size};
`;

export const StyledScroll = styled.div`
  position: fixed;
  bottom: 85px;
  right: 30px;
  z-index: 99;
  @media (max-width: 768px) {
    bottom: 120px;
    right: 4px;
  }
`;
export const StyledSelectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  path {
    fill: transparent;
    stroke: #646464;
    stroke-width: 0.5px;
    stroke-linejoin: round;
  }

  path:hover {
    fill: rgba(175, 157, 110, 0.4);
    pointer-events: visible;
    cursor: pointer;
  }
`;

export const StyledSVG = styled.div`
  width: ${({width}) => width || "80%"};
  align-self: center;
  @media (max-width: 768px) {
    width: 100%;
  }

  image {
    width: 4878.43px;
    pointer-events: none;
  }
`;
export const StyledFloorViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  path:hover {
    fill: rgba(175, 157, 110, 0.4);
    pointer-events: visible;
    cursor: pointer;
  }
`;
export const StyledPath = styled.path`

  fill: ${({fill}) => fill || "rgba(175, 157, 110, 0.4)"};
  pointer-events: ${({pointer}) => pointer || "visible"};
  cursor: pointer;
`
export const StyledModal = styled(Modal)`
  opacity: 1;
  top: 105px !important;
  justify-content: center !important;
  background-color: white !important;
  margin: 0 auto;
  width: 60vw;
  height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 30px;
  border: 1px solid rgba(175, 157, 110, 0.4);
  @media (max-width: 768px) {
    padding: 10px;

    width: 70vw;
    overflow: scroll;
  }
  @media (max-width: 768px) {
    width: 80%;
    height: 75vh;
    p {
      padding-bottom: 10px;
      margin-left: 0;
    }

    .MuiBox-root {
      overflow: scroll;
      margin: 15px auto;
      width: 90%;
      padding-top: 0;
    }
  }

  .MuiBackdrop-root {

    width: 100%;
    opacity: 0 !important;
    background-color: white !important;

  }
`
export const StyledLayout = styled.div`
  display: flex;
  padding: 100px 10px 0;
  justify-content: center;
  flex-direction: ${({direction}) => direction};
  height: calc( 100vh - 100px);
  @media (max-width: 768px) {
    padding: 100px 0 0 ;
`
export const StyledCard = styled(Card)`
  padding: 5px;
  width: 100%;
  cursor: default !important;
  height: ${({height}) => height};

  .ant-card-body {
    margin-top: ${({marginTop}) => marginTop};

  }

  .ant-card-head-title {
    p {
      margin: 0;
      padding: 0;
    }

  }

  border: ${({border}) => border || "1px solid rgba(175, 157, 110, 0.4)"};

  @media (max-width: 918px) {
    width: 100%;

    padding: 5px;


  }
`
export const StyledParagraph = styled.p`
  font-size: 15px;
  color: #333333;
  text-transform: uppercase;
`
export const StyledTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #a3674a;
  text-transform: uppercase;
`
export const StyledLabel = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #333333;
  text-transform: uppercase;
`