import styled from "styled-components";


export const StoryDiv = styled.div`
  height: 100%;
`

export const StoryPrincipalDiv = styled.div`
  height: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
  @media (max-width: 425px) {
  padding: 0;
  }
`
export const StorySecundarBottomDiv = styled.div`
  width: 80%;
  height: 20%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 700px) {
    margin: 0 auto;
    flex-wrap: wrap;
    width: 80%;
  }
`


export const StorySecundaDiv = styled.div`
  width: 80%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`
export const StoryTextDiv = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 700px) {
    margin: 0 auto;
    width: 80%;
  }
`
export const StoryTextSecundarDiv = styled.div`
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 10%;
`

export const StoryPicturePrincipalDiv = styled.div`
  width: 50%;
  height: 100%;


  @media (max-width: 700px) {
    margin: 0 auto;
    flex-direction: column;
    width: 80%;
  }

`

export const StoryPictureSecundarDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const StoryPicture = styled.img`
  width: 48%;
  height: 90%;
`

export const StoryNumberSecundaryDiv = styled.div`
  width: 20%;
  height: 100%;

  @media (max-width: 700px) {
    margin: 0 auto;
    flex-direction: row;
    width: 80%;
  }
`

export const StoryParagraph = styled.p`

  &:after {
    display: block;
    content: '';
    border-bottom: solid 10px #c0a227;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

`
