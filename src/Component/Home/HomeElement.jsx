// import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  background-color: aliceblue;
  position: relative;
  @media screen and (max-width: 900px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 68px 0 84px;
  }
`;

export const Container = styled.div`
  max-width: 500px;
  h1 {
    font-size: 7rem;
    font-family: "Roboto Slab";
    @media screen and (max-width: 768px) {
      font-size: 5rem;
    }
  }
  p {
    font-family: "Roboto";
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const HireBtn = styled.a`
  background: green;
  font-family: "Roboto";
  cursor: pointer;
  text-decoration: none;
  line-style: none;
  border: none;
  padding: 10px 20px;
  font-size: 1.6rem;
  color: white;

  &:hover {
    cursor: pointer;
    boxshadow: "0px 92px 40px -59px rgba(108, 76, 223, 0.15)";
    background: rgb(131, 185, 134);
    ${"" /* transform: scale(1.05); */}
  }
  @media screen and (max-width: 768px) {
    padding: 7px 13px;
    font-size: 1rem;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  .abiodun {
    position: absolute;
    top: 120px;
    left: 20px;
    width: 90%;
    ${"" /* height: 415px; */}
  }
  .html {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 170px;
    left: 20px;
  }
  .react {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 50px;
    left: 100px;
  }
  .css {
    width: 50px;
    height: 70px;
    position: absolute;
    top: 170px;
    right: 30px;
  }
  .javascript {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 50px;
    right: 100px;
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const ImgCircle = styled.div`
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    rgba(255, 255, 255, 0.808),
    rgba(131, 185, 134, 0.801)
  );
  @media screen and (max-width: 768px) {
    display: none;
  }

  ${"" /* position: relative; */}
`;
