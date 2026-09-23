// Constantes
const tipo = "tipo";
const item = "item";

// Variaveis de controle
let flagFormulario = "";
let flagTabela = "";

// imports
import {apiConsultarItens, apiConsultarTipos} from './api.js'

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
    document.getElementById("formulario_tipo_itens_por_tipo").style.display = "none";
    document.getElementById("tabela_itens").style.display = "none";
    document.getElementById("tabela_tipos").style.display = "none";
}

function alteraTextoIdentificacao(texto){
    const txtIdentificacao = document.getElementById("texto_identificacao");
    
    txtIdentificacao.style.display = "block";
    txtIdentificacao.innerText = texto;

}

function apresentarElementosCrudTipo(){
    flagFormulario = tipo 
    flagTabela = tipo;

    alteraTextoIdentificacao("Tipos de itens")

    escondeFormulariosETabelas();

    document.getElementById("div-botoes-crud").style.display = "inline";
    document.getElementById("botao-consultar-especifico").style.display = "none";
    alteraTextoBotoesCrud("Cadastrar tipo","Consultar tipos","Alterar tipo","Deletar tipo", "Consultar tipo específico")
}

function apresentarElementosCrudItem(){
    flagFormulario = item;
    flagTabela = item;

    alteraTextoIdentificacao("Itens colecionáveis")

    escondeFormulariosETabelas();

    document.getElementById("div-botoes-crud").style.display = "inline";
    document.getElementById("botao-consultar-especifico").style.display = "inline";  
    alteraTextoBotoesCrud("Cadastrar item","Consultar itens","Alterar item","Deletar item", "Consultar item por tipo")
}

function alteraTextoBotoesCrud(textoCadastro, textoConsulta, textoAltera, textoDeleta, textoConsultaEspecifico) {
    document.getElementById("botao-cadastrar").innerText = textoCadastro;
    document.getElementById("botao-consultar").innerText = textoConsulta;
    document.getElementById("botao-alterar").innerText = textoAltera;
    document.getElementById("botao-deletar").innerText = textoDeleta;
    document.getElementById("botao-consultar-especifico").innerText = textoConsultaEspecifico;
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

async function apresentaTabela(texto){
    escondeFormulariosETabelas();

    if (flagTabela === tipo) {
       document.getElementById("tabela_tipos").style.display = "block";
       alteraTextoIdentificacao(`Tipos de itens - ${texto}`);

       const lista = await apiConsultarTipos();
       renderizaTabelaTipos(lista); 
    }

    if (flagTabela === item) {
        document.getElementById("tabela_itens").style.display = "block";
        alteraTextoIdentificacao(`Itens colecionáveis - ${texto}`);

        const lista = await apiConsultarItens();
        renderizaTabelaItens(lista); 
    }
}

function renderizaTabelaItens(listaItens){

    const tbody = document.getElementById("tbody_tabela_itens");
    
    // 1. Limpa o conteúdo anterior da tabela
    tbody.innerHTML = "";

    // 2. Trata caso a lista venha vazia
    if (!listaItens || listaItens.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4">Nenhum registro encontrado.</td></tr>`;
        return;
    }

    // 3. Percorre a lista e cria uma linha (tr) para cada item
    listaItens.forEach(item => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.id_item}</td>
            <td>${item.nome_item}</td>
            <td>${item.tipo}</td>
            <td>${item.valor_item}</td>
        `;
        //    <td>
        //        <button onclick="editarTipo(${tipo.id})">Editar</button>
        //        <button onclick="deletarTipo(${tipo.id})">Excluir</button>
        //    </td> 

        // Insere a linha montada dentro do tbody
        tbody.appendChild(tr);
    });

}

function renderizaTabelaTipos(listaTipos){

    const tbody = document.getElementById("tbody_tabela_tipos");
    
    // 1. Limpa o conteúdo anterior da tabela
    tbody.innerHTML = "";

    // 2. Trata caso a lista venha vazia
    if (!listaTipos || listaTipos.length === 0) {
        tbody.innerHTML = `<tr><td colspan="2">Nenhum registro encontrado.</td></tr>`;
        return;
    }

    // 3. Percorre a lista e cria uma linha (tr) para cada item
    listaTipos.forEach(tipo => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${tipo.id_tipo}</td>
            <td>${tipo.tipo_item}</td>
        `;
        //    <td>
        //        <button onclick="editarTipo(${tipo.id})">Editar</button>
        //        <button onclick="deletarTipo(${tipo.id})">Excluir</button>
        //    </td> 

        // Insere a linha montada dentro do tbody
        tbody.appendChild(tr);
    });
    
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

    const botaoConsultarEspecifico = document.getElementById("botao-consultar-especifico");
        botaoConsultarEspecifico.addEventListener("click", () => {
        alteraTextoIdentificacao("Itens colecionáveis - Consultar item por tipo")
        escondeFormulariosETabelas();
        document.getElementById("formulario_tipo_itens_por_tipo").style.display = "inline";
    }); 

});

