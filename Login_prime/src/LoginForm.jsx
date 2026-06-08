import React, { useState, useEffect, useRef } from 'react';
import styles from './LoginForm.module.css';
import logoPrimo from './assets/logo_primo_video.png';

export default function LoginForm() {
  // Cria uma variável chamada email para guardar 
  // o texto digitado e uma função setEmail para 
  // atualizar esse valor a cada letra que o usuário 
  // digita. Sem isso, o React não conseguiria ler o 
  // valor do campo na hora de enviar o formulário.

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputRef = useRef(null);
  useEffect(() => {
  if (emailInputRef.current) {
    emailInputRef.current.focus();
  }
}, []);
  
//O que vai aparecer no rodapé
  const [resultadoEmail, setResultadoEmail] = useState('');
  const [resultadoSenha, setResultadoSenha] = useState('');

  const handleLoginClick = (e) => {
    e.preventDefault();

    setResultadoEmail(email);
    setResultadoSenha(password);

    // Estes são o email e senha corretos
    const emailCorreto = "mario@teste.com";
    const senhaCorreta = "flamengo123";

    if (email === emailCorreto && password === senhaCorreta) {
      alert("Acesso Permitido.");
    } else {
      alert("Dados incorretos.");
    }
  };

  return (
    <div className={styles.container}>
        <img src={logoPrimo} 
            alt="Logo Primo Video" 
            className={styles.logo}
            style={{width: '200px', marginBottom: '15px', marginTop: '1px'}} />
      
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Fazer login</h1>
        
      <p className={styles.label}>Insira um número de celular ou um<br />  endereço de e-mail</p>
        <input 
          type="text" 
          className={styles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailInputRef}
        />

        <p className={styles.label}>Senha</p>
        <input 
          type="password" 
          className={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button className={styles.yellowButton} onClick={handleLoginClick}>
          Continuar
        </button>

      <div className={styles.termsNotice}>
        Ao continuar, você concorda com as <a href="#">Condições de Uso e Notificação de Pivacidade</a> da Amazon.
      </div>

      <div className={styles.helpSection}>
        <a href="#">🛈 Precisa de ajuda?</a>
      </div>
    </div>

      {/* Bloco de resultado quando o usuário clicar no botão */}
      {resultadoEmail !== '' || resultadoSenha !== '' ? (
        <div className={styles.resultBox}>
          <p><strong>Dados enviados na última tentativa:</strong></p>
          <p><strong>E-mail:</strong> {resultadoEmail}</p>
          <p><strong>Senha:</strong> {resultadoSenha}</p>
        </div>
      ) : null}
    </div>
  );
}