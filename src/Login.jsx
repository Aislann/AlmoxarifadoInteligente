import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css'

const Login = () => {
  return (
    <div>
      <div className="main">
        <div className="header">
          <span>Login</span>
        </div>
        <div className='conteudo'>
        <Link to={"/GestaoProdutos"}>
        Gestão de Produtos
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
