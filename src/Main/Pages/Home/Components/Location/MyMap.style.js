import styled from "styled-components";

export const ContainerMyMap = styled.div`
  padding-left: 15%;
  padding-right: 15%;
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
  margin-bottom: 125px;
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
  color:#584e3f;
  font-size: 20px;
`