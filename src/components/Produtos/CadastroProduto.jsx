import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Gestao.css';
import NavbarLinks from '../Navbar/NavbarLinks';

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

    <tr>
        <td>004</td>
        <td>Produto E</td>
        <td>R$ 50.00</td>
        <td>200</td>
        <td>100</td>
    </tr>

    <tr>
        <td>005</td>
        <td>Produto F</td>
        <td>R$ 19.99</td>
        <td>200</td>
        <td>100</td>
    </tr>

    <tr>
        <td>006</td>
        <td>Produto G</td>
        <td>R$ 9.75</td>
        <td>200</td>
        <td>100</td>
    </tr>

    <tr>
        <td>007</td>
        <td>Produto H</td>
        <td>R$ 12.50</td>
        <td>200</td>
        <td>100</td>
    </tr>

    <tr>
        <td>008</td>
        <td>Produto I</td>
        <td>R$ 35.00</td>
        <td>200</td>
        <td>100</td>
    </tr>

          </table>
          <Link to={"/GestaoProdutos"} >
          <button id='BtnInserirItens'>Cadastrar</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroProdutos;
