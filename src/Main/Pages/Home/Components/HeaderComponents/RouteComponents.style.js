import styled from "styled-components";


export const ParentContainerConcept = styled.div`
  padding-top: 100px;
  height: 100%;
  width: 100%;
`

export const HaderContainerConcept = styled.div`
  height: 220px;
  width: 100%;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TitleHeader = styled.h1`
color: white;
  text-align: center;
`

export const ParagraphHeader = styled.p`
color: white;
  text-align: center;

`

