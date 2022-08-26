import styled from "styled-components";


export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:5%;
  margin-bottom:5%;
  //background-color: grey;
`


export const ContainerDiv = styled.div`
  width: 60%;
  height: 80%;
  //background-color: rebeccapurple;
  @media (max-width: 768px) {
    width: 80%;
  }
  
`
export const ContainerSection = styled.div`
  display:flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display:flex;
    flex-direction: column;
  }
`

export const ContainerParagraph = styled.div`
  width: 80%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

export const ContainerImage = styled.img`
max-width: 100%;
  height: auto;
`

export const TitleConcept = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`

export const ParagraphConcept = styled.p`
  text-indent: 50px;
  font-size: 110%;
  text-align: justify;
  margin-right: 50px;
  @media (max-width: 768px) {
  margin-right: 0;
  }
`