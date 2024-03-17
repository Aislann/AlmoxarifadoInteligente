import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import hamburgerMenu from '/src/assets/hamburgerMenu.svg';

const NavbarLinks = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className='selection'>
      <nav className={`navbar ${menuAberto ? 'menu-aberto' : ''}`}>
        <div className='links'>
          <Link to={"/GestaoProdutos"} className='link'>
            <span>Produtos</span>
          </Link>
          <a href="https://aislann.github.io/FrontRepositorio/" className='link'>
            <span>Requisição</span>
          </a>
          <Link to={"/Logs"} className='link'>
            <span>BenchMarking Logs</span>
          </Link>
          <Link to={"/Configuracoes"} className='link'>
            <span>Configurações</span>
          </Link>
        </div>
        <img src={hamburgerMenu} alt="Menu Hamburguer" className='menu-hamburguer' onClick={toggleMenu} />
      </nav>
    </div>
  );
};

export default NavbarLinks;
