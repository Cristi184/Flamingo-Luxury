import styled from "styled-components";


export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:5%;
  margin-bottom:5%;
  
`
export const ContainerDiv = styled.div`
  width: 60%;
  height: 80%;
  @media (max-width: 700px) {
    width: 80%;
  }
`

export const TitleConcept = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`

export const ParagraphConcept = styled.p`
  text-indent: 50px;
  font-size: 110%;
  text-align: justify;
  
`