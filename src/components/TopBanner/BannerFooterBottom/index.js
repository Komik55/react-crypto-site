import {
  BannerFooterBottom,
  BannerFooterBottomCenter,
} from "../TopBannerElements";
import { Text } from "../../Elements";
export default function BannerFooter() {
  return (
    <BannerFooterBottom>
      <BannerFooterBottomCenter>
        <svg
          style={{ alignSelf: "flex-end", marginTop: "-17px" }}
          width="76"
          height="71"
          viewBox="0 0 76 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="44.6167"
            cy="26.159"
            r="18.5"
            transform="rotate(67.3529 44.6167 26.159)"
            stroke="white"
            stroke-width="3"
          />
          <circle
            cx="30.3944"
            cy="44.0119"
            r="19.5"
            transform="rotate(67.3529 30.3944 44.0119)"
            stroke="white"
          />
        </svg>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text maxWidth={"400px"}>
            Вы научитесь пользоваться этой технологией раньше чем все остальные.
            Биткоин сделает с банками то же самое, что электронная почта сделала
            с обычной. Тот, кто поймет и научится этим пользоваться раньше,
            имеет преимущество. Подобно тому, как это произошло с интернетом.
            Чем раньше вы тут, тем дальше они там.
          </Text>
          <Text maxWidth={"400px"}>
            Вы узнаете как зарабатывать на криптовалютах, спекуляциях и
            инвестировании. Как проверять движение своих и чужих денег. Как
            выбрать и купить за копейки то, что будет стоить кучу бабок потом.
            Полный список навыков можно изучить в расписании уроков, которое
            находится на этой странице ниже.
          </Text>
        </div>
        <svg
          width="45"
          height="38"
          viewBox="0 0 45 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.14209 36.5408L8.25059 19.1835L19.4557 24.6969L24.0835 11.9893L37.4832 16.5054L43.1363 1.05944"
            stroke="#E7E7E7"
            stroke-width="2.92615"
          />
        </svg>
      </BannerFooterBottomCenter>
    </BannerFooterBottom>
  );
}
