export function escondeElementosAposCarregar() {
    const tabelas = document.getElementsByTagName("table");

    Array.from(tabelas).forEach(tabela => {
        tabela.style.display = "none";
    });

    document.getElementById("div-botoes-crud").style.display = "none";
    document.getElementById("texto_identificacao").style.display = "none";
    escondeFormulariosETabelas()

}

export function escondeFormulariosETabelas() {
    document.getElementById("formulario_tipo_item").style.display = "none";
    document.getElementById("formulario_tipo_item_altera_deleta").style.display = "none";

    document.getElementById("formulario_item_colecionavel").style.display = "none";
    document.getElementById("formulario_itens_por_tipo").style.display = "none";
    document.getElementById("formulario_item_colecionavel_altera_deleta").style.display = "none";

    document.getElementById("tabela_itens").style.display = "none";
    document.getElementById("tabela_tipos").style.display = "none";
}


export function alteraTextoIdentificacao(texto) {
    const txtIdentificacao = document.getElementById("texto_identificacao");

    txtIdentificacao.style.display = "block";
    txtIdentificacao.innerText = texto;

}

export function alteraTextoBotoesCrud(textoCadastro, textoConsulta, textoAltera, textoDeleta, textoConsultaEspecifico) {
    document.getElementById("botao-cadastrar").innerText = textoCadastro;
    document.getElementById("botao-consultar").innerText = textoConsulta;
    document.getElementById("botao-alterar").innerText = textoAltera;
    document.getElementById("botao-deletar").innerText = textoDeleta;
    document.getElementById("botao-consultar-especifico").innerText = textoConsultaEspecifico;
}

export function renderizaTabelaItens(listaItens) {

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

export function renderizaTabelaTipos(listaTipos) {

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