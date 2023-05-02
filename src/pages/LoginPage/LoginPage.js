import { Container, LogoContainer, SubTitle, UserForm, MemberTitle } from './styled';
import logo from "../../imgs/Buy Group Logo.png";

import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} />
        <SubTitle>Faça login.</SubTitle>
      </LogoContainer>

      <UserForm>
        <input
          type="email"
          placeholder="email"
          required
          // value={email}
          // disabled={isLoading}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          required
          // value={password}
          // disabled={isLoading}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </UserForm>

      <MemberTitle>Não tem uma conta? <Link to={"/signup"}>Criar Conta</Link></MemberTitle>
    </Container>
  );
}