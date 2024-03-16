import React, { useState, useEffect } from 'react';
import './css/Requisicao.css'; 
import './css/InputRequisicao.css'; 
import './css/Responsividade.css'; 
import NavbarLinks from '../Navbar/NavbarLinks';
import Add from '/public/img/add.svg'
import Branco from '/public/img/branco.svg'


const Requisicao = () => {
  const [numeroRequisicao, setNumeroRequisicao] = useState('');
  const [idDepartamento, setIdDepartamento] = useState('');

  useEffect(() => {
  }, []);

  const habilitarMotivo = () => {
  };

  const verificarEstoque = () => {
  };

  const verificarEstoqueBotao = () => {
  };

  const atualizarEstoque = () => {
  };

  const gravar = () => {
  };

  return (
    <div>
      <NavbarLinks/>
      <div className="main">
        <div className="header">
          <span> Novo Pedido de Requisição de Saída</span>
        </div>
        <div className="conteudo">
          <div className="titulo">
            <span>Dados Principais | Requisição Nº </span>
            <input
              type="number"
              id="inpNumero"
              data-obrigatorio="true"
              value={numeroRequisicao}
              onChange={(e) => setNumeroRequisicao(e.target.value)}
            />
          </div>
          <div className="dadosPrincipais">
            <div className="camposPrincipais">
              <div className="camposPrincipaisLinha1 linhasCampos">
                <div className="grupo1 grupoInput">
                  <span>ID.</span>
                  <input
                    id="idDepartamento"
                    data-obrigatorio="true"
                    data-only-number="true"
                    min="0"
                  />
                </div>
                <div className="grupo2 grupoInput">
                  <span>Departamento</span>
                  <input
                    type="text"
                    disabled
                    id="departamento"
                    data-obrigatorio="true"
                  />
                </div>
                <div className="grupo3 grupoInput">
                  <span>Data</span>
                  <input
                    type="date"
                    id="dataRequisicao"
                    data-obrigatorio="true"
                  />
                </div>
              </div>
              <div className="camposPrincipaisLinha2 linhasCampos">
                <div className="grupo4 grupoInput">
                  <span>ID Func.</span>
                  <input
                    id="idFuncionario"
                    data-obrigatorio="true"
                    data-only-number="true"
                    min="0"
                  />
                </div>
                <div className="grupo5 grupoInput">
                  <span>Nome Funcionário</span>
                  <input
                    type="text"
                    disabled
                    id="NomeFuncionario"
                  />
                </div>
                <div className="grupo6 grupoInput">
                  <span>Cargo</span>
                  <input
                    type="text"
                    disabled
                    id="cargo"
                    data-obrigatorio="true"
                  />
                </div>
              </div>
              <div className="camposPrincipaisLinha3 linhasCampos">
                <div className="grupo7 grupoInput">
                  <span>Categoria Motivo</span>
                  <div className="grupoCategoria">
                    <select
                      id="categoriaMotivo"
                      onChange={habilitarMotivo}
                      data-obrigatorio="true"
                    ></select>
                    <img
                      className="btnAdd"
                      src={Add}
                      alt=""
                    />
                  </div>
                </div>
                <div className="grupo8 grupoInput">
                  <span>Motivo</span>
                  <div className="grupoMotivo">
                    <select
                      id="Motivo"
                      style={{ backgroundColor: '#e0e0e0' }}
                      disabled
                      data-obrigatorio="true"
                    ></select>
                    <img
                      className="btnAdd"
                      src={Add}
                      alt=""
                    />
                  </div>
                </div>
                <div className="grupo9 grupoInput">
                  <span>Nível de Prioridade</span>
                  <div className="radioPrioridade" id="radioPrioridade">
                    <div className="grupoPrioridade">
                      <input
                        className="chkPrioridade"
                        type="radio"
                        name="prioridade"
                        id="urgente"
                        data-obrigatorio="true"
                      />
                      <span>Urgente</span>
                    </div>
                    <div className="grupoPrioridade">
                      <input
                        className="chkPrioridade"
                        type="radio"
                        name="prioridade"
                        id="medio"
                        data-obrigatorio="true"
                      />
                      <span>Médio</span>
                    </div>
                    <div className="grupoPrioridade">
                      <input
                        className="chkPrioridade"
                        type="radio"
                        name="prioridade"
                        id="baixo"
                        data-obrigatorio="true"
                      />
                      <span>Baixo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="itensRequisicao">
            <div className="titulo" id="itensRequisicao">
              <span>Itens da Requisição Nº </span>
            </div>
            <div className="camposItens">
              <div className="linhaAdicionarItens">
                <div className="grupoProduto">
                  <span>Cod. Produto</span>
                  <input
                    type="text"
                    id="CodigoProduto"
                    data-only-number="true"
                    onChange={verificarEstoque}
                  />
                </div>
                <div className="grupoProdutoDescricao">
                  <span>Descrição</span>
                  <input
                    type="text"
                    disabled
                    id="DescricaoProduto"
                  />
                </div>
                <div className="grupoEstoque">
                  <span>Estoque</span>
                  <input
                    type="text"
                    disabled
                    id="Estoque"
                    data-only-number="true"
                  />
                </div>
                <div className="grupoQuantidade">
                  <span>Quantidade</span>
                  <input
                    type="number"
                    id="QuantidadeEstoque"
                    data-only-number="true"
                    min="0"
                    onChange={verificarEstoqueBotao}
                  />
                </div>
                <div className="grupoStatusEstoque" id="EstoqueMinimo">
                  <div>
                    <img src="assets/img/branco.svg" alt="" id="nivel" />
                    <div className="legenda">
                      <p>
                        <img
                          src="assets/img/verde.svg"
                          alt="Imagem 1"
                        />
                        Estoque acima de 10% do Estoque mínimo
                      </p>
                      <p>
                        <img
                          src="assets/img/amarelo.svg"
                          alt="Imagem 2"
                        />
                        Estoque abaixo de 10% do Estoque mínimo
                      </p>
                      <p>
                        <img
                          src="assets/img/vermelho.svg"
                          alt="Imagem 3"
                        />
                        Estoque abaixo do Estoque mínimo
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="BtnInserirItens"
                    id="BtnInserirItens"
                    disabled
                    onClick={atualizarEstoque}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
              <table className="tabelaItens" id="tabelaItens">
                <tr>
                  <th>Código</th>
                  <th>Produto</th>
                  <th>Qtd</th>
                  <th>Un.</th>
                  <th>Preço</th>
                  <th>Total</th>
                  <th>#</th>
                </tr>
              </table>
              <div className="grupoTotal">
                <span>Total</span>
                <input
                  type="number"
                  id="total"
                  disabled
                  data-obrigatorio="true"
                />
              </div >
              <div className="grupoBtnInserirItens">
                <button
                  className="BtnInserirItens"
                  id="btn-gravar"
                  disabled
                  onClick={gravar}
                >
                  Gravar
                </button>
                <button
                className="BtnInserirItens"
                id="btn-gravar">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisicao;
