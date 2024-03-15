import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Gestao.css';
import NavbarLinks from '../Navbar/NavbarLinks';
import './CadastroProd.css';

const CadastroProdutos = () => {
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [estoqueAtual, setEstoqueAtual] = useState('');
  const [estoqueMinimo, setEstoqueMinimo] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleCadastrarProduto = async () => {
    try {
      const novoProduto = {
        idProduto: codigo,
        descricao: nome,
        estoqueAtual: estoqueAtual,
        estoqueMinimo: estoqueMinimo,
        estado: "play"
      };
      
      await axios.post('https://localhost:7226/api/GestaoProdutos', novoProduto);
      setCadastroSucesso(true); // Define o estado de sucesso como true após o cadastro

    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
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
            <label htmlFor="">Código do Produto: </label>
            <input type="number" className='addProduto' placeholder='Insira o código do produto...' onChange={(e) => setCodigo(e.target.value)} />

            <label htmlFor="">Nome do Produto: </label>
            <input type="text" className='addProduto' placeholder='Insira o nome do produto...' onChange={(e) => setNome(e.target.value)} />

            <label htmlFor="">Estoque Atual: </label>
            <input type="number" className='addProduto' placeholder='Insira a quantidade do estoque atual...' onChange={(e) => setEstoqueAtual(e.target.value)} />

            <label htmlFor="">Estoque Mínimo: </label>
            <input type="number" className='addProduto' placeholder='Insira a quantidade do estoque mínimo...' onChange={(e) => setEstoqueMinimo(e.target.value)} />

            <Link className='btn-cad' to={"/GestaoProdutos"} >
              <button className='btn-addProd' id='BtnInserirItens' onClick={handleCadastrarProduto}>Cadastrar</button>
            </Link>
          </div>
          {cadastroSucesso && (
            <div className="sucesso">
              <p>Produto cadastrado com sucesso!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CadastroProdutos;
