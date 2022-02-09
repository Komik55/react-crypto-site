import styled from "styled-components";
import BannerHeaderPath from "../../img/BannerHeader.png";
import BannerHeaderMini from "../../img/BannerMini.png";
import BannerFooterUrl from "../../img/BannerFooter.png";

export const Banner = styled.section`
  position: relative;
  & .mini__banner__header {
    dispay: none;
    & svg {
      display: none;
    }
  }
  @media (max-width: 480px) {
    & .mini__banner__header {
      dispay: block;
      width: 100%;
      filter: brightness(0.5px);
      height: 461px;
      background-image: url(${BannerHeaderMini});
      background-size: cover;
      background-position: 100%;
      position: relative;
      & svg {
        position: absolute;
        display: block;
      }
      & .mini__play {
        bottom: 0;
        left: 10px;
      }
      & .mini__left {
        top: 25%;
        left: 19%;
      }
      & .mini__right {
        right: 0;
        top: 7%;
      }
      & .mini__add {
        bottom: 15%;
        left: 45%;
      }
      & .redo {
        width: 100%;
        border-radius: 10px;
        filter: blur(100px);
        height: px;
        position: absolute;
        background: linear-gradient(
          180deg,
          rgba(251, 168, 28, 0.26) 0%,
          rgba(224, 86, 136, 0.15) 100%
        );
      }
    }
  }
`;

export const BannerHeader = styled.div`
  position: relative;
  height: 84vh;
  padding: 0px 10px;
  display: flex;
  border: none;
  box-shadow: none;
  background-image: url(${BannerHeaderPath});
  background-position: 100%;
  background-size: cover;
  margin-bottom: 35px;

  @media (max-width: 820px) {
    background-position: 50%;
    & .btn__svg {
      display: block;
    }
    & svg {
      display: none;
    }
  }
  @media (max-width: 480px) {
    width: 95%;
    height: 50vh;
    padding-right: 10px;
    background: none;
    padding-bottom: 20px;
    & .btn__mini {
      width: 205px;
      & > svg {
        display: block;
      }
    }
    & p {
      max-width: 300px;
    }
  }
  @media (max-width: 280px) {
    width: 90%;
    padding-left: 10px;
    padding-bottom: 120px;
    & h1 {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 230px) {
    & .btn__mini {
      margin: 0 auto;
      width: 70%;
    }
  }
`;
export const BannerHeaderInf = styled.div`
  @media (max-width: 820px) {
    margin-left: 70px;
  }
  @media (max-width: 620px) {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-left: 0;
  }
  @media (max-width: 480px) {
    margin: 0;
    display: block;
  }
`;
export const BannerHeaderInfGroup = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  & .btn__mini {
    width: 268px;
    height: 58px;
    padding: 0;
    margin: 0;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 480px) {
      width: 205px;
      height: 44px;
      font-size: 16px;
      line-height: 22px;
    }
  }
`;
export const ShadowZ = styled.div`
  position: absolute;
  filter: blur(300px);
  width: 695.75px;
  height: 500px;
  transform: rotate(-180deg);
  background: linear-gradient(
    180deg,
    rgba(84, 84, 212, 0.27) 0%,
    rgba(84, 84, 212, 0.1134) 100%
  );
  @media (max-width: 850px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
    top: 0;
    right: 0;
    z-index: -100;
  }
`;
export const BannerFooter = styled.div`
  display: flex;
  flex-direction: column;
  & .header__banner {
    display: flex;
    align-items: flex-start;
    & p {
      margin-left: 70px;
      padding-top: 20px;
      max-width: 330px;
    }
    @media (max-width: 480px) {
      flex-wrap: wrap;
      & h1 {
        padding-top: 15px;
        padding: 0;
        margin: 0;
        margin-top: 75px;
      }
      & p {
        margin: 0;
        padding-bottom: 40px;
      }
    }
  }
`;

export const BannerFooterMain = styled(BannerHeader)`
  justify-content: center;
  background-image: url(${BannerFooterUrl});
  background-position: 0% 100%;
  align-items: center;
  height: 500px;
  flex-direction: column;
  @media (max-width: 820px) {
    & h2 {
      text-align: center;
    }
    & svg {
      display: block;
    }
    & div {
    }
  }
  @media (max-width: 480px) {
    width: 93%;
    height: 184px;
    & h2,
    & h1 {
      display: none;
    }
  }
`;

export const BannerFooterMainPlay = styled.div`
  cursor: pointer;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background-color: #5454d4a3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 820px) {
    align-self: center;
  }
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;

    & svg {
      width: 12px;
      height: 12px;
    }
  }
`;
export const BannerFooterBottom = styled.div`
  margin-top: -40px;
  padding: 0.9% 0;
  width: 100%;
  background-color: #1e1e2080;
  @media (max-width: 480px) {
    & svg {
      display: none;
    }
    & div {
      margin-top: 15px;
    }
    & div p {
      width: 90vw;
      max-width: 90vw;
    }
  }
`;
export const BannerFooterBottomCenter = styled.div`
  width: 70%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  & div {
    display: flex;
    justify-content: space-between;
    @media (max-width: 480px) {
      align-items: flex-start;
      & div:first-child {
        width: 95vw;
        display: flex;
      }
    }
  }
  & div .cost__about__text {
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 76px;
    position: relative;
    z-index: 10;
    @media (max-width: 570px) {
      font-size: 36px;
    }
    @media (max-width: 455px) {
      padding-left: 22px;
    }
    &::after {
      left: 2px;
      content: "";
      background: #5454d466;
      width: 100%;
      height: 20px;
      bottom: 10px;
      border-radius: 2px;
      position: absolute;
      z-index: -100;
    }
  }
  @media (max-width: 800px) {
    & {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & div {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 310px) {
    & summary {
      color: red;
      font-size: 1.5rem;
    }
  }
`;
