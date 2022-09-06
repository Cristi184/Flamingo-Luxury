import styled from "styled-components";


export const ParentContainerConcept = styled.div`
  padding-top: 100px;
  height: 100%;
  width: 100%;
`

export const HaderContainerConcept = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`
export const ContainerImage = styled.div`
  height: 400px;
  width: 100%;
`

export const TitleHeader = styled.div`
  color: white;
  text-align: center;
  position: relative;
`
export const TitleH1 = styled.h1`
  color: white;
`