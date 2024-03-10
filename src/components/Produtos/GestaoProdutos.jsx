import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";

const GestaoProdutos = () => {
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
          <span>Gestão de Produtos</span>
        </div>
        <div className='conteudo'>
        <div className="gestaoProdutos">
        <button id='BtnInserirItens'>NOVO</button> 
        <table class="tabelaItens" id="tabelaItens">
            <tr>
                <th>Código</th>
                <th>Produto</th>
                <th>Preço</th>
                <th>Estoque Atual</th>
                <th>Estoque Mínimo</th>
                <th></th>
            </tr>
            <tr>
        <td>001</td>
        <td>Produto A</td>
        <td>R$ 25.00</td>
        <td>200</td>
        <td>100</td>
        <td className='icones'>
          <HiOutlineLightBulb className='BenchMarking'/>
          <MdEmail className='enviarEmail'/>
          <FaEdit className='editar' /> 
          <FiDelete className='deletar'/>
          </td>
    </tr>
    <tr>
        <td>002</td>
        <td>Produto B</td>
        <td>R$ 15.50</td>
        <td>200</td>
        <td>100</td>
        <td className='icones'>
          <CiPlay1 className='PlayBench' />
          <MdEmail className='enviarEmail'/>
          <FaEdit className='editar'/>
          <FiDelete className='deletar'/>
          </td>
    </tr>
    <tr>
        <td>003</td>
        <td>Produto C</td>
        <td>R$ 15.50</td>
        <td>200</td>
        <td>100</td>
        <td className='icones'>
          <HiOutlineLightBulb className='BenchMarking'/>
          <MdEmail className='enviarEmail'/>
          <FaEdit className='editar'/>
          <FiDelete className='deletar'/>
          </td>
    </tr>
    <tr>
        <td>004</td>
        <td>Produto Daaaaaaaaaaaaaaa</td>
        <td>R$ 15.50</td>
        <td>200</td>
        <td>100</td>
        <td className='icones'>
          <HiOutlineLightBulb className='BenchMarkingFail'/>
          <MdEmail className='enviarEmail'/>
          <FaEdit className='editar'/>
          <FiDelete className='deletar'/>
          </td>
    </tr>

          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestaoProdutos;
