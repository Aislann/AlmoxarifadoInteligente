function adicionarCorAoFocarInput() {
    const listinput = document.querySelectorAll("input");

    listinput.forEach(function(campo){
        campo.addEventListener('focus',function(){
        campo.style.outlineColor ="#90ee90";

        })

        campo.addEventListener('blur',function(){
            campo.style.outlineColor = "white";
    
        })
        
    });


}
// function carregarCategorias(){
//     const selectCategoria = document.getElementById('categoriaMotivo');
//     selectCategoria.innerHTML="";

//     const optFirst = document.createElement('option');
//     optFirst.value = -1;
//     optFirst.text = "";
//     selectCategoria.add(optFirst);

//     categorias.forEach(function(categoria){
//         var opt = document.createElement('option');
//         opt.value=categoria.idCategoria;
//         opt.text=categoria.Descrição;

//         selectCategoria.add(opt);

//     }) 
// }

// function carregarMotivos(){
//     const selectMotivo = document.getElementById('Motivo');
//     selectMotivo.innerHTML="";

//     const optFirst = document.createElement('option');
//     optFirst.value = -1;
//     optFirst.text = "";
//     selectMotivo.add(optFirst);

//     const valorCategoria = document.getElementById('categoriaMotivo').value;
//     console.log("Categoria selecionada: "+ valorCategoria)
//     const motivosFiltrados = motivos.filter((m)=> m.idCategoria==valorCategoria)

//     motivosFiltrados.forEach(function(motivo){
//         var opt = document.createElement('option');
//         opt.value=motivo.idMotivo;
//         opt.text=motivo.Descrição;
//         selectMotivo.add(opt);

//     }) 
// }

// document.getElementById('categoriaMotivo').addEventListener('change',function(){
//     carregarMotivos();
// });



// document.getElementById('CodigoProduto').addEventListener("keyup",function(){
//     const codigoPesquisado = document.getElementById('CodigoProduto').value;
//     let produtosFiltrados = produtos.filter((p)=> p.idProduto==codigoPesquisado);

//     if(produtosFiltrados.length > 0){
//         document.getElementById('DescricaoProduto').value=produtosFiltrados[0].Descricao;
//     } else{
//         document.getElementById('DescricaoProduto').value="";
//     }
//     if(produtosFiltrados.length > 0){
//         document.getElementById('Estoque').value=produtosFiltrados[0].Estoque;
//     } else{
//         document.getElementById('Estoque').value="";
//     }


// });




document.getElementById('btn-gravar').addEventListener('click',function(){
    const elementosObrigatorios = document.querySelectorAll('[data-obrigatorio="true"]');
    
    let validadoCamposPreenhcidos=true;

    setTimeout(function(){        
        if(validadoCamposPreenhcidos){
            document.getElementById('modalSucesso').style.display='block';
        }
    },1000);

    elementosObrigatorios.forEach(function(item){
    
        if (item.value=="" || item.value==-1){
            item.style.backgroundColor='red';
            validadoCamposPreenhcidos=false;
        } 
    })

    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;
    if (chkUrgenteValue==false && chkMedioValue==false && chkBaixoValue==false){
        const divPrioridade = document.getElementById("radioPrioridade");
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');        
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
        validadoCamposPreenhcidos=false;
    }   
});

function eventoClickPrioridadeHabilitarCor(){
    const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');    
    console.log(checkboxesPrioridade);
    checkboxesPrioridade.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {    
            const divPrioridade = document.getElementById("radioPrioridade");
            divPrioridade.classList.add('radioPrioridade');
            divPrioridade.classList.remove('radioPrioridadeDesabilitado');        
            document.getElementById('urgente').classList.add('chkPrioridade');
            document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('medio').classList.add('chkPrioridade');
            document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('baixo').classList.add('chkPrioridade');
            document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
        });
    });
}


function adcionarRegraCamposSomenteNumeros(){
    const elementosAceitaSoNumeros = document.querySelectorAll('[data-only-number="true"]')
    elementosAceitaSoNumeros.forEach(function(campo){
        campo.addEventListener('keypress',function(e){
            if (e.keyCode<48 || e.keyCode>59){
                e.preventDefault();
            }
        })
    })
} // adcionar numero

adicionarCorAoFocarInput(); 
// carregarCategorias();
// carregarMotivos();
adcionarRegraCamposSomenteNumeros();
criarBtnRemover()

document.addEventListener('DOMContentLoaded', function() {
    const totalRequisicao = document.getElementById('total');
    totalRequisicao.value = 0;
});

document.getElementById('BtnInserirItens').addEventListener('click',function(){
    const tabelaItens = document.getElementById("tabelaItens")

    const campoProduto = document.getElementById('CodigoProduto')
    const campoDescricaoProduto = document.getElementById('DescricaoProduto')
    const campoQuantidade = document.getElementById('QuantidadeEstoque')
    const totalRequisicao = document.getElementById('total')

    const linha = document.createElement('tr')

    const tdCodigo = document.createElement('td')
    const tdDrescricao= document.createElement('td')
    const tdQuantidade = document.createElement('td')
    const tdUnd = document.createElement('td')
    const tdPreco = document.createElement('td')
    const tdTotalLinha = document.createElement('td')
    const tdBtnRemover = document.createElement('td')


    const produtoPesquisado = produtos.filter((p)=> p.idProduto==campoProduto.value)
    console.log(produtoPesquisado)

    tdCodigo.innerHTML =  campoProduto.value
    tdDrescricao.innerHTML =  campoDescricaoProduto.value
    tdQuantidade.innerHTML =  campoQuantidade.value
    tdUnd.innerHTML =  produtoPesquisado[0].Unidade
    tdPreco.innerHTML =  produtoPesquisado[0].Preco
    tdTotalLinha.innerHTML =  campoQuantidade.value*produtoPesquisado[0].Preco
    
    
    linha.appendChild(tdCodigo)
    linha.appendChild(tdDrescricao)
    linha.appendChild(tdQuantidade)
    linha.appendChild(tdUnd)
    linha.appendChild(tdPreco)
    linha.appendChild(tdTotalLinha)
    tabelaItens.appendChild(linha)

    totalRequisicao.value = parseFloat(totalRequisicao.value) + parseFloat(campoQuantidade.value*produtoPesquisado[0].Preco)

    tdBtnRemover.appendChild(criarBtnRemover(tabelaItens, linha))
    linha.appendChild(tdBtnRemover)
    tabelaItens.appendChild(linha)
})

function criarBtnRemover(tabela, objLinha, numeroLinha) {
    const btnRemoverItem = document.createElement('div');
    btnRemoverItem.className = "BtnRemover";
    btnRemoverItem.id = 'btnRemover' + numeroLinha;
    btnRemoverItem.innerHTML = '<span class="BtnRemover" id="btnRemover">Remover</span>';

    btnRemoverItem.addEventListener('click', function () {
        if (objLinha && tabela.contains(objLinha)) {
            tabela.removeChild(objLinha);
        
            var codigoProduto = parseInt(document.getElementById('CodigoProduto').value);
            var quantidade = parseInt(document.getElementById('QuantidadeEstoque').value);
            var produto = produtos.find(p => p.idProduto === codigoProduto);
        
            if (produto) {
                // Verifica se o produto existe antes de atualizar o estoque
                produto.Estoque += quantidade;
                document.getElementById('Estoque').value = produto.Estoque;
            }
        }
        

        const totalRequisicao = document.getElementById('total');
        const colunas = objLinha.getElementsByTagName('td');
        let valorLinha = colunas[5].innerText;

        totalRequisicao.value = parseFloat(totalRequisicao.value) - parseFloat(valorLinha);

        totalRequisicao.value = Math.max(0, parseFloat(totalRequisicao.value));
    });

    return btnRemoverItem;
}




// function verificarEstoque() {
//     const codigoProdutoInput = document.getElementById('CodigoProduto');
//     const codigoProduto = parseInt(codigoProdutoInput.value);

//     const produto = produtos.find(p => p.idProduto === codigoProduto);

//     if (produto) {
//         const nivelImg = document.getElementById('nivel');

//         const estoqueMinimo = produto.EstoqueMinimo;
//         const limiteSuperior = estoqueMinimo * 1.1;
//         const limiteInferior = estoqueMinimo * 0.9;

//         if (produto.Estoque > limiteSuperior) {
//             nivelImg.src = "assets/img/verde.svg";
//         } else if (produto.Estoque < limiteInferior) {
//             nivelImg.src = "assets/img/vermelho.svg"; 
//         } 
//         else {
//             nivelImg.src = "assets/img/amarelo.svg"; 
//         }
// }
// }


//Adcionar numero do pedido
var inpNumero = document.getElementById("inpNumero");

    inpNumero.addEventListener("input", function() {
        var numeroRequisicao = inpNumero.value;

        var spanItensRequisicao = document.getElementById("itensRequisicao").querySelector("span");

        spanItensRequisicao.textContent = "Itens da Requisição Nº " + numeroRequisicao;
    });

function habilitarMotivo() {
    var categoriaMotivoSelect = document.getElementById("categoriaMotivo");
    var motivoSelect = document.getElementById("Motivo");

    if (categoriaMotivoSelect.value !== "") {
        motivoSelect.removeAttribute("disabled");
        atualizarEstilo(motivoSelect, 'white');
    } else {
        motivoSelect.setAttribute("disabled", "disabled");
        atualizarEstilo(motivoSelect, '');
    }
}

function atualizarEstilo(elemento, backgroundColor) {
    elemento.style.backgroundColor = backgroundColor;
}

//Validar botão adcionar
function verificarEstoqueBotao() {
    var codigoProduto = parseInt(document.getElementById('CodigoProduto').value);
    var quantidade = parseInt(document.getElementById('QuantidadeEstoque').value);
    var btnAdicionar = document.getElementById('BtnInserirItens');
    

    if (codigoProduto && quantidade > 0) {
        var produto = produtos.find(p => p.idProduto === codigoProduto);
        var btnGravar = document.getElementById('btn-gravar');

        if (produto && quantidade <= produto.Estoque) {
            btnAdicionar.removeAttribute('disabled');
            btnGravar.removeAttribute('disabled');
        } else {
            alert('Produto não encontrado ou a quantidade inserida é maior do que a quantidade existente em estoque!\nPor favor, insira outro valor.');
            btnAdicionar.setAttribute('disabled', 'disabled');
            btnGravar.setAttribute('disabled', 'disabled');
        }
    } else {
        btnAdicionar.setAttribute('disabled', 'disabled');
    }
}

function atualizarEstoque() {
    var codigoProduto = parseInt(document.getElementById('CodigoProduto').value);
    var quantidade = parseInt(document.getElementById('QuantidadeEstoque').value);
    var produto = produtos.find(p => p.idProduto === codigoProduto);
    var btnAdicionar = document.getElementById('BtnInserirItens');

    if (produto && quantidade <= produto.Estoque) {
        produto.Estoque -= quantidade;
        document.getElementById('Estoque').value = produto.Estoque;
        var estoque = parseInt(document.getElementById('Estoque').value);

    if (estoque < 1){
        btnAdicionar.setAttribute('disabled', 'disabled');
    }
    }
}


function gravar() {
    alert("Informações gravadas!");
}

document.getElementById('CodigoProduto').addEventListener('input', function() {
    document.getElementById('QuantidadeEstoque').value = 0;
  });