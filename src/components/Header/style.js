import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBox = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-weight: 700;
  color: #112b3c;
  font-size: 28px;
  margin-left: 150px;
  :hover {
    cursor: pointer;
  }
`;

export const RedirectBox = styled.div`
  width: 560px;
  display: flex;
  justify-content: space-around;
`;

export const UserBox = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 150px;
`;

export const NavItem = styled(Link)`

  font-size: 24px;
  font-weight: 400;
  color: #808080;

  :hover {
    color: #e61c5d;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 122px;
  height: 60px;
  background-color: #e61c5d;
  border-radius: 45px;
  font-size: 20px;
  color: #ffffff;

  :hover {
    cursor: pointer;
    background-color: #ed3470;
  }
`;
