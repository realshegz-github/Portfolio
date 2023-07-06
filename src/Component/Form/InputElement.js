import styled from "styled-components";

export const StyledInput = styled.input`
  background: #888;
  ${"" /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */}
  width: 100%;
  margin-bottom: 30px;
  height: 3rem;
  padding: 1rem;
  border-top: none;
  border-right: none;
  border-left: none;
  border-color: rgba(85, 88, 85, 0.791);
  outline: none;
  color: rgba(227, 232, 226, 0.974);
  font-size: 1rem;
  &::placeholder {
    color: rgba(227, 232, 226, 0.573);
    font-weight: 100;
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 10px;
    font-size: 14px;
    &::placeholder {
      font-weight: 400;
      font-size: 14px;
    }
  }
`;
