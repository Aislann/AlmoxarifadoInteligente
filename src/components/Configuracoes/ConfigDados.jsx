import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import './ConfigDadosStyle.css';
import NavbarLinks from '../Navbar/NavbarLinks';

const ConfigDados = () => {
    const [whatsappVisivel, setWhatsappVisivel] = useState(true);
    const [email, setEmail] = useState('');
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get('https://localhost:8002/api/Email')
            .then(response => {
                if (response.data.length > 0) {
                    setEmail(response.data[0].emailUsuario);
                    setEditMode(true);
                }
            })
            .catch(error => {
                console.error('Erro ao obter email:', error);
            });
    }, []);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const adicionarEditarEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        if (editMode) {
            axios.patch(`https://localhost:8002/api/Email/1`, { idEmail: 1, emailUsuario: email })
                .then(() => {
                    alert("Email atualizado com sucesso!");
                })
                .catch(error => {
                    console.error('Erro ao atualizar email:', error);
                    alert("Ocorreu um erro ao atualizar o email. Tente novamente mais tarde.");
                });
        } else {
            axios.post('https://localhost:8002/api/Email', { emailUsuario: email })
                .then(() => {
                    alert("Email adicionado com sucesso!");
                })
                .catch(error => {
                    console.error('Erro ao adicionar email:', error);
                    alert("Ocorreu um erro ao adicionar o email. Tente novamente mais tarde.");
                });
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
                        {editMode ? (
                            <>
                                <input type="email" placeholder="Digite seu e-mail..." value={email} onChange={handleChangeEmail} />
                                <button className='add' onClick={adicionarEditarEmail}>Adicionar</button>
                            </>
                        ) : (
                            <>
                                <input type="email" placeholder="Digite seu e-mail..." value={email} onChange={handleChangeEmail} />
                                <button className='add' onClick={adicionarEditarEmail}>Adicionar</button>
                            </>
                        )}
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
