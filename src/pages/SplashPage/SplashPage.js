import {
  BlueBackground,
  AlignContainer,
  SubTitle,
  ButtonContainer,
  RegisterButton,
  LogInButton,
} from "./styled";
import whiteLogo from "../../imgs/Logo White Buy Group.png";
import { Link } from "react-router-dom";

export default function SplashPage() {
  return (
    <BlueBackground>
      <AlignContainer>
        <img src={whiteLogo} />
        <SubTitle>Compre mais barato.</SubTitle>

        <ButtonContainer>
        <Link to={"/signup"}>
          <RegisterButton type="button">Registrar</RegisterButton>
        </Link>
          <Link to={"/login"}>
            <LogInButton type="button">Log In</LogInButton>
          </Link>
        </ButtonContainer>
      </AlignContainer>
    </BlueBackground>
  );
}
