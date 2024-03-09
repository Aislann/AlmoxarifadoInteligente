import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const ConfigDados = () => {
    const [menuAberto, setMenuAberto] = useState(false);
  
    const toggleMenu = () => {
      setMenuAberto(!menuAberto);
    };

  return (
    <div>
    <div className='selection'>
      <nav className={`navbar ${menuAberto ? 'menu-aberto' : ''}`}>
        <div className='menu-sanduiche' onClick={toggleMenu}>
          <div className='barra-menu'></div>
          <div className='barra-menu'></div>
          <div className='barra-menu'></div>
        </div>
        <div className='links'>
          <Link to={"/GestaoProdutos"}>
            <span>Produtos</span>
          </Link>
          <Link to={"/Requisicao"}>
            <span>Requisição</span>
          </Link>
        </div>
      </nav>
    </div>
      <div className="main">
        <div className="header">
          <span>Configurações</span>
        </div>
        <div className='conteudo'>
        </div>
      </div>
    </div>
  );
};

export default ConfigDados;
