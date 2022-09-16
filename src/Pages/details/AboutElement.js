import styled from "styled-components";
// import about from "../../assets/about.jpg";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 50px 0;
  }
`;
export const Box = styled.div`
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Roboto Slab";
    font-size: 34px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    
    h1 {
      font-size: 24px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 150px;
  @media screen and (max-width: 768px) {
    display: block;
    margin: 0;
    padding: 0 50px;
  }
`;
export const ContainerTextOne = styled.div`
  max-width: 450px;
  h2 {
    font-size: 40px;
    font-family: "Montserrat";
    margin-bottom: 10px;
    text-align: center;
  }
  p {
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 10px;
  }
  span {
    color: rgb(131, 185, 134);
    font-weight: 700;
  }
  .tv-icon {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    h2 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      font-family: "Roboto";
      font-size: 18px;
      line-height: 35px;
      margin-bottom: 10px;
    }
  }
`;
export const MobileContent = styled.p`
  line-height: 35px;
  @media screen and (max-width: 768px) {
    display: block;
    font-family: "Roboto";
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
export const ContainerTextTwo = styled.div`
  max-width: 350px;
  font-family: "Roboto";

  p {
    line-height: 25px;
    font-size: 18px;
    margin-bottom: 30px;
    text-align: justify;
  }
  @media screen and (max-width: 768px){
    display: none;
  }
`;
export const TextBox = styled.div`
  span {
    color: rgb(131, 185, 134);
    font-family: "Montserrat";
  }
`;
