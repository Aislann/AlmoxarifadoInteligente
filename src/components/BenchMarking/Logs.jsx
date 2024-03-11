import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Logs = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [logs, setLogs] = useState([]);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7098/api/Logrobos');
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []); // Executa uma vez no carregamento do componente

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
          </div>
        </nav>
      </div>
      <div className="main">
        <div className="header">
          <span>BenchMarking Logs</span>
        </div>
        <div className='conteudo'>
          <table>
            <thead>
              <tr>
                <th>Código Robô</th>
                <th>Usuário Robô</th>
                <th>Data do Log</th>
                <th>Etapa</th>
                <th>Informação do Log</th>
                <th>ID do Produto API</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.iDlOg}>
                  <td>{log.codigoRobo}</td>
                  <td>{log.usuarioRobo}</td>
                  <td>{log.dateLog}</td>
                  <td>{log.etapa}</td>
                  <td>{log.informacaoLog}</td>
                  <td>{log.idProdutoApi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logs;
