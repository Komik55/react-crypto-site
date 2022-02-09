import {
  Banner,
  BannerHeader,
  BannerHeaderInf,
  BannerHeaderInfGroup,
  ShadowZ,
  BannerFooter,
  BannerFooterMain,
  BannerFooterMainPlay,
  BannerFooterBottom,
} from "./TopBannerElements";
import { Title, Text, Button } from "../Elements";
import { useState } from "react";
import Modal from "../Modal";

export default function TopBanner() {
  const [modal, setModal] = useState(false);

  console.log(modal);

  return (
    <Banner id="main">
      <BannerHeader>
        <ShadowZ className="shadow__header"></ShadowZ>
        <BannerHeaderInf>
          <BannerHeaderInfGroup>
            <Title>КриптоХаб</Title>
            <h2 style={{ marginTop: "-40px", maxWidth: "300px" }}>
              проникни в самую глубь крипты.
            </h2>
            <Text maxWidth={"370px"}>
              КриптоХаб - это практическое погружение в мир криптовалют,
              спекуляций и заработка. За 18 дней вы узнаете все то, на что у
              других уйдут годы. Потому что вы получите реальный опыт полученный
              мной за 4 года.
            </Text>
            <Button
              id="btn__acc"
              margin={"12px 0 0 0"}
              className="btn__mini"
              onClick={() => setModal((prev) => !prev)}
            >
              Принять Участие
              <svg
                className="btn__svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 7.5C8 6.94772 8.44772 6.5 9 6.5L17 6.5C17.5523 6.5 18 6.94772 18 7.5V15.5C18 16.0523 17.5523 16.5 17 16.5C16.4477 16.5 16 16.0523 16 15.5V9.91421L7.70711 18.2071C7.31658 18.5976 6.68342 18.5976 6.29289 18.2071C5.90237 17.8166 5.90237 17.1834 6.29289 16.7929L14.5858 8.5L9 8.5C8.44772 8.5 8 8.05228 8 7.5Z"
                  fill="white"
                />
              </svg>
            </Button>
          </BannerHeaderInfGroup>
        </BannerHeaderInf>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <svg
            width="99"
            height="32"
            viewBox="0 0 99 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", left: "42%", top: "10%" }}
          >
            <path
              d="M2 2L25.2781 26.2247L39.7483 8.60674L57.0497 26.2247L75.9238 8.60674L97 30"
              stroke="#E7E7E7"
              strokeWidth="4"
            />
          </svg>
          <svg
            style={{ position: "absolute", left: "42%", bottom: "0" }}
            width="106"
            height="121"
            viewBox="0 0 106 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5135 78.1455L33.8715 20.1376L83.4287 50.3176L32.5135 78.1455Z"
              stroke="#E7E7E7"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M37.0689 100.854L38.508 39.3827L91.0239 71.3644L37.0689 100.854Z"
              stroke="#E7E7E7"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            style={{ position: "absolute", right: "0", top: "0" }}
            width="51"
            height="60"
            viewBox="0 0 51 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="18.5" stroke="white" strokeWidth="3" />
            <circle cx="31" cy="40" r="19.5" stroke="white" />
          </svg>
          <svg
            style={{ position: "absolute", right: "0", bottom: "0" }}
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 12.6666C39.7489 12.6666 41.1666 14.0844 41.1666 15.8333V34.8333H60.1666C61.9155 34.8333 63.3333 36.2511 63.3333 38C63.3333 39.7489 61.9155 41.1666 60.1666 41.1666H41.1666V60.1666C41.1666 61.9155 39.7489 63.3333 38 63.3333C36.2511 63.3333 34.8333 61.9155 34.8333 60.1666V41.1666H15.8333C14.0844 41.1666 12.6666 39.7489 12.6666 38C12.6666 36.2511 14.0844 34.8333 15.8333 34.8333H34.8333V15.8333C34.8333 14.0844 36.2511 12.6666 38 12.6666Z"
              fill="#E7E7E7"
            />
          </svg>
        </div>
      </BannerHeader>
      <div className="mini__banner__header">
        <div className="redo"></div>

        <svg
          className="mini__left"
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
        <svg
          className="mini__right"
          width="36"
          height="42"
          viewBox="0 0 36 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14" cy="14" r="12.95" stroke="white" strokeWidth="2.1" />
          <circle
            cx="21.7002"
            cy="28"
            r="13.65"
            stroke="white"
            strokeWidth="0.7"
          />
        </svg>

        <svg
          className="mini__play"
          width="66"
          height="76"
          viewBox="0 0 66 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.075 48.8573L20.924 12.5902L51.9077 31.459L20.075 48.8573Z"
            stroke="#E7E7E7"
            strokeWidth="1.87563"
            strokeLinejoin="round"
          />
          <path
            d="M22.9231 63.0546L23.8228 24.6224L56.6563 44.6177L22.9231 63.0546Z"
            stroke="#E7E7E7"
            strokeWidth="0.62521"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="mini__add"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.0878 11.4296C26.8175 11.7118 27.1803 12.5322 26.8981 13.2619L23.8322 21.1897L31.7601 24.2556C32.4898 24.5378 32.8526 25.3581 32.5704 26.0879C32.2882 26.8176 31.4678 27.1804 30.7381 26.8982L22.8103 23.8323L19.7444 31.7602C19.4622 32.4899 18.6419 32.8527 17.9121 32.5705C17.1824 32.2883 16.8196 31.468 17.1018 30.7382L20.1677 22.8104L12.2398 19.7445C11.5101 19.4623 11.1473 18.642 11.4295 17.9122C11.7117 17.1825 12.5321 16.8197 13.2618 17.1019L21.1896 20.1678L24.2555 12.2399C24.5377 11.5102 25.358 11.1474 26.0878 11.4296Z"
            fill="#E7E7E7"
          />
        </svg>
      </div>
      <BannerFooter>
        <div className="header__banner">
          <Title fontSize={"2rem"} maxWidth={"300px"}>
            Что мне даст этот тренинг?
          </Title>
          <Text>
            это как первый секс, один раз попробуешь и тебе понравится
          </Text>
        </div>
        <BannerFooterMain>
          <Title>КриптоХаб </Title>
          <BannerFooterMainPlay>
            <svg
              width="20"
              height="23"
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.74 11.191L0.766135 0.691244C0.60735 0.603283 0.412567 0.604293 0.254751 0.693897C0.0969347 0.7835 -9.82103e-05 0.948174 7.4594e-08 1.12623V22.1257C-9.82103e-05 22.3038 0.0969347 22.4685 0.254751 22.5581C0.412567 22.6477 0.60735 22.6487 0.766135 22.5607L19.74 12.061C19.9007 11.9722 20 11.806 20 11.626C20 11.4459 19.9007 11.2798 19.74 11.191Z"
                fill="white"
              />
            </svg>
          </BannerFooterMainPlay>
          <h2>проникни в самую глубь крипты</h2>
        </BannerFooterMain>
        {modal && <Modal setModal={setModal} />}
      </BannerFooter>
    </Banner>
  );
}
