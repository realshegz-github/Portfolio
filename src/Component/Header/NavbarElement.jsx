import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 150px;
  background: aliceblue;
  @media screen and (max-width: 1100px) {
    padding: 0 100px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
    width: 100%;
  }
`;

export const Close = styled(RiCloseFill)`
  display: none;
`;

export const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

export const NavLink = styled.a`
  padding: 0 2rem;
  cursor: pointer;
  text-decoration: none;
  line-style: none;
  color: black;
  p {
    font-size: 1.3rem;
    &:hover {
      border-bottom: 3px solid green;
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 2rem;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const DivIcon = styled.div`
  .changer {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
    ${"" /* text-align: right; */}
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: green;
  cursor: pointer;
  text-decoration: none;
  line-style: none;
  @media screen and (max-width: 768px) {
    ${"" /* justify-content: space-between; */}
  }
`;
