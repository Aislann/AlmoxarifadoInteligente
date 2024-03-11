import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavbarLinks = () => {
    const [menuAberto, setMenuAberto] = useState(false);
  
    const toggleMenu = () => {
      setMenuAberto(!menuAberto);
    };

  return (
    <div>
    <div className='selection'>
      <nav className={`navbar ${menuAberto ? 'menu-aberto' : ''}`}>
        <div className='links'>
          <Link to={"/GestaoProdutos"} className='link'>
            <span>Produtos</span>
          </Link>
          <Link to={"/Requisicao"} className='link'>
            <span>Requisição</span>
          </Link>
          <Link to={"/Logs"} className='link'>
            <span>BenchMarking Logs</span>
          </Link>
          <Link to={"/Configuracoes"} className='link'>
            <span>Configurações</span>
          </Link>          
        </div>
      </nav>
      </div>
    </div>
  );
};

export default NavbarLinks;
