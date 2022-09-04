import styled from "styled-components";

export const TextContainer =styled.div`
margin-top: 40px;
`

export const ContainerMyMap = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  background-color: #d5a076;
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
  color:#584e3f;
  text-transform: uppercase;


  @media (max-width: 900px) {
    margin-bottom: 50px !important;
    text-align: left;

  }
  
  
`

export const SubHeaderText = styled.h2`
  color: #584e3f;
  text-transform: uppercase;
`

export const ParagraphText = styled.p`
  color:white;
  font-size: 20px;
`

export const SpanText = styled.span`
color:rgb(88, 78, 63);
`