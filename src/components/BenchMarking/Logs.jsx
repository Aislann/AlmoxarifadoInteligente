import React, { useState, useEffect } from 'react';
import NavbarLinks from '../Navbar/NavbarLinks';
import './LogStyle.css'

const Logs = () => {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7226/api/Logrobo');
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []); // Executa uma vez no carregamento do componente


  const [search, SetSearch] = useState ('');


  return (
    <div>
      <NavbarLinks/>
      <div className="main">
        <div className="header">
          <span>BenchMarking Logs</span>
        </div>
        <div className='conteudoLogs'>
          <input 
          type="text" 
          className='searchLog' 
          placeholder='Pesquisar Log...' 
          onChange={e => SetSearch(e.target.value)}
          value={search}
          />  
          <table className="tabelaLogs" id="tabelaItens">
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
              {
                search.length > 0
                ? logs.filter((log) => log.informacaoLog.toLowerCase().includes(search.toLowerCase())).map((log) => (
                    <tr key={log.iDlOg}>
                      <td>{log.codigoRobo}</td>
                      <td>{log.usuarioRobo}</td>
                      <td>{log.dateLog}</td>
                      <td>{log.etapa}</td>
                      <td>{log.informacaoLog}</td>
                      <td>{log.idProdutoAPI}</td>
                    </tr>
                  ))
                : logs.map((log) => (
                    <tr key={log.iDlOg}>
                      <td>{log.codigoRobo}</td>
                      <td>{log.usuarioRobo}</td>
                      <td>{log.dateLog}</td>
                      <td>{log.etapa}</td>
                      <td>{log.informacaoLog}</td>
                      <td>{log.idProdutoAPI}</td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logs;
