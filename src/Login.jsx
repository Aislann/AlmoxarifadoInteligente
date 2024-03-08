import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './Login.css';

const Login = () => {
  return (
    <div>
      <div className="main">
        <div className="header">
          <span>Login</span>
        </div>
        <div className='conteudoLogin'>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" placeholder='Endereço de e-mail'/>
          <label htmlFor="password">Senha:</label>
          <input type='password' id="password" name="senha" placeholder='Senha' />
          <button>Entrar</button>
        <Link to={"/GestaoProdutos"}>
        Gestão de Produtos
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
