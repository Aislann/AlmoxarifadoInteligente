import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Gestao.css';
import NavbarLinks from '../Navbar/NavbarLinks';
import './CadastroProd.css';

const CadastroProdutos = () => {
    const [menuAberto, setMenuAberto] = useState(false);
  
    const toggleMenu = () => {
      setMenuAberto(!menuAberto);
    };

  return (
    <div>
      <NavbarLinks/>
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
                <th>Estoque Atual</th>
                <th>Estoque Mínimo</th>
            </tr>

            <tr>
                <td>002</td>
                <td>Produto B</td>
                <td>200</td>
                <td>100</td>
            </tr>

            <tr>
            <td>000</td>
            <td><input type="text" className='addProduto' placeholder='Insira um novo produto...'/></td>
            <td><input type="number" className='addProduto' placeholder='Insira o estoque atual...'/></td>
            <td><input type="number" className='addProduto' placeholder='Insira um estoque mínimo...'/></td>
            </tr>

          </table>
          <Link className='cad' to={"/GestaoProdutos"} >
          <button className='btn-addProd' id='BtnInserirItens'>Cadastrar</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroProdutos;
