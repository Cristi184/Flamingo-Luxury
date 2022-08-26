import styled from "styled-components";

export const ContainerMyMap = styled.div`
height: 850px;
  padding-left: 15%;
  padding-right: 15%;
  background-color: #d5a076;
  
  @media (max-width: 900px) {
    height: 1000px;
  }
`

export const HeaderTextMyMap = styled.h1`
  text-align: center;
padding-top: 5%;
  margin-bottom: 125px;
  color:#584e3f;
  text-transform: uppercase;


  @media (max-width: 900px) {
    margin-bottom: 50px !important;
  }
  
  
`

export const SubHeaderText = styled.h2`
  color: #584e3f;
  text-transform: uppercase;
`

export const ParagraphText = styled.p`
  font-size: 25px;
`