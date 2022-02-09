import styled from "styled-components";
import { Button } from "../Elements";
import { Container } from "../Elements";
import ShadowCost from "../../img/shadowCost.png";

export const CostContainer = styled(Container)`
  @media (min-width: 600px) {
    min-height: 60vh;
  }

  @media (max-width: 780px) {
    margin: 0;
  }
`;
export const CostWrap = styled.section`
  postion: relative;

  & .shadow__cost {
    height: 200px;
    width: 531.8766252064119px;
    border-radius: 233.5px;
    background: linear-gradient(
      180deg,
      rgba(84, 84, 212, 0.15) 0%,
      rgba(84, 84, 212, 0.063) 100%
    );
    filter: blur(300px);
    position: absolute;

    transform: rotate(-54.37deg);
  }
  @media (max-width: 680px) {
    & .shadow__cost {
      display: none;
    }
  }
  & .cost__inf__svg {
    transform: translate(500px, 50px);
    @media (max-width: 660px) {
      display: none;
    }
  }

  @media (max-width: 630px) {
    & svg {
      display: none;
    }
  }
  @media (max-width: 580px) {
    padding-left: 3%;
    margin: 0;
  }
  @media (min-width: 630px) and (max-width: 780px) {
    padding-left: 3%;
  }
`;
export const CostWrapInf = styled.div`
  position: relative;
  z-index: 1000;
  & .mon {
    display: flex;
    gap: 12px;
  }
  @media (max-width: 480px) {
    & .cost__crypto {
      display: inline;
      font-size: 3.5rem;
    }
  }
  @media (max-width: 330px) {
    & .cost__crypto {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 820px) {
    & button {
      width: 300px;
    }
  }
  @media (max-width: 630px) {
    margin-left: 30px;
  }

  @media (max-width: 500px) {
    margin-left: 0;
    & button {
      width: 100%;
    }
  }
  @media (max-width: 450px) {
    & button {
      align-self: center;
      width: 80%;
    }
  }
  @media (max-width: 230px) {
    & .mon {
      display: block;
    }
  }
`;
export const CostButtons = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;
export const CostButton = styled(Button)`
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.5359398722648621px;
  text-align: center;
  background-color: #44445b;
  &:hover {
    transition: 0.5s;
    background-color: #5454d4;
  }
`;
