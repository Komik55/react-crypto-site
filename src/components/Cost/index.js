import {
  CostWrap,
  CostWrapInf,
  CostButtons,
  CostButton,
  CostContainer,
} from "./CostElements";
import { Title, Text, Button, Container } from "../Elements";
import Modal from "../Modal";
import { useState } from "react";
export default function Cost() {
  const [modal, setModal] = useState(false);
  return (
    <CostContainer id="cost">
      <CostWrap>
        <div className="shadow__cost"></div>
        <svg
          style={{ position: "absolute", left: "100px", marginTop: "-80px" }}
          width="102"
          height="102"
          viewBox="0 0 102 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.4525 27.7135C63.0331 28.4621 63.7075 30.3503 62.9589 31.9309L54.826 49.1023L71.9974 57.2352C73.5779 57.9838 74.2524 59.872 73.5038 61.4526C72.7552 63.0332 70.867 63.7076 69.2864 62.959L52.115 54.8261L43.9821 71.9974C43.2335 73.578 41.3453 74.2524 39.7647 73.5038C38.1842 72.7552 37.5097 70.867 38.2583 69.2864L46.3912 52.1151L29.2199 43.9822C27.6393 43.2336 26.9649 41.3454 27.7135 39.7648C28.4621 38.1842 30.3503 37.5098 31.9309 38.2584L49.1022 46.3913L57.2351 29.2199C57.9838 27.6393 59.8719 26.9649 61.4525 27.7135Z"
            fill="#E7E7E7"
          />
        </svg>
        <svg
          style={{ position: "absolute", right: "30%" }}
          width="89"
          height="94"
          viewBox="0 0 89 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32.77"
            cy="38.9181"
            r="22.4902"
            transform="rotate(-27.3707 32.77 38.9181)"
            stroke="white"
            strokeWidth="3.64706"
          />
          <circle
            cx="55.8235"
            cy="54.3619"
            r="23.7059"
            transform="rotate(-27.3707 55.8235 54.3619)"
            stroke="white"
            strokeWidth="1.21569"
          />
        </svg>

        <CostWrapInf>
          <svg
            style={{
              display: "block",
              float: "right",
              transform: "translateY(-10px)",
            }}
            width="63"
            height="20"
            viewBox="0 0 63 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L15.9645 16.573L25.2668 5.24719L36.3891 16.573L48.5225 5.24719L62.0714 19"
              stroke="#E7E7E7"
              strokeWidth="2.57143"
            />
          </svg>

          <Title
            fontSize={"2.1rem"}
            maxWidth={"450px"}
            className="cost__header__title"
          >
            <Title className="cost__crypto">КриптоХаб</Title> проникни в самую
            суть крипты
          </Title>
          <div className="mon">
            <Title
              fontSize={"1.6rem"}
              style={{
                textDecoration: "line-through #5454D4",
              }}
            >
              14.000р
            </Title>
            <Title fontSize={"1.6rem"}>10.000р</Title>
          </div>
          <Text maxWidth={"250px"}>
            скидка цена снижена до 10.000₽ до такого то числа
          </Text>
          <CostButtons>
            <Button style={{ width: "100%" }} onClick={() => setModal(true)}>
              Оплатить
            </Button>
            <CostButton style={{ width: "100%" }}>Рассрочка</CostButton>
          </CostButtons>
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input type={"checkbox"} />
            <Text maxWidth={"400px"}>
              Я согласен на обработку моих персональных данных в соответствии с
              Условиями
            </Text>
          </div>
        </CostWrapInf>
        <svg
          className="cost__inf__svg"
          width="52"
          height="39"
          viewBox="0 0 52 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.1501 1.37305L42.1111 20.1198L30.1181 13.2082L24.0602 26.9217L9.56516 20.953L2.17093 37.6196"
            stroke="#E7E7E7"
            strokeWidth="4"
          />
        </svg>
      </CostWrap>
      {modal && <Modal modal={modal} setModal={setModal} />}
    </CostContainer>
  );
}
