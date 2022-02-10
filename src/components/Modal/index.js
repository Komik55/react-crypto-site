import styled from "styled-components";
import { Title, Text, Button } from "../Elements";
import { useState } from "react";
import Tinkoff from "../Form";
export const ModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #2a2e30b8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  transform: scale(1);
  display: flex;
  justify-content: center;
  transition: 0.5s;
`;
export const ModalContainer = styled.div`
  padding: 15px;
  width: 60%;
  background-color: #111;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 70%;
  }
  @media (min-width: 1100px) {
    width: 40%;
  }
  & p {
    position: relative;
    z-index: 50;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
  }
  & .group__text {
    position: relative;
    z-index: 1000;
    display: flex;
    gap: 32px;
    & svg {
      position: relative;
      z-index: 1000;
      transition: 0.5s;
      cursor: pointer;
      margin-top: 15px;
      &:hover {
        opacity: 0.6;
      }
    }
  }
  & .btn__groups {
    position: relative;
    z-index: 1000;
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    & input {
      border-radius: 7.176470756530762px;
      border: 1px solid #fff;
      text-align: center;
      background: linear-gradient(
        180deg,
        rgba(84, 84, 212, 0.2) 0%,
        rgba(84, 84, 212, 0.084) 100%
      );
      padding: 10px 4px;
      color: rgba(255, 255, 255, 0.52);
      &:focus {
        outline: none;
      }
    }
    & button {
      height: 40px;
    }
  }
`;
export const ShadowX = styled.div`
  height: 333px;
  left: 100px;
  z-index: 1;
  filter: blur(100px);
  transform: rotate(45deg);
  width: 531.8766252064119px;
  top: 0;
  border-radius: 233.5px;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(84, 84, 212, 0.2) 0%,
    rgba(84, 84, 212, 0.084) 100%
  );
`;
export const ShadowY = styled.div`
  z-index: 1000;
  height: 453px;
  width: 416px;
  background: linear-gradient(
    180deg,
    rgba(84, 84, 212, 0.2) 0%,
    rgba(84, 84, 212, 0.084) 100%
  );
  filter: blur(100px);
  position: absolute;
  right: 0px;
  bottom: 0;
  transform: rotate(-54.37deg) translate(-300px, 100px);
  border-radius: 233.5px;
`;
export default function Modal({ modal, setModal }) {
  const [appear, setAppear] = useState(false);

  return (
    <ModalWrap style={{ transform: `scale(${appear ? 0 : 1})` }}>
      <ModalContainer>
        <ShadowX></ShadowX>
        <ShadowY></ShadowY>
        <Title fontSize={"2rem"} style={{ position: "relative", zIndex: "50" }}>
          Ваш заказ
        </Title>
        <div className="group__text">
          <Text>Криптохаб “Проникни в самую суть крипты”</Text>
          <Text>111 1111 р. </Text>
          <svg
            onClick={() => {
              setAppear(true);
              setModal(false);
            }}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.68 13.0003L9.20509 10.5253C8.93164 10.2519 8.93164 9.80856 9.20509 9.53554L9.53503 9.2056C9.80856 8.93206 10.2519 8.93206 10.5249 9.2056L12.9997 11.6804L15.4747 9.20509C15.7481 8.93164 16.1914 8.93164 16.4645 9.20509L16.7949 9.53503C17.0684 9.80856 17.0684 10.2519 16.7949 10.5249L14.3196 13.0003L16.7944 15.4751C17.0679 15.7486 17.0679 16.192 16.7944 16.465L16.4645 16.7949C16.191 17.0684 15.7477 17.0684 15.4747 16.7949L12.9997 14.32L10.5249 16.7949C10.2514 17.0684 9.80805 17.0684 9.53503 16.7949L9.20509 16.465C8.93164 16.1914 8.93164 15.7481 9.20509 15.4751L11.68 13.0003Z"
              fill="#5454D4"
            />
            <circle cx="13" cy="13" r="12.5" stroke="#5454D4" />
          </svg>
        </div>
        <Text style={{ alignSelf: "flex-end" }}>Сумма: 111 1111 р.</Text>
        <Text>
          Какой-нибудь текст Какой-нибудь текстКакой-нибудь текстКакой-нибудь
          текстКакой-нибудь текстКакой-нибудь текстКакой-нибудь текст
        </Text>
        <div className="btn__groups">
          <input type={"email"} placeholder="Email" required />
          <input type={"text"} placeholder="Имя" required />
          <Tinkoff />
          <Text style={{ textAlign: "center", width: "100%" }}>
            Нажимая на кнопку “Оплатить”, я даю согласия на обработку
            персональныъ данных
          </Text>
        </div>
      </ModalContainer>
    </ModalWrap>
  );
}
