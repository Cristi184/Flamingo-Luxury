import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "100px")};
  background: black;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 10px;
  opacity: ${(props) => (props.heightScroll === 0 ? 1 : 0.9)};

  @media (min-width: 700px) {
    height: 100px;
  }
`;

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;

`;

export const CenterContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  //background: blue;
`;

export const RightContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Halvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background-color: transparent;
    color: #a3674a;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;


export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Halvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover {
    background-color: transparent;
    color: #a3674a;
  }
`;

export const StyledLogo = styled.svg`
  height: 80%;

  g {
    path {
      fill: white;
      transform: translateY(-50px);
    }
  }

  path {
    fill: #ffaaaa;
    stroke: #ffaaaa;
    stroke-width: 4px
  }


`;
export const NavbarButton = styled.div`
  height: 100px;
  margin-top: 6%;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarButtonExtended = styled.button`
  font-size: large;
  font-family: Arial, Halvetica, sans-serif;
  text-decoration: none;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  white-space: nowrap;
  overflow: hidden;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  padding-top: 15px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;

  @media (min-width: 700px) {
    display: none;
  }
`;
