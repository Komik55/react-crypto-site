import { Container, Text, Title } from "../Elements";
import styled from "styled-components";
import { ShadowZ } from "../TopBanner/TopBannerElements";

export const shadowZ = styled.div`
  width: 700px;
  height: 500px;
  background: linear-gradient(
    180deg,
    rgba(84, 84, 212, 0.1) 0%,
    rgba(84, 84, 212, 0.042) 100%
  );
  filter: blur(300px);
  border-radius: 233.5px;
  position: absolute;
  z-index: -10;
`;
export const FaqContainer = styled(Container)`
  & div {
    margin-top: 70px;
  }
  & details {
    @media (max-width: 365px) {
      max-width: 300px;
    }
    @media (max-width: 190px) {
      max-width: 170px;
    }
  }
  & details:last-child {
    margin-bottom: 150px;
    @media (max-width: 420px) {
      max-width: 300px;
    }
    @media (max-width: 245px) {
      max-width: 200px;
    }
  }
  & details > summary {
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: left;
    cursor: pointer;

    position: relative;
    list-style-type: none;

    &::after {
      transition: 0.5s;
      cursor: pointer;
      content: " ";
      position: abolute;
      margin-left: 15px;
      display: inline-block;
      opacity: 0.55;
      border-left: 3.55px solid transparent;
      border-right: 3.55px solid transparent;
      border-top: 8.55px solid #5454d4;
    }
  }
  & details[open] summary::after {
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  @media (min-width: 1300px) {
    min-height: 70vh;
  }

  @media (min-width: 900px) {
    min-height: 50vh;
  }

  @media (min-width: 900px) and (max-width: 1300px) {
    min-height: 60vh;
  }
  @media (max-width: 950px) {
    min-height: 40vh;
  }
`;
export default function Faq() {
  return (
    <>
      <FaqContainer id="faq">
        <shadowZ></shadowZ>
        <svg
          className="svg__play"
          width="66"
          height="76"
          viewBox="0 0 66 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.075 48.8573L20.924 12.5902L51.9077 31.459L20.075 48.8573Z"
            stroke="#E7E7E7"
            stroke-width="1.87563"
            stroke-linejoin="round"
          />
          <path
            d="M22.9231 63.0546L23.8228 24.6224L56.6563 44.6177L22.9231 63.0546Z"
            stroke="#E7E7E7"
            stroke-width="0.62521"
            stroke-linejoin="round"
          />
        </svg>

        <div>
          <Title className="ques">Часто задаваемые вопросы:</Title>
          <details>
            <summary>В каком формате проходит обучение?</summary>
            <Text maxWidth={"400px"}>
              За 18 дней благодаря моему обучению вы получите мой четырехлетний
              опыт, я заложу фундамент каждому из вас с помощью которого вы
              быстро стартанете в крипте.<br></br>
              <br></br> В течении 18 дней участники осваивают различные приемы
              работы с криптовалютами и крипто-токенами, выполняют задания после
              каждого урока и сдают экзамены преподавателям.
            </Text>
          </details>
          <details>
            <summary>Когда начнется и закончится обучение?</summary>
            <Text maxWidth={"400px"}>
              За 18 дней благодаря моему обучению вы получите мой четырехлетний
              опыт, я заложу фундамент каждому из вас с помощью которого вы
              быстро стартанете в крипте.<br></br>
              <br></br> В течении 18 дней участники осваивают различные приемы
              работы с криптовалютами и крипто-токенами, выполняют задания после
              каждого урока и сдают экзамены преподавателям.
            </Text>
          </details>
          <details>
            <summary>Почему такая цена на обучение? </summary>
            <Text maxWidth={"400px"}>
              За 18 дней благодаря моему обучению вы получите мой четырехлетний
              опыт, я заложу фундамент каждому из вас с помощью которого вы
              быстро стартанете в крипте.<br></br>
              <br></br> В течении 18 дней участники осваивают различные приемы
              работы с криптовалютами и крипто-токенами, выполняют задания после
              каждого урока и сдают экзамены преподавателям.
            </Text>
          </details>
          <details>
            <summary>Чем это обучение отличается от остальных? </summary>
            <Text maxWidth={"400px"}>
              За 18 дней благодаря моему обучению вы получите мой четырехлетний
              опыт, я заложу фундамент каждому из вас с помощью которого вы
              быстро стартанете в крипте.<br></br>
              <br></br> В течении 18 дней участники осваивают различные приемы
              работы с криптовалютами и крипто-токенами, выполняют задания после
              каждого урока и сдают экзамены преподавателям.
            </Text>
          </details>
        </div>
      </FaqContainer>
    </>
  );
}
