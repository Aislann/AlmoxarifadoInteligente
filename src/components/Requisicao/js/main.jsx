export function AdicionarCorAoFocarInput() {
    const listInput = document.querySelectorAll("input");

    listInput.forEach(function (campo) {
      campo.addEventListener('focus', function () {
        campo.style.outlineColor = "#90ee90";
      });

      campo.addEventListener('blur', function () {
        campo.style.outlineColor = "white";
      });
    });
}

export function CarregarCategorias({ categorias }) {
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectCategoria.add(optFirst);

    categorias.forEach(function (categoria) {
      var opt = document.createElement('option');
      opt.value = categoria.idCategoria;
      opt.text = categoria.Descrição;

      selectCategoria.add(opt);
    });
}

export function CarregarMotivos({ motivos }) {
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectMotivo.add(optFirst);

    const valorCategoria = document.getElementById('categoriaMotivo').value;
    console.log("Categoria selecionada: " + valorCategoria);
    const motivosFiltrados = motivos.filter((m) => m.idCategoria === valorCategoria);

    motivosFiltrados.forEach(function (motivo) {
      var opt = document.createElement('option');
      opt.value = motivo.idMotivo;
      opt.text = motivo.Descrição;
      selectMotivo.add(opt);
    });

}

export function adcionarRegraCamposSomenteNumeros(){
    const elementosAceitaSoNumeros = document.querySelectorAll('[data-only-number="true"]')
    elementosAceitaSoNumeros.forEach(function(campo){
        campo.addEventListener('keypress',function(e){
            if (e.keyCode<48 || e.keyCode>59){
                e.preventDefault();
            }
        })
    })
} 

// export function verificarEstoque() {
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