import { HeaderBox } from "./style.js";
import {
  Logo,
  NavItem,
  RedirectBox,
  RegisterButton,
  UserBox,
} from "./style.js";

export default function HeaderBar() {
  return (
    <HeaderBox>
      <Logo>3StepsTrip</Logo>
      <RedirectBox>
        <NavItem>Home</NavItem>
        <NavItem>Sobre Nós</NavItem>
        <NavItem>Passagens</NavItem>
        <NavItem>Hospedagem</NavItem>
      </RedirectBox>
      <UserBox>
        <NavItem>Login</NavItem>
        <RegisterButton>Register</RegisterButton>
      </UserBox>
    </HeaderBox>
  );
}
