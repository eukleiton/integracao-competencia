// Essa função é chamada quando o usuário clica no botão de buscar CEP
function clicarBotao() {
    // Essa linha busca pelo elemento HTML com o ID "cep" e pega o valor dele
    let cep = document.getElementById("cep").value 
    // Essa linha chama a função buscarDados, passando o valor do CEP como argumento
    buscarDados(cep)
}

// Essa função é assíncrona, ou seja, ela espera que uma operação seja concluída antes de continuar
async function buscarDados(cep) {
    console.log(cep)
    // Essa linha faz uma requisição para a API do viacep, usando o valor do CEP na URL
    // Ela usa o método fetch, que retorna uma promessa, que é resolvida com o método then
    // O método then recebe uma função que converte a resposta da API em um objeto JSON
    // A palavra-chave await faz com que a função espere até que a promessa seja resolvida
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    // Essa linha chama a função dadosTela, passando o objeto JSON como argumento
    dadosTela(dados) 
}

// Essa função recebe um objeto JSON com os dados do CEP e preenche o formulário com eles
function dadosTela(dados) {
    // Essas linhas buscam pelos elementos HTML com os IDs "logradouro", "bairro", "cidade" e "estado"
    // E atribuem os valores dos campos correspondentes do objeto JSON a eles
    document.getElementById("logradouro").value = dados.logradouro 
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("estado").value = dados.uf
}

// Essa função é chamada quando o usuário clica no botão de apagar CEP
function clicarBotaoApagar() {
    // Essas linhas buscam pelos elementos HTML com os IDs "logradouro", "bairro", "cidade", "estado" e "cep"
    // E atribuem o valor null a eles, ou seja, limpam os campos do formulário
    document.getElementById("logradouro").value = null 
    document.getElementById("bairro").value = null
    document.getElementById("cidade").value = null
    document.getElementById("estado").value = null
    document.getElementById("cep").value = null
}

// Essa linha adiciona um evento de tecla pressionada ao documento
document.addEventListener("keypress", function(e) {
    // Essa linha verifica se a tecla pressionada foi a tecla Enter
    if(e.key === 'Enter') {
        // Essa linha seleciona o elemento HTML com a classe "btn"
        const btn = document.querySelector(".btn");
        // Essa linha simula um clique no botão
        btn.click();
    
    }
});