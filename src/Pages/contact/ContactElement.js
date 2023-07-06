import styled from "styled-components";

export const Box = styled.div`
  background-color: #15181d;
`;
export const ContactWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  color: #99a1aa;
  display: flex;
  padding: 70px 150px 90px;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1150px) {
    padding: 50px 100px 70px;
  }
  @media screen and (max-width: 900px) {
    padding: 40px 0px 50px;
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
  @media screen and (max-width: 1000px) {
    margin-bottom: 30px;
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
  @media screen and (max-width: 1000px) {
    h1 {
      font-family: "Roboto Slab";
      margin-bottom: 50px;
      font-size: 24px;
    }
    p {
      display: none;
    }
  }
`;
export const InputBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 50px 50px 60px 50px;
  width: 30vw;
  background: #232629;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #99a1aa;
  p {
    margin-bottom: 30px;
    font-family: "Roboto Slab";
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    border-radius: 8px;
    p {
      margin-bottom: 20px;
      font-family: "Roboto Slab";
    }
    span {
      font-size: 14px;
    }
  }
`;
export const Button = styled.button`
  font-family: "Roboto Slab";
  margin-top: 20px;
  padding: 15px;
  background: #485155;
  color: #fff;
  font-weight: 600;
  border-radius: 3px;
  font-size: 16px;
  border: none;
  outline: none;
  &:hover {
    opacity: 0.7;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
`;
