// document.getElementById('idDepartamento').addEventListener('keyup',function(){
//     const idEscolhido = document.getElementById('idDepartamento').value

//     async function dadosDepartamento() {
//         try {
            
//             let resposta = await fetch(`https://localhost:7265/api/Departamentos/${idEscolhido}`);
            
//             if (!resposta.ok) {
//                 throw new Error(`Erro na requisição: ${resposta.status}`);
//             }
    
//             let dados = await resposta.json();
//             document.getElementById('departamento').value = dados.nomeDepartamento;
//         } catch (erro) {
//             console.error('Erro ao obter dados:', erro);
//         }
//     }
    
//     dadosDepartamento();
// });

// document.getElementById('idFuncionario').addEventListener('keyup',function(){
//     const idFunc = document.getElementById('idFuncionario').value

//     async function dadosFuncionario() {
//         try {
            
//             let resposta = await fetch(`https://localhost:7265/api/Funcionarios/${idFunc}`);
            
//             if (!resposta.ok) {
//                 throw new Error(`Erro na requisição: ${resposta.status}`);
//             }
//             let dados = await resposta.json();
//             document.getElementById('NomeFuncionario').value = dados.nomeFuncionario;
//             document.getElementById('cargo').value = dados.cargo;
//         } catch (erro) {
//             console.error('Erro ao obter dados:', erro);
//         }
//     }
    
//     dadosFuncionario();
// });

// document.getElementById('CodigoProduto').addEventListener('keyup',function(){
//     const idFunc = document.getElementById('CodigoProduto').value

//     async function dadosProduto() {
//         try {
            
//             let resposta = await fetch(`https://localhost:7265/api/Produtos/${idFunc}`);
            
//             if (!resposta.ok) {
//                 throw new Error(`Erro na requisição: ${resposta.status}`);
//             }
//             let dados = await resposta.json();
//             document.getElementById('DescricaoProduto').value = dados.nomeProduto;
//             document.getElementById('Estoque').value = dados.estoque;
//         } catch (erro) {
//             console.error('Erro ao obter dados:', erro);
//         }
//     }
    
//     dadosProduto();
// });








// function carregarCategorias() {
//     const selectCategoria = document.getElementById('categoriaMotivo');
//     selectCategoria.innerHTML = "";

//     const optFirst = document.createElement('option');
//     optFirst.value = -1;
//     optFirst.text = "";
//     selectCategoria.add(optFirst);

//     // Fazer a solicitação HTTP para a API
//     fetch('https://localhost:7159/api/Motivos')
//         .then(response => response.json())
//         .then(data => {
//             // Verificar se a resposta da API possui o formato esperado
//             if (Array.isArray(data) && data.length > 0) {
//                 data.forEach(function (motivo) {
//                     var opt = document.createElement('option');
//                     opt.value = motivo.categoriaMotivo; 
//                     opt.text = motivo.nomeMotivo;

//                     selectCategoria.add(opt);
//                 });
//             } else {
//                 console.error('Formato de resposta da API inválido');
//             }
//         })
//         .catch(error => console.error('Erro ao obter dados da API:', error));
// }

// carregarCategorias()

// function carregarMotivos(){
//     const selectMotivo = document.getElementById('Motivo');
//     selectMotivo.innerHTML="";

//     const optFirst = document.createElement('option');
//     optFirst.value = -1;
//     optFirst.text = "";
//     selectMotivo.add(optFirst);

//     const valorCategoria = document.getElementById('categoriaMotivo').value;
//     console.log("Categoria selecionada: "+ valorCategoria)
//     const motivosFiltrados = motivos.filter((m)=> m.categoriaMotivo==valorCategoria)

//     motivosFiltrados.forEach(function(motivo){
//         var opt = document.createElement('option');
//         opt.value=motivo.idMotivo;
//         opt.text=motivo.Descrição;
//         selectMotivo.add(opt);

//     }) 
// }

// carregarMotivos()

// document.getElementById('categoriaMotivo').addEventListener('change',function(){
//     carregarMotivos();
// });


