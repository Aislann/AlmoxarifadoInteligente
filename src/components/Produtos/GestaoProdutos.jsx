import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './main.css'
import Requisicao from "./src/components/Requisicao/Requisicao";

const GestaoProdutos = () => {
    const sections = [
        { name: 'Requisicao', component: <Requisicao /> },
        // { name: 'JANTAR', component: <Jantar /> },
        // { name: 'BEBIDAS', component: <Bebidas /> },
        // { name: 'SOBREMESAS', component: <Sobremesas /> },
      ];
    
      const [selectedSection, setSelectedSection] = useState(0);
    
      const handleSectionClick = (index) => {
        setSelectedSection(index === selectedSection ? null : index);
      };
    
      useEffect(() => {
        setSelectedSection(0);
      }, []);

  return (
    <div>
      <div className="main">
      <div className='sticky-header'>
        {sections.map((section, index) => (
          <h2
            key={index}
            className={selectedSection === index ? 'active' : ''} 
            onClick={() => handleSectionClick(index)}
          >
            {section.name}
          </h2>
        ))}
      </div>
        <div className="header">
          <span>Gestão de Produtos</span>
        </div>
        <div className='conteudo'>
        <Link to={"/Requisicao"}>
            Requisicao
        </Link>
        </div>
      </div>
    </div>
  );
};

export default GestaoProdutos;
