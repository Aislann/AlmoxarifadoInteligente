import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gestao.css';
import deletar from '/src/assets/deletar.svg';
import editar from '/src/assets/editar.svg';
import enviarEmail from '/src/assets/enviarEmail.svg';
import emailDesativado from '/src/assets/emailDesativado.svg';
import BenchMarking from '/src/assets/BenchMarking.svg';
import BenchMarkingFail from '/src/assets/BenchMarkingFail.svg';
import PlayBench from '/src/assets/PlayBench.svg';
import NavbarLinks from '../Navbar/NavbarLinks';
import axios from 'axios';
import Modal from 'react-modal';

const GestaoProdutos = () => {
  const [dadosDaApi, setDadosDaApi] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [produtoParaEditar, setProdutoParaEditar] = useState(null);

  useEffect(() => {
    fetch('https://localhost:7226/api/GestaoProdutos')
      .then(response => response.json())
      .then(data => setDadosDaApi(data))
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:7226/api/GestaoProdutos');
      setDadosDaApi(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  const handleDeletarProduto = async (idProduto, estadoProduto) => {
    try {
      if (estadoProduto !== 'executado') {
        await axios.delete(`https://localhost:7226/api/GestaoProdutos/${idProduto}`);
        const novosDados = dadosDaApi.filter(item => item.idProduto !== idProduto);
        setDadosDaApi(novosDados);
      } else {
        console.log('Não é possível excluir um produto em estado "executado".');
      }
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };
  

  const handleEditarProduto = async (idProduto) => {
    try {
      const response = await axios.get(`https://localhost:7226/api/GestaoProdutos/${idProduto}`);
      setProdutoParaEditar(response.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Erro ao obter informações do produto:', error);
    }
  };

  const handleEmail = async () => {
    try {
      setModalEmail(true);
    } catch (error) {
      console.error('Erro ao obter informações do produto:', error);
    }
  };

  const handlePlayBench = async (idProduto) => {
    try {
      const response = await axios.get(`https://localhost:7226/api/GestaoProdutos/${idProduto}`);
      const produto = response.data;
  
      produto.preco = 700;

      await axios.patch(`https://localhost:7226/api/GestaoProdutos/${idProduto}`, produto);
  
      console.log('Preço atualizado com sucesso.');
    } catch (error) {
      console.error('Erro ao executar PlayBench:', error);
    }
  };
  
  const handleSaveChanges = async () => {
    try {
      await axios.put(`https://localhost:7226/api/GestaoProdutos/${produtoParaEditar.idProduto}`, produtoParaEditar);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao salvar alterações:', error);
    }
  };

  const handleEnviarEmail = async (idProduto) => {
    try {
      await axios.get(`https://localhost:7226/api/GestaoProdutos/VerificarNovoProduto/${idProduto}`);
      console.log('Email enviado com sucesso.');
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }
  };

  const closeModal = () => {
    setProdutoParaEditar(null);
    setModalIsOpen(false);
  };
  const closeEmail = () => {
    setModalEmail(false);
  };

  useEffect(() => {
    fetch('https://localhost:7226/api/GestaoProdutos')
      .then(response => response.json())
      .then(data => setDadosDaApi(data))
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios.get('https://localhost:7226/api/Email')
      .then(response => {
        if (response.data.length > 0) {
          setEmail(response.data[0].emailUsuario);
        }
      })
      .catch(error => {
        console.error('Erro ao obter email:', error);
      });
  }, []);


  

  return (
    <div>
      <NavbarLinks />
      <div className="main">
        <div className="header">
          <span>Gestão de Produtos</span>
        </div>
        <div className="conteudo">
          <div className="gestaoProdutos">
            <Link to={"/CadastroProdutos"} className="link">
              <button id="BtnInserirItens">NOVO</button>
            </Link>
            <table className="tabelaItens" id="tabelaItens">
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
                    <td className="icones">
                    {item.estado === 'executado' ? (
                        <img src={BenchMarking} alt="BenchMarking" />
                      ) : (
                        <img src={PlayBench} alt="PlayBench" onClick={() => handlePlayBench(item.idProduto)} />
                      )}
                      {item.estado === 'executado' && (
                        <img src={enviarEmail} alt="Enviar Email" onClick={() => handleEmail()} />
                      )}
                      {item.estado !== 'executado' && (
                        <img src={emailDesativado} alt="Email Desativado" />
                      )}
                      <img src={editar} alt="Editar" onClick={() => handleEditarProduto(item.idProduto)} />
                      <img src={deletar} alt="Deletar" onClick={() => handleDeletarProduto(item.idProduto, item.estado)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal
              isOpen={modalIsOpen}
              contentLabel="Editar Produto"
              className="modal"
            >
              {produtoParaEditar && (
                <div>
                  <h2>Editar Produto</h2>
                  <p>Código do Produto: {produtoParaEditar.idProduto}</p>
                  <label>Descrição:</label>
                  <input
                    type="text"
                    id="descricao"
                    value={produtoParaEditar.descricao}
                    onChange={(e) => setProdutoParaEditar({ ...produtoParaEditar, descricao: e.target.value })}
                  />
                  <label>Estoque Atual:</label>
                  <input
                    type="text"
                    id="descricao"
                    value={produtoParaEditar.estoqueAtual}
                    onChange={(e) => setProdutoParaEditar({ ...produtoParaEditar, estoqueAtual: e.target.value })}
                  />
                  <label>Estoque Mínimo:</label>
                  <input
                    type="number"
                    id="descricao"
                    value={produtoParaEditar.estoqueMinimo}
                    onChange={(e) => setProdutoParaEditar({ ...produtoParaEditar, estoqueMinimo: e.target.value })}
                  />
                  <div>
                    <button className='salvar' onClick={handleSaveChanges}>Salvar Alterações</button>
                    <button className='fechar' onClick={closeModal}>Fechar</button>
                  </div>
                </div>
              )}
            </Modal>
            <Modal
              isOpen={modalEmail}
              contentLabel="Editar Produto"
              className="modal"
            >
                <div>
                  <h2>Email Cadastrado</h2>
                  <p>{email}</p>
                  <Link to={"/Configuracoes"} className='link'>
                  <span>Atualizar Informações</span>
                  </Link> 
                  <div>
                    <button className='salvar' onClick={() => handleEnviarEmail(item.idProduto)}>Enviar Email</button>
                    <button className='fechar' onClick={closeEmail}>Fechar</button>
                  </div>
                </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestaoProdutos;