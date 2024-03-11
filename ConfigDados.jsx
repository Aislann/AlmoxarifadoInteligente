import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ConfigDadosStyle.css';

const ConfigDados = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [emailVisivel, setEmailVisivel] = useState(true);
    const [whatsappVisivel, setWhatsappVisivel] = useState(true);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const TrocarParaInput = (tipo) => {
        if (tipo === 'email') {
            setEmailVisivel(false);
        } else if (tipo === 'whatsapp') {
            setWhatsappVisivel(false);
        }
    };

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
                        <Link to={"/Logs"}>
                            <span>BenchMarking Logs</span>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="main">
                <div className="header">
                    <span>Configurações</span>
                </div>
                <div className='conteudoConfig'>
                    <div className='campoEmail'>
                        {emailVisivel ? (
                            <button id='trocar' onClick={() => TrocarParaInput('email')}>Adicionar Email</button>
                        ) : (
                            <input type="email" placeholder="Digite seu e-mail..." />
                        )}

                        <button className='add' >Adicionar</button>

                    </div>
                    <div className='campoZap'>
                        {whatsappVisivel ? (
                            <button id='trocar' onClick={() => TrocarParaInput('whatsapp')}>Adicionar Whatsapp</button>
                        ) : (
                            <input type="tel" placeholder="Digite seu número..." />
                        )}

                        <button className='add' >Adicionar</button>
                    </div>
                    <Link to={"/"} className='link-sair'>
                        <span className='sair'>Sair</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ConfigDados;
