import styled from "styled-components";

export const Button = styled.button`
  width: 300px;
  border: none;
  background: ${(props) => props.color || "yellow"};
  color: #fff;
  height: 50px;
  &:hover {
    transition: 0.5s;
    border: 2px solid #111;
  }
`;
