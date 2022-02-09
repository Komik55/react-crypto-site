import styled from "styled-components";

export const Wrap = styled.div`
  padding: 4% 0;
  width: 100%;
  min-height: 100vh;
`;

export const Container = styled(Wrap)`
  margin: 0 auto;
  width: 70%;

  & details summary {
    font-size: 1.6rem;
  }
  & .svg__play {
    display: none;
  }
  & div .ques {
    font-size: 2.2rem;
    maxwidth: 400px;
  }
  @media (max-width: 1110px) {
    width: 85%;
  }
  @media (max-width: 870px) {
    width: 85%;
  }
  @media (max-width: 480px) {
    width: 95%;
    max-width: 95%;
    margin: 0 auto;
    & .svg__play {
      display: block;
    }
    & details summary {
      font-size: 1.4rem;
      padding-bottom: 5px;
    }
  }
  @media (max-width: 280px) {
    width: 100vw;
    max-width: 100%;
    & div .ques {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 310px) {
    & details summary {
      font-size: 1.2rem;
    }
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: ${(props) => props.fontSize || "3rem"};
  font-weight: bold;
  max-width: ${(props) => props.maxWidth};
`;
export const Text = styled.p`
  color: rgba(255, 255, 255, 0.7);
  max-width: ${(props) => props.maxWidth};
  @media (max-width: 480px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  border: none;
  width: ${(props) => props.width || "344px"};
  height: 58px;
  margin: ${(props) => props.margin};
  background-color: #5454d4;
  display: flex;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.5359398722648621px;
  text-align: center;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  &:active {
    transition: 0.5s;
    border: 1px solid #111;
  }
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 820px) {
    width: auto;
  }
`;
