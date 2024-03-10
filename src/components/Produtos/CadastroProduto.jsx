import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Gestao.css';

const CadastroProdutos = () => {
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
          <Link to={"/Configuracoes"}>
            <span>Configurações</span>
          </Link>
          
        </div>
      </nav>
    </div>
      <div className="main">
        <div className="header">
          <span>Cadastro de Produtos</span>
        </div>
        <div className='conteudo'>
        <div className="gestaoProdutos">
        
        <table class="tabelaItens" id="tabelaItens">
            <tr>
                <th>Código</th>
                <th>Produto</th>
                <th>Preço</th>
                <th>Estoque Atual</th>
                <th>Estoque Mínimo</th>
            </tr>
    <tr>
        <td>002</td>
        <td>Produto B</td>
        <td>R$ 15.50</td>
        <td>200</td>
        <td>100</td>
    </tr>

          </table>
          <button id='BtnInserirItens'>Cadastrar</button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroProdutos;
