import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ConfigDadosStyle.css';
import NavbarLinks from '../Navbar/NavbarLinks';

const ConfigDados = () => {
    const [emailVisivel, setEmailVisivel] = useState(true);
    const [whatsappVisivel, setWhatsappVisivel] = useState(true);

    const TrocarParaInput = (tipo) => {
        if (tipo === 'email') {
            setEmailVisivel(false);
        } else if (tipo === 'whatsapp') {
            setWhatsappVisivel(false);
        }
    };

    return (
        <div>
            <NavbarLinks/>
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
