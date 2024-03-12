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
        <div className="conteudo">
        <div className="cadProd">
          <label htmlFor="">Nome Produto: </label>
          <input type="text" className='addProduto' placeholder='Insira um novo produto...'/>

          <label htmlFor="">Estoque Atual: </label>
          <input type="number" className='addProduto' placeholder='Insira a quantidade do estoque atual...'/>

          <label htmlFor="">Estoque Mínimo: </label>
          <input type="number" className='addProduto' placeholder='Insira a quantidade do estoque mínimo...'/>

          <Link className='btn-cad' to={"/GestaoProdutos"} >
            <button className='btn-addProd' id='BtnInserirItens'>Cadastrar</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroProdutos;
