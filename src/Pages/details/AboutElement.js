import styled from "styled-components";
// import about from "../../assets/about.jpg";

export const Wrapper = styled.section`
  width: 100%;
  color: black;
  display: flex;
  padding: 100px 150px 90px;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1150px) {
    padding: 60px 100px 70px;
  }
  @media screen and (max-width: 900px) {
    padding: 40px 30px 50px;
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
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const ContainerTextOne = styled.div`
  max-width: 40%;
  h2 {
    font-size: 40px;
    font-family: "Montserrat";
    margin-bottom: 10px;
    ${"" /* text-align: center; */}
  }
  p {
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 10px;
  }
  span {
    color: green;
    font-weight: 700;
  }
  .tv-icon {
    font-size: 16px;
  }
  @media screen and (max-width: 1100px) {
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
  @media screen and (max-width: 1000px) {
    max-width: 100%;
    display: block;
    font-family: "Roboto";
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
export const ContainerTextTwo = styled.div`
  max-width: 45%;
  font-family: "Roboto";

  p {
    line-height: 25px;
    font-size: 18px;
    margin-bottom: 30px;
    text-align: justify;
  }
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;
export const TextBox = styled.div`
  span {
    color: green;
    font-family: "Montserrat";
  }
`;
