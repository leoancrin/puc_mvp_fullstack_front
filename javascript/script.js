// Constantes
const tipo = "tipo";
const item = "item";

// Variaveis de controle
let flagFormulario = "";
let flagTabela = "";

function escondeElementosAposCarregar(){
    const tabelas = document.getElementsByTagName("table")

    Array.from(tabelas).forEach(tabela => {
        tabela.style.display = "none"; 
    });

    document.getElementById("div-botoes-crud").style.display = "none";
    document.getElementById("texto_identificacao").style.display = "none";
    escondeFormulariosETabelas()
     
}

function escondeFormulariosETabelas() {
    document.getElementById("formulario_tipo_item").style.display = "none";
    document.getElementById("formulario_item_colecionavel").style.display = "none";
    document.getElementById("tabela_itens").style.display = "none";
    document.getElementById("tabela_tipos").style.display = "none";
}

function alteraTextoIdentificacao(texto){
    txtIdentificacao = document.getElementById("texto_identificacao");
    
    txtIdentificacao.style.display = "block";
    txtIdentificacao.innerText = texto;

}

function apresentarElementosCrudTipo(){
    flagFormulario = tipo 
    flagTabela = tipo;

    alteraTextoIdentificacao("Tipos de itens")

    escondeFormulariosETabelas();

    document.getElementById("div-botoes-crud").style.display = "inline";
    alteraTextoBotoesCrud("Cadastrar tipo","Consultar tipos","Alterar tipo","Deletar tipo")
}

function apresentarElementosCrudItem(){
    flagFormulario = item;
    flagTabela = item;

    alteraTextoIdentificacao("Itens colecionáveis")

    escondeFormulariosETabelas();

    document.getElementById("div-botoes-crud").style.display = "inline";
    alteraTextoBotoesCrud("Cadastrar item","Consultar itens","Alterar item","Deletar item")
}

function alteraTextoBotoesCrud(textoCadastro, textoConsulta, textoAltera, textoDeleta) {
    document.getElementById("botao-cadastrar").innerText = textoCadastro;
    document.getElementById("botao-consultar").innerText = textoConsulta;
    document.getElementById("botao-alterar").innerText = textoAltera;
    document.getElementById("botao-deletar").innerText = textoDeleta;
}

function escolheOpcaoPorTipoDeBotaoInicial(){
    const botaoTipoItem = document.getElementById("botao-tipos-itens");
    const botaoItensColecionaveis = document.getElementById("botao-itens-colecionaveis");

    if (botaoTipoItem) botaoTipoItem.addEventListener("click", apresentarElementosCrudTipo);
    if (botaoItensColecionaveis) botaoItensColecionaveis.addEventListener("click", apresentarElementosCrudItem);
}

function apresentaFormulario(texto){
    escondeFormulariosETabelas();

    if (flagFormulario === tipo) {
       document.getElementById("formulario_tipo_item").style.display = "inline";
       alteraTextoIdentificacao(`Tipos de itens - ${texto}`)
    }

    if (flagFormulario === item) {
        document.getElementById("formulario_item_colecionavel").style.display = "block";
        alteraTextoIdentificacao(`Itens colecionáveis - ${texto}`)
    }
}

function apresentaTabela(texto){
    escondeFormulariosETabelas();

    if (flagTabela === tipo) {
       document.getElementById("tabela_tipos").style.display = "block";
       alteraTextoIdentificacao(`Tipos de itens - ${texto}`) 
    }

    if (flagTabela === item) {
        document.getElementById("tabela_itens").style.display = "block";
        alteraTextoIdentificacao(`Itens colecionáveis - ${texto}`)
    }
}



// Roda os scripts na página
document.addEventListener("DOMContentLoaded", () => {
    escondeElementosAposCarregar();

    escolheOpcaoPorTipoDeBotaoInicial();

    const botaoCadastrar = document.getElementById("botao-cadastrar");
    botaoCadastrar.addEventListener("click", () => {apresentaFormulario("Cadastrar")});

    const botaoConsultar = document.getElementById("botao-consultar");
    botaoConsultar.addEventListener("click", () => {apresentaTabela("Consultar")});

    const botaoAlterar = document.getElementById("botao-alterar");
    botaoAlterar.addEventListener("click", () => {apresentaFormulario("Alterar")});

    const botaoDeletar = document.getElementById("botao-deletar");
    botaoDeletar.addEventListener("click", () => {apresentaFormulario("Deletar")});

});

