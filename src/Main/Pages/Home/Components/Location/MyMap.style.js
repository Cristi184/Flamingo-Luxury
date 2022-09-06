import styled from "styled-components";
import background from "./image/background.png"

export const TextContainer = styled.div`
  margin-top: 40px;
`

export const ContainerMyMap = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  //background-color: #842e1b;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  
  &:before{
    content: '';
    position: absolute;
    top: 0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  @media (min-width: 900px) {
    height: 850px;
  }
  @media (max-width: 900px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`

export const HeaderTextMyMap = styled.h1`
  text-align: center;
  padding-top: 5%;
  margin-bottom: 80px;
  color: white;
  text-transform: uppercase;
  position: relative;


  @media (max-width: 900px) {
    margin-bottom: 50px !important;
    text-align: left;
  }


`

export const SubHeaderText = styled.h2`
  color: white;
  text-transform: uppercase;
  position: relative;

`

export const ParagraphText = styled.p`

  color: white;
  font-size: 20px;
  position: relative;

`

export const SpanText = styled.span`
  color: beige;
  position: relative;

`