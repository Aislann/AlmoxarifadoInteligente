import React, { useState, useEffect } from 'react';
import NavbarLinks from '../Navbar/NavbarLinks';
import './LogStyle.css'

const Logs = () => {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:8002/api/Logrobo');
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <NavbarLinks/>
      <div className="main">
        <div className="header">
          <span>BenchMarking Logs</span>
        </div>
        <div className='conteudoLogs'>
          <table class="tabelaLogs" id="tabelaItens">
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
                  <td>{log.idProdutoAPI}</td>
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
