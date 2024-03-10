import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./src/Login";
import Requisicao from "./src/components/Requisicao/Requisicao";
import GestaoProdutos from "./src/components/Produtos/GestaoProdutos";
import Logs from "./src/components/BenchMarking/Logs";
import ConfigDados from "./src/components/Configuracoes/ConfigDados";
import CadastroProdutos from "./src/components/Produtos/CadastroProduto";

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' Component={Login} />
                <Route exect path = '/Requisicao' Component={Requisicao}/>
                <Route exect path = '/GestaoProdutos' Component={GestaoProdutos}/>
                <Route exect path = '/Logs' Component={Logs}/>
                <Route exect path = '/Configuracoes' Component={ConfigDados}/>
                <Route exect path = '/CadastroProdutos' Component={CadastroProdutos}/>
            </Routes>
        </BrowserRouter>
    )
}