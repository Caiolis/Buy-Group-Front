import { Container, LogoContainer, SubTitle, UserForm, MemberTitle } from './styled';
import logo from "../../imgs/Buy Group Logo.png";

import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} />
        <SubTitle>Crie sua conta.</SubTitle>
      </LogoContainer>

      <UserForm>
        <input
          type="text"
          placeholder="name"
          required
          // value={email}
          // disabled={isLoading}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          required
          // value={email}
          // disabled={isLoading}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="url"
          placeholder="imagem de perfil"
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
        <button type="submit">Criar uma conta</button>
      </UserForm>

      <MemberTitle>já tem uma conta? <Link to={"/login"}>Entrar</Link></MemberTitle>
    </Container>
  );
}