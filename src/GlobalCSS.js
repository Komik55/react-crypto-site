import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  body {
    line-height:1.5;
    background-color: #19191B;
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    color: #fff;
    @media(max-width:480px){
      & p{
        color:red;
      }
  }
}
`;
