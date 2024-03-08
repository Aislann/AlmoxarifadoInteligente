import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./src/Login";
import Requisicao from "./src/components/Requisicao/Requisicao";
import GestaoProdutos from "./src/components/Produtos/GestaoProdutos";

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' Component={Login} />
                <Route exect path = '/Requisicao' Component={Requisicao}/>
                <Route exect path = '/GestaoProdutos' Component={GestaoProdutos}/>
            </Routes>
        </BrowserRouter>
    )
}