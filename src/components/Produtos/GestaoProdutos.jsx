import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Gestao.css';
import deletar from '/src/assets/deletar.svg'
import editar from '/src/assets/editar.svg'
import enviarEmail from '/src/assets/enviarEmail.svg'
import emailNone from '/src/assets/emailNone.svg'
import BenchMarking from '/src/assets/BenchMarking.svg'
import BenchMarkingFail from '/src/assets/BenchMarkingFail.svg'
import PlayBench from '/src/assets/PlayBench.svg'
import NavbarLinks from '../Navbar/NavbarLinks';


const GestaoProdutos = () => {
  return (
    <div>
    <NavbarLinks/>
      <div className="main">
        <div className="header">
          <span>Gestão de Produtos</span>
        </div>
        <div className='conteudo'>
        <div className="gestaoProdutos">
        <Link to={"/CadastroProdutos"} className='link'>
        <button id='BtnInserirItens'>NOVO</button> 
        </Link>
        <table class="tabelaItens" id="tabelaItens">
            <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Estoque Atual</th>
                <th>Estoque Mínimo</th>
                <th></th>
            </tr>
            <tr>
        <td>001</td>
        <td>Produto A</td>
        <td>R$ 00.00</td>
        <td>200</td>
        <td>100</td>
        <td className='icones'>  
          <img src={PlayBench}/>
          <img src={enviarEmail}/>
          <img src={editar}/>
          <img src={deletar}/>
          </td>
    </tr>
    <tr>
        <td>002</td>
        <td>Produto B</td>
        <td>R$ 00.00</td>
        <td>200</td>
        <td>100</td>
        <td className='icones'>
          <img src={BenchMarking}/>
          <img src={emailNone}/>
          <img src={editar}/>
          <img src={deletar}/>
          </td>
    </tr>
    <tr>
        <td>003</td>
        <td>Produto C</td>
        <td>R$ 00.00</td>
        <td>200</td>
        <td>100</td>
        <td className='icones'>
        <img src={BenchMarkingFail}/>
          <img src={enviarEmail}/>
          <img src={editar}/>
          <img src={deletar}/>
          </td>
    </tr>
    <tr>
        <td>004</td>
        <td>Produto Teste</td>
        <td>R$ 00.00</td>
        <td>200</td>
        <td>100</td>
        <td className='icones'>
        <img src={BenchMarking}/>
          <img src={emailNone}/>
          <img src={editar}/>
          <img src={deletar}/>
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
