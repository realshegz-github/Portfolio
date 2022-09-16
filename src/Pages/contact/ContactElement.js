import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const HeaderBox = styled.div`
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Roboto Slab";
    font-size: 34px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    h1 {
      font-size: 24px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 150px;
  @media screen and (max-width: 768px) {
    margin: 0 50px 50px;
    display: flex;
    flex-direction:column;
  }
`;
export const TextBox = styled.div`
  max-width: 450px;

  h1 {
    font-family: "Roboto Slab";
    margin-bottom: 20px;
    font-size: 40px;
    text-align: center;
  }
  p {
    font-family: "Roboto Slab";
    margin-top: 200px;
    font-weight: 600;
    text-align: center;
  }
  @media screen and (max-width: 768px) {

    h1 {
      font-family: "Roboto Slab";
      margin-bottom: 50px;
      font-size: 24px;
    }
    p {
     display:none;
    }
  }
`;
export const InputBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px 50px 60px 50px;
  width: 30vw;
  background: black;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: rgba(245, 245, 245, 0.903);
  p {
    margin-bottom: 30px;
    font-family: "Roboto Slab";
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 8px;
    p {
      margin-bottom: 20px;
      font-family: "Roboto Slab";
    }
    span{
      font-size:14px;
    }
  }
`;
export const Button = styled.button`
  font-family: "Roboto Slab";
  margin-top: 30px;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 3px;
  font-size: 16px;
  border: none;
  outline: none;
`;