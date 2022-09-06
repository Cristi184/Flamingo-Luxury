import styled from "styled-components";

export const ContainerProiectare = styled.div`
  height: 100%;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 5%;
  @media (max-width: 1010px) {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
    margin-top:0px;
  }
  @media (max-width: 1440px) {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
  }
`
export const ContainerRow = styled.div`
  margin-top: 15%;
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 15%;
  @media (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    margin-top: 5%;
  }
`
export const ContainerImage = styled.img`
  width: 570px;
  height: 390px;
  min-width: auto;
  min-height: 200px;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1010px) {
    width: 100%;
    margin-top: 4rem;
  }

`
export const ContainerTextLeft = styled.div`
  width: 50%;
  height: 50%;
  padding-right: 115px;

  @media (max-width: 1010px) {
    width: 100%;
    padding: 0
  }
`
export const ContainerTextRight = styled.div`
  width: 50%;
  height: 50%;
  padding-left: 115px;

  @media (max-width: 1010px) {
    width: 100%;
    padding: 0
  }
`