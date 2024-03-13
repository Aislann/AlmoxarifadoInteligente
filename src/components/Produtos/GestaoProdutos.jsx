import React, {useState, useEffect} from 'react';
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
import axios from 'axios';


const GestaoProdutos = () => {
    const [dadosDaApi, setDadosDaApi] = useState([]);

    useEffect(() => {
      fetch('https://localhost:7226/api/GestaoProdutos')
        .then(response => response.json())
        .then(data => setDadosDaApi(data))
        .catch(error => console.error('Erro ao buscar dados da API:', error));
    }, []);

    const handleDeletarProduto = async (idProduto) => {
        try {
          await axios.delete(`https://localhost:7226/api/GestaoProdutos/${idProduto}`);
          const novosDados = dadosDaApi.filter(item => item.idProduto !== idProduto);
          setDadosDaApi(novosDados);
        } catch (error) {
          console.error('Erro ao deletar produto:', error);
        }
      };

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
        <thead>
        <tr>
          <th>Código</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Estoque Atual</th>
          <th>Estoque Mínimo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dadosDaApi.map(item => (
          <tr key={item.idProduto}>
            <td>{item.idProduto}</td>
            <td>{item.descricao}</td>
            <td>R$ {item.preco || '00.00'}</td>
            <td>{item.estoqueAtual}</td>
            <td>{item.estoqueMinimo}</td>
            <td className='icones'>  
              <img src={PlayBench} alt="PlayBench"/>
              <img src={enviarEmail} alt="Enviar Email"/>
              <img src={editar} alt="Editar"/>
              <img src={deletar} alt="Deletar" onClick={() => handleDeletarProduto(item.idProduto)}/>
            </td>
          </tr>
        ))}
      </tbody>

          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestaoProdutos;