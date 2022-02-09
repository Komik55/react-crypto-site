import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 12px;
  display: flex;
  position: relative;
  align-items: center;

  @media (min-width: 870px) {
    justify-content: space-between;
  }
  @media (min-width: 870px) {
    justify-content: space-between;
  }
  & .menu__burger {
    display: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    @media (max-width: 870px) {
      display: block;
    }
  }
`;
export const List = styled.ul`
  list-style: none;
  @media (max-width: 870px) {
    width: 100%;
    top: -310px;
    position: absolute;
    z-index: 1000;
    height: 100vh;
    background: #19191b;

    align-items: center;
    flex-direction: column;
    gap: 17px;
    justify-content: center;
    animation: rot 1s alternate forwards;
    ${({ showMenu }) => (showMenu ? `display: flex;` : `display:none`)}
  }
  @keyframes rot {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(-15px, 339px);
    }
  }
  @media (min-width: 870px) {
    display: flex;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const ListItem = styled.li`
  display: inline-block;
  &:last-child {
    width: 300px;
    text-align: center;
    display: none;
    border: 2px solid #fff;
    padding: 5px 0px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: #fff;
      color: #111;
    }
    @media (max-width: 870px) {
      display: block;
    }
    @media (max-width: 480px) {
      width: 150px;
    }
  }
  & > a {
    color: #fff;
    margin-right: 22px;
    text-decoration: none;
    &:hover {
      transition: 0.5s;
      color: blue;
    }
  }
`;
export const Auth = styled.div`
  cursor: pointer;
  width: 157px;
  text-align: center;
  padding: 6px 0;
  border-radius: 5px;
  border: 1px solid #fff;
  &:hover {
    border: 1px solid #111;
    transition: 0.6s;
    background-color: #fff;
    color: #111;
  }
  @media (max-width: 870px) {
    display: none;
  }
`;
