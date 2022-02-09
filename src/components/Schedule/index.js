import { Title, Text } from "../Elements";
import {
  ScheduleWrap,
  ScheduleList,
  ScheduleListItem,
  ScheduleText,
  ScheduleListItemBlock,
  Circle,
} from "./ScheduleElements";
import { useState } from "react";
import { data } from "./Data";
export default function Schedule() {
  const [count, setCount] = useState(1);
  const [fetch, setFetch] = useState(data);
  if (count > 18) {
    setCount(1);
  } else if (count <= 0) {
    setCount(18);
  }
  return (
    <ScheduleWrap id="schedule">
      <div>
        <Title
          fontSize={"2.3rem"}
          maxWidth={"350px"}
          className="title__schedule"
        >
          Расписание уроков и экзаменов
        </Title>
      </div>

      {fetch
        .filter((val) => val.id === count)
        .map((el) => {
          return (
            <ScheduleList
              key={el.id}
              className="render__fetch"
              style={{ height: `${el.id === 7 && "42vh"}` }}
            >
              <div
                className="shadow"
                style={{ marginTop: `${el.id === 7 && "20px"}` }}
              >
                {el.id}
              </div>
              <ScheduleListItem>
                <ScheduleListItemBlock>
                  <Circle
                    className="circle"
                    style={{
                      background: `${
                        el.id === 3 ||
                        el.id === 8 ||
                        el.id === 14 ||
                        el.id === 18
                          ? "#fcc93685"
                          : "rgba(84, 84, 212, 0.4)"
                      }`,
                    }}
                  >
                    {el.id}
                  </Circle>
                  <ScheduleText className="sch__header">
                    {el.title}
                  </ScheduleText>
                  <Text>{el.text}</Text>
                </ScheduleListItemBlock>
              </ScheduleListItem>
            </ScheduleList>
          );
        })}
      <div className="arrows">
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setCount((prev) => prev - 1)}
        >
          <circle
            r="19.1056"
            transform="matrix(-1 0 0 1 19.1054 19.1056)"
            fill="none"
          />
          <path
            d="M21.8702 25.3656C22.2119 25.0239 22.2119 24.47 21.8702 24.1284L17.2398 19.4979L21.8702 14.8675C22.2119 14.5258 22.2119 13.9719 21.8702 13.6303C21.5286 13.2886 20.9747 13.2886 20.633 13.6303L15.384 18.8793C15.0423 19.221 15.0423 19.7749 15.384 20.1165L20.633 25.3656C20.9747 25.7072 21.5286 25.7072 21.8702 25.3656Z"
            fill="white"
          />
        </svg>
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setCount((prev) => prev + 1)}
        >
          <circle cx="19.3834" cy="19.1056" r="19.1056" fill="#474749" />
          <path
            d="M15.4467 23.4047C15.105 23.063 15.105 22.5091 15.4467 22.1674L20.0771 17.537L15.4467 12.9065C15.105 12.5649 15.105 12.011 15.4467 11.6693C15.7883 11.3277 16.3422 11.3277 16.6839 11.6693L21.9329 16.9184C22.2746 17.26 22.2746 17.8139 21.9329 18.1556L16.6839 23.4047C16.3422 23.7463 15.7883 23.7463 15.4467 23.4047Z"
            fill="white"
          />
        </svg>
      </div>
      <ScheduleList>
        <ScheduleListItem>
          <ScheduleListItemBlock>
            <Circle>1</Circle>
            <ScheduleText>Заводим крипто кошелек.</ScheduleText>
            <Text maxWidth={"200px"} style={{ textAlign: "center" }}>
              Виды кошельков и безопасность
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle>2</Circle>
            <ScheduleText>Покупка/продажа и обмен</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Работа с мониторингом bestchange и обменниками. Покупка BTC на
              свой кошелек.
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle background={"#FCC936A8"}>3</Circle>
            <ScheduleText>Экзамен №3</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Как и зачем мониторить свои и чужие транзакции крипты Работа с
              блокчейнами и мониторингами. Как отслеживать транзакции и их
              подтверждения.
            </Text>
          </ScheduleListItemBlock>
        </ScheduleListItem>
      </ScheduleList>
      <ScheduleList>
        <ScheduleListItem>
          <ScheduleListItemBlock>
            <Circle>4</Circle>
            <ScheduleText>Спекуляции криптовалютами</ScheduleText>
            <Text maxWidth={"200px"} style={{ textAlign: "center" }}>
              Регистрация на бирже. Правила и стратегии работы.
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle>5</Circle>
            <ScheduleText>Как найти качественный проект</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Работа с мониторингом bestchange и обменниками. Покупка BTC на
              свой кошелек.
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle>6 </Circle>
            <ScheduleText>Стейбл-коины</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Защита от перепадов курса. Виды стейбл-коинов и как с ними
              работать.
            </Text>
          </ScheduleListItemBlock>
        </ScheduleListItem>
      </ScheduleList>
      <ScheduleList>
        <ScheduleListItem>
          <ScheduleListItemBlock>
            <Circle>7</Circle>
            <ScheduleText>Стейкинг</ScheduleText>
            <Text maxWidth={"260px"} style={{ textAlign: "center" }}>
              Стейкинг Фарминг DeFi. Пассивный источник дохода. Как это
              работает? Монеты, биржи, и стейкинг-провайдеры, которые
              поддерживают. Что это такое? Как заработать на кредитовании чужих
              пулов ликвидности.
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle background={"#FCC936A8"}>8</Circle>
            <ScheduleText>Экзамен №8</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Приватные пулы, лаунчпады - как зарабатывать на криптовалютных
              стартапах (СВЕРХПРИБЫЛЬ)
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle>9</Circle>
            <ScheduleText>Циклы биткоина</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Влияние хайпа на цену Прогнозы. Фундаментальный анализ 4-ех летних
              циклов, гугл-трендов и новостей.
            </Text>
          </ScheduleListItemBlock>
        </ScheduleListItem>
      </ScheduleList>
      <ScheduleList>
        <ScheduleListItem>
          <ScheduleListItemBlock>
            <Circle>10</Circle>
            <ScheduleText>NFT</ScheduleText>
            <Text maxWidth={"260px"} style={{ textAlign: "center" }}>
              Как купить и хранить NFT (non-fungible tokens) Что это такое, и
              как на этом можно заработать
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle background={"#FCC936A8"}>11</Circle>
            <ScheduleText>Play2Earn</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Как играть в крипто игры и зарабатывать на этом?
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle>12</Circle>
            <ScheduleText>Meta вселенные</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Meta вселенные что это, и как на этом заработать. Новый интернет
              WEB 3.0 Какие возможности нас ждут в будущем.
            </Text>
          </ScheduleListItemBlock>
        </ScheduleListItem>
      </ScheduleList>
      <ScheduleList>
        <ScheduleListItem>
          <ScheduleListItemBlock>
            <Circle>13</Circle>
            <ScheduleText>Майнинг</ScheduleText>
            <Text maxWidth={"260px"} style={{ textAlign: "center" }}>
              Майнинг хороший вид пассивного дохода, или нет? Как заработать на
              майнинге.
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle background={"#FCC936A8"}>14</Circle>
            <ScheduleText>Экзамен №14</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Инструменты для работы с криптой
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle>15</Circle>
            <ScheduleText>Своя криптовалюта</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Как создать свою криптовалюту и заработать на этом?
            </Text>
          </ScheduleListItemBlock>
        </ScheduleListItem>
      </ScheduleList>
      <ScheduleList>
        <ScheduleListItem>
          <ScheduleListItemBlock>
            <Circle>16</Circle>
            <ScheduleText>Заблуждения</ScheduleText>
            <Text maxWidth={"260px"} style={{ textAlign: "center" }}>
              Заблуждения по криптовалюте
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle background={"#FCC936A8"}>17</Circle>
            <ScheduleText>Экзамен №17</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Мои рекомендации для новичков{" "}
            </Text>
          </ScheduleListItemBlock>
          <ScheduleListItemBlock>
            <Circle>18</Circle>
            <ScheduleText>Факультатив</ScheduleText>
            <Text maxWidth={"300px"} style={{ textAlign: "center" }}>
              Вебинар. Обсуждения вопросов по обучению. Перспективные проекты.
              Когда крипто зима?
            </Text>
          </ScheduleListItemBlock>
        </ScheduleListItem>
      </ScheduleList>
    </ScheduleWrap>
  );
}
