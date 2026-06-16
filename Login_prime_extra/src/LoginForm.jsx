import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import logoPrimo from './assets/logo_primo_video.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  padding-top: 14px;
`;

const Logo = styled.img`
  width: 200px;
  margin-top: 1px;
  margin-bottom: 15px;
`;

const LoginCard = styled.div`
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 7px;
  padding: 10px 26px;
  background-color: #fff;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 10px;
  color: #111;
`;

const Label = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: 700;
  color: #111;
  margin-bottom: 6px;
  margin-top: 10px;
`;

const InputField = styled.input`
  width: 100%;
  height: 30px;
  padding: 3px 7px;
  background-color: #fff;
  border: 1px solid #a6a6a6;
  border-radius: 8px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);
  }
`;

const YellowButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #ffd814;
  border: 1px solid #fcd200; 
  border-radius: 20px;
  color: #111;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 18px;
  text-align: center;

  &:hover {
    background-color: #f7ca00;
    border-color: #fcd200;
  }
`;

const TermsNotice = styled.div`
  margin-top: 18px;
  font-size: 11px; 
  color: #555;
  line-height: 1.5;

  a {
    color: #0066c0;
    text-decoration: underline;
    font-size: 11px;
    cursor: pointer;
  }
`;

const HelpSection = styled.div`
  margin-top: 22px;
  border-top: 1px solid #e7e7e7;
  padding-top: 14px;

  a {
    color: #0066c0;
    text-decoration: none;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ResultBox = styled.div`
  margin-top: 20px;
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 7px;
  padding: 15px 26px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  font-size: 13px;
  color: #333;

  p {
    margin: 5px 0;
  }
`;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resultadoEmail, setResultadoEmail] = useState('');
  const [resultadoSenha, setResultadoSenha] = useState('');

  const emailInputRef = useRef(null);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault();

    setResultadoEmail(email);
    setResultadoSenha(password);

    const emailCorreto = "mario@teste.com";
    const senhaCorreta = "flamengo123";

    if (email === emailCorreto && password === senhaCorreta) {
      alert("Acesso Permitido.");
    } else {
      alert("Dados incorretos.");
    }
  };

  return (
    <Container>
      <Logo src={logoPrimo} alt="Logo Primo Video" />
        
      <LoginCard>
        <Title>Fazer login</Title>
        
        <Label>Insira um número de celular ou um<br /> endereço de e-mail</Label>
        <InputField 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailInputRef}
        />

        <Label>Senha</Label>
        <InputField 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <YellowButton onClick={handleLoginClick}>
          Continuar
        </YellowButton>

        <TermsNotice>
          Ao continuar, você concorda com as <a href="#">Condições de Uso e Notificação de Privacidade</a> da Amazon.
        </TermsNotice>

        <HelpSection>
          <a href="#">🛈 Precisa de ajuda?</a>
        </HelpSection>
      </LoginCard>

      {resultadoEmail !== '' || resultadoSenha !== '' ? (
        <ResultBox>
          <p><strong>Dados enviados na última tentativa:</strong></p>
          <p><strong>E-mail:</strong> {resultadoEmail}</p>
          <p><strong>Senha:</strong> {resultadoSenha}</p>
        </ResultBox>
      ) : null}
    </Container>
  );
}