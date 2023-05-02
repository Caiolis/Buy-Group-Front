import { BlueBackground, AlignContainer, SubTitle, ButtonContainer, RegisterButton, LogInButton } from './styled';
import whiteLogo from '../../imgs/Logo White Buy Group.png';

export default function SplashPage() {
  return (
    <BlueBackground>
      <AlignContainer>
        <img src={whiteLogo} />
        <SubTitle>Compre mais barato.</SubTitle>

        <ButtonContainer>
          <RegisterButton type="button">Registrar</RegisterButton>
          <LogInButton type="button">Log In</LogInButton>
        </ButtonContainer>
      </AlignContainer>
    </BlueBackground>
  );
};