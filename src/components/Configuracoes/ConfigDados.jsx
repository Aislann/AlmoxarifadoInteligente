import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './ConfigDadosStyle.css'

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
          <Link to={"/Logs"}>
            <span>BenchMarking Logs</span>
          </Link>
        </div>
      </nav>
    </div>
      <div className="main">
        <div className="header">
          <span>Configurações</span>
        </div>
        <div className='conteudoConfig'>
          <div className='campoEmail'>
            <button id='trocar'>Adicionar Email</button>
            {/* <input type="email" name="AddEmail" id="" placeholder='Adicionar Email'/> */}
          </div>
          <div className='campoZap'>
            <button id='trocar2'>Adicionar Whatsapp</button>
            {/* <input type="tel" name="AddTel" id="" placeholder='Adicionar Telefone'/> */}
          </div>
          <Link to={"/"} className='link-sair'>
          <span className='sair'>Sair</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfigDados;
