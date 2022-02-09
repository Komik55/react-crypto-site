import {
  BannerFooterBottom,
  BannerFooterBottomCenter,
} from "../../TopBanner/TopBannerElements";
import { Text, Title } from "../../Elements";
export default function CostAbout() {
  return (
    <BannerFooterBottom>
      <BannerFooterBottomCenter>
        <div>
          <div className="who__text">
            <Title fontSize={"2.1rem"} className="cost__about__text">
              Кто я такой?
            </Title>
          </div>
          <svg
            width="90"
            height="92"
            viewBox="0 0 90 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.3731 59.9866L22.8623 37.2413L52.8157 30.851L43.3731 59.9866Z"
              stroke="#E7E7E7"
              stroke-width="3"
              stroke-linejoin="round"
            />
            <path
              d="M54.2687 68.4128L31.438 43.0949L64.7792 35.9819L54.2687 68.4128Z"
              stroke="#E7E7E7"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-15px",
          }}
        >
          <Text maxWidth={"536px"}>
            Обо мне: Меня зовут Александр я около 4х лет занимают криптовалютой,
            пережил дамп 2017 года - когда все обсуждали крах биткоина, я
            откупал биткоин по 5.000$ за монету. Собирал свои майнинг фермы.
            Попал в крипту благодаря своей поездке на бали в начале 2017 года.
            <svg
              style={{ marginLeft: "85px" }}
              width="63"
              height="22"
              viewBox="0 0 63 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M61.2983 5.13477L45.507 18.046L38.0644 6.37507L26.3557 15.7381L16.2585 3.74722L2.00012 15.1117"
                stroke="#E7E7E7"
                stroke-width="4"
              />
            </svg>
          </Text>
          <Text maxWidth={"536px"}>
            Там я попал в комьюнити сетевиков которые занимались криптовалютой -
            с тех пор я занимаюсь криптовалютой до сих пор.Я уверенно могу
            заявить что криптовалюта это будущее а будущее как правило придёт ко
            всем хотите вы этого или нет. И чем раньше вы это поймёте, тем легче
            вам будет жить в будущем.
          </Text>
        </div>
      </BannerFooterBottomCenter>
    </BannerFooterBottom>
  );
}
