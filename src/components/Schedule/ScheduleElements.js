import styled from "styled-components";
import { Text } from "../Elements";
export const ScheduleWrap = styled.section`
  margin-top: -220px;
  position: relative;

  & > div:first-child {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    @media (max-width: 480px) {
      justify-content: flex-start;
      & .title__schedule {
        text-align: left;
      }
    }
  }

  & .shadow {
    top: -25%;

    position: absolute;
    z-index: -5;
    font-size: 19rem;
    padding-bottom: 12px;
    color: #2f2f2f;
    font-weight: bolder;
  }
  & .render__fetch {
    padding: 15px 0;
    display: none;
  }
  & .circle {
    font-size: 2rem;
    font-weight: bold;
  }
  & h1 {
    text-align: center;
  }
  & .arrows {
    display: none;
  }
  @media (max-width: 480px) {
    & .arrows {
      gap: 22px;
      display: flex;
      justify-content: center;
      & svg {
        & circle {
          fill: #ffffff33;
        }
        cursor: pointer;
        &:hover circle {
          fill: #5454d4;
          transition: 0.5s;
        }
      }
    }
  }
  & .title__schedule {
    font-size: 36px;
    max-width: auto;
    font-style: normal;
    font-weight: 700;
    line-height: 41px;
    text-align: center;
    letter-spacing: 0px;
    text-align: center;
  }
  @media (max-width: 480px) {
    & .title__schedule {
      padding-top: 35px;
    }
  }
  @media (max-width: 480px) {
    & .render__fetch {
      position: relative;
      padding: 15px 0;
      display: flex;

      & .sch__header {
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 38px;
        letter-spacing: -0.7503158450126648px;
        text-align: center;
      }
      & p {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: -0.5002105832099915px;
        text-align: center;
      }
    }
    & h1 {
      margin-left: 0;
      font-size: 2rem;
      text-align: left;
      margin-top: 90px;
      padding: 50px 5px;
      max-width: 85vw;
      width: 100vw;
    }
  }

  @media (max-width: 310px) {
    & h1 {
      font-size: 1.5rem;
    }
  }
`;
export const ScheduleList = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 15px;
  gap: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-color: #1e1e2080;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const ScheduleListItem = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: flex-start;
  width: 70%;
  justify-content: space-between;
  @media (max-width: 870px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export const ScheduleListItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  display: flex;
  width: 69px;
  height: 69px;
  background-color: ${(props) => props.background || "#5454D466"};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;
export const ScheduleText = styled(Text)`
  font-size: "1rem";
  color: #fff;
`;
