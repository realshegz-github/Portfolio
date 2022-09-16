import styled from "styled-components";

export const Wrapper = styled.div`
  color: black;
  font-family: "Roboto";
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: auto;
    padding:  0 0 50px 0;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px 150px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
    padding: 0 50px;
    
  }
`;
export const Box = styled.div`
  max-width: 450px;

  h1 {
    font-family: "Roboto Slab";
    margin-bottom: 20px;
    font-size: 40px;
    text-align: center;

    ${"" /* font-family: "Montserrat"; */}
  }
  p {
    font-size: 24px;
    line-height: 35px;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    h1 {
      font-family: "Roboto Slab";
      margin-bottom: 20px;
      font-size: 30px;
      text-align: center;
    }
    p {   
      font-size: 20px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  padding: 30px;
  border-radius: 10px;
  background-color: aliceblue;
  @media screen and (max-width: 768px) {
    ${'' /* display:none; */}
    width: 100%;
    border-radius: 8px;
  }
`;
export const ContentBox = styled.div`
  width: auto;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .logo-icon {
    color: green;
    font-size: 40px;
    margin-right: 30px;
    border-radius: 50%;
    padding: 20px;
    background: radial-gradient(
      rgba(255, 255, 255, 0.808),
      rgba(131, 185, 134, 0.801)
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    font-family: "Roboto Slab";
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    line-height: 25px;
  }
  &:hover {
    background: rgba(127, 165, 132, 0.733);
    color: white;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    .logo-icon {
      color: green;
      font-size: 30px;
      margin-right: 30px;
      border-radius: 50%;
      padding: 20px;
      background: radial-gradient(
        rgba(255, 255, 255, 0.808),
        rgba(131, 185, 134, 0.801)
      );
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h3 {
      font-family: "Roboto Slab";
      margin-bottom: 10px;
      font-size: 16px;
    }
    p {
      display: none;
      font-size: 16px;
      line-height: 24px;
    }
    &:hover {
      background: rgba(127, 165, 132, 0.733);
      color: white;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }
  }
`;
