import React, { useState, useEffect } from 'react';
import NavbarLinks from '../Navbar/NavbarLinks';
import './LogStyle.css';

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

  const [search, setSearch] = useState('');

  return (
    <div>
      <NavbarLinks />
      <div className="main">
        <div className="header">
          <span>BenchMarking Logs</span>
        </div>
        <div className='conteudoLogs'>
          <input
            type="text"
            className='searchLog'
            placeholder='Pesquisar por Log...'
            onChange={e => setSearch(e.target.value)}
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
  logs
    .filter(log => {
      const logValues = Object.values(log);
      
      return logValues.some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(search.toLowerCase());
        } else if (typeof value === 'number') {
          return value.toString().toLowerCase().includes(search.toLowerCase());
        } else {
          return false;
        }
      });
    })
    .map(log => (
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
