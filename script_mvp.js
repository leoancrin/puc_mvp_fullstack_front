// Constantes
const tipo = "tipo";
const item = "item";
const deletar = "deletar";
const alterar = "alterar";

// Variaveis de controle
let flagFormulario = "";
let flagTabela = "";
let flagAcao = "";

function escondeElementosAposCarregar() {
    const tabelas = document.getElementsByTagName("table");

    Array.from(tabelas).forEach(tabela => {
        tabela.style.display = "none";
    });

    document.getElementById("div-botoes-crud").style.display = "none";
    document.getElementById("texto_identificacao").style.display = "none";
    escondeFormulariosETabelas()

}

function escondeFormulariosETabelas() {
    document.getElementById("formulario_tipo_item").style.display = "none";
    document.getElementById("formulario_tipo_item_altera_deleta").style.display = "none";

    document.getElementById("formulario_item_colecionavel").style.display = "none";
    document.getElementById("formulario_itens_por_tipo").style.display = "none";
    document.getElementById("formulario_item_colecionavel_altera_deleta").style.display = "none";

    document.getElementById("tabela_itens").style.display = "none";
    document.getElementById("tabela_tipos").style.display = "none";
}


function alteraTextoIdentificacao(texto) {
    const txtIdentificacao = document.getElementById("texto_identificacao");

    txtIdentificacao.style.display = "block";
    txtIdentificacao.innerText = texto;

}

function alteraTextoBotoesCrud(textoCadastro, textoConsulta, textoAltera, textoDeleta, textoConsultaEspecifico) {
    document.getElementById("botao-cadastrar").innerText = textoCadastro;
    document.getElementById("botao-consultar").innerText = textoConsulta;
    document.getElementById("botao-alterar").innerText = textoAltera;
    document.getElementById("botao-deletar").innerText = textoDeleta;
    document.getElementById("botao-consultar-especifico").innerText = textoConsultaEspecifico;
}

function renderizaTabelaItens(listaItens) {

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

function renderizaTabelaTipos(listaTipos) {

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


function apresentaOpcaoPorTipoDeBotaoInicial() {
    const botaoTipoItem = document.getElementById("botao-tipos-itens");
    const botaoItensColecionaveis = document.getElementById("botao-itens-colecionaveis");

    if (botaoTipoItem) botaoTipoItem.addEventListener("click", apresentarElementosCrudTipo);
    if (botaoItensColecionaveis) botaoItensColecionaveis.addEventListener("click", apresentarElementosCrudItem);
}


function apresentarElementosCrudTipo() {
    flagFormulario = tipo;
    flagTabela = tipo;

    alteraTextoIdentificacao("Tipos de itens");

    escondeFormulariosETabelas();

    document.getElementById("div-botoes-crud").style.display = "inline";
    document.getElementById("botao-consultar-especifico").style.display = "none";
    alteraTextoBotoesCrud("Cadastrar tipo", "Consultar tipos", "Alterar tipo", "Deletar tipo", "Consultar tipo específico")
}

function apresentarElementosCrudItem() {
    flagFormulario = item;
    flagTabela = item;

    alteraTextoIdentificacao("Itens colecionáveis");

    escondeFormulariosETabelas();

    document.getElementById("div-botoes-crud").style.display = "inline";
    document.getElementById("botao-consultar-especifico").style.display = "inline";
    alteraTextoBotoesCrud("Cadastrar item", "Consultar itens", "Alterar item", "Deletar item", "Consultar item por tipo")
}



function apresentaFormularioCadastro(texto) {
    escondeFormulariosETabelas();

    if (flagFormulario === tipo) {
        const formulario = document.getElementById("formulario_tipo_item");
        formulario.style.display = "inline";
        alteraTextoIdentificacao(`Tipos de itens - ${texto}`);
    }

    if (flagFormulario === item) {
        const formulario = document.getElementById("formulario_item_colecionavel");
        formulario.style.display = "block";
        alteraTextoIdentificacao(`Itens colecionáveis - ${texto}`);
    }
}

function apresentaFormularioAlteraDeleta(texto, acao) {
    escondeFormulariosETabelas();

    if (acao === deletar) {
        flagAcao = deletar
    }

    if (acao === alterar) {
        flagAcao = alterar
    }

    if (flagFormulario === tipo) {
        document.getElementById("formulario_tipo_item_altera_deleta").style.display = "inline";
        alteraTextoIdentificacao(`Tipos de itens - ${texto}`);
    }

    if (flagFormulario === item) {
        document.getElementById("formulario_item_colecionavel_altera_deleta").style.display = "block";
        alteraTextoIdentificacao(`Itens colecionáveis - ${texto}`);
    }
}

async function apresentaTabela(texto) {
    escondeFormulariosETabelas();

    if (flagTabela === tipo) {
        document.getElementById("tabela_tipos").style.display = "block";
        alteraTextoIdentificacao(`Tipos de itens - ${texto}`);

        try {
            const lista = await apiConsultarTipos();
            renderizaTabelaTipos(lista);

        } catch (erro) {
            alert(erro.message);
        }

    }

    if (flagTabela === item) {
        document.getElementById("tabela_itens").style.display = "block";
        alteraTextoIdentificacao(`Itens colecionáveis - ${texto}`);

        try {
            const lista = await apiConsultarItens();
            renderizaTabelaItens(lista);
        } catch (erro) {
            alert(erro.message);
        }
    }
}

function apresentaFormularioItemPorTipo(texto) {
    escondeFormulariosETabelas()

    if (flagFormulario === item) {
        flagTabela = item;
        document.getElementById("formulario_itens_por_tipo").style.display = "inline"
        alteraTextoIdentificacao(`Tipos de itens - ${texto}`);
    }
}

function apresentaFormularioParaCadaBotaoDeAcao() {

    const botaoCadastrar = document.getElementById("botao-cadastrar");
    botaoCadastrar.addEventListener("click", () => { apresentaFormularioCadastro("Cadastrar") });

    const botaoConsultar = document.getElementById("botao-consultar");
    botaoConsultar.addEventListener("click", () => { apresentaTabela("Consultar") });

    const botaoAlterar = document.getElementById("botao-alterar");
    botaoAlterar.addEventListener("click", () => { apresentaFormularioAlteraDeleta("Alterar", alterar) });

    const botaoDeletar = document.getElementById("botao-deletar");
    botaoDeletar.addEventListener("click", () => { apresentaFormularioAlteraDeleta("Deletar", deletar) });

    const botaoConsultarEspecifico = document.getElementById("botao-consultar-especifico");
    botaoConsultarEspecifico.addEventListener("click", () => { apresentaFormularioItemPorTipo("Consultar por tipo") });
}

function adicionaEventosParaOsFormularios() {
    const formTipoItem = document.getElementById("formulario_tipo_item");
    const formTipoItemAlteraDeleta = document.getElementById("formulario_tipo_item_altera_deleta");

    const formItemCol = document.getElementById("formulario_item_colecionavel");
    const formItemColPorTipo = document.getElementById("formulario_itens_por_tipo");
    const formItemColAlteraDeleta = document.getElementById("formulario_item_colecionavel_altera_deleta");

    if (formTipoItem) formTipoItem.addEventListener("submit", event => { submitFormCadastro(event) });
    if (formItemCol) formItemCol.addEventListener("submit", event => { submitFormCadastro(event) });

    if (formItemColPorTipo) formItemColPorTipo.addEventListener("submit", event => { submitFormItemPorTipo(event) });

    if (formTipoItemAlteraDeleta) formTipoItemAlteraDeleta.addEventListener("submit", event => { submitFormAlteraDeleta(event) });
    if (formItemColAlteraDeleta) formItemColAlteraDeleta.addEventListener("submit", event => { submitFormAlteraDeleta(event) });
}

async function submitFormCadastro(event) {
    event.preventDefault();
    const dados = Object.fromEntries(new FormData(event.target).entries());

    try {
        if (flagFormulario === tipo) {
            const resposta = await apiCadastrarTipos(dados);
            alert(JSON.stringify(resposta, null, 2))
        }

        if (flagFormulario === item) {
            const resposta = await apiCadastrarItens(dados);
            alert(JSON.stringify(resposta, null, 2))
        }
        event.target.reset();

    } catch (erro) {
        alert(erro.message);
    }
}

async function submitFormItemPorTipo(event) {
    event.preventDefault();
    const dados = Object.fromEntries(new FormData(event.target).entries());
    const path = dados.tipo_itens_colecionaveis

    try {
        if (flagFormulario === item) {
            const resposta = await apiConsultarItensTipoEspecifico(path);
            document.getElementById("tabela_itens").style.display = "block";
            renderizaTabelaItens(resposta);
        }
        event.target.reset();

    } catch (erro) {
        alert(erro.message);
    }

}

async function submitFormAlteraDeleta(event) {
    event.preventDefault();
    const dadosForm = Object.fromEntries(new FormData(event.target).entries());

    const dados = formataDadosForm(dadosForm);

    const confirmar = confirm("Deseja realizar a ação?");

    try {

        if (!confirmar) return alert("Ação cancelada!")

        if (flagFormulario === tipo) {
            if (flagAcao === deletar) {
                const resposta = await apiDeletarTipos(dados);
                alert(JSON.stringify(resposta, null, 2))
            }

            if (flagAcao === alterar) {
                const resposta = await apiAlterarTipos(dados);
                alert(JSON.stringify(resposta, null, 2))
            }
        }

        if (flagFormulario === item) {
            if (flagAcao === deletar) {
                const resposta = await apiDeletarItens(dados);
                alert(JSON.stringify(resposta, null, 2))
            }

            if (flagAcao === alterar) {
                const resposta = await apiAlterarItens(dados);
                alert(JSON.stringify(resposta, null, 2))
            }
        }
    } catch (erro) {
        alert(erro.message);
    }
}

function formataDadosForm(dadosForm) {

    const dadosFormatados = { ...dadosForm };

    if (flagFormulario === tipo) {
        if (dadosFormatados.id_tipo) {
            dadosFormatados.id_tipo = parseInt(dadosFormatados.id_tipo)
        }
    }

    if (flagFormulario === item) {
        if (dadosFormatados.id_item) {
            dadosFormatados.id_item = parseInt(dadosFormatados.id_item)
        }

        if (dadosFormatados.valor_item) {
            const dadoLimpo = String(dadosFormatados.valor_item).replace(',', '.');
            dadosFormatados.valor_item = parseFloat(dadoLimpo)
        }
    }

    return dadosFormatados
}

const CAMINHO_API = "http://127.0.0.1:5000";

// ===============================
// Funções de API
// ===============================

// itens colecionaveis

async function apiConsultarItens() {
    try {
        const response = await fetch(`${CAMINHO_API}/consultar/itens`, {
            method: "GET"
        });

        const dadosResposta = await response.json();

        if (!response.ok) {
            throw new Error(dadosResposta.Erro);
        }
        return dadosResposta;

    } catch (error) {
        throw error;
    }
}

async function apiConsultarItensTipoEspecifico(tipoItem) {
    try {
        const response = await fetch(`${CAMINHO_API}/consultar/itens/${tipoItem}`, {
            method: "GET"
        });

        const dadosResposta = await response.json();

        if (!response.ok) {
            throw new Error(dadosResposta.Erro);
        }
        return dadosResposta;

    } catch (error) {
        throw error;
    }
}

async function apiCadastrarItens(dados) {
    try {
        const response = await fetch(`${CAMINHO_API}/cadastrar/itens`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const dadosResposta = await response.json();

        if (!response.ok) {
            throw new Error(dadosResposta.Erro);
        }
        return dadosResposta;

    } catch (error) {
        throw error;
    }
}

async function apiDeletarItens(dados) {
    try {
        const response = await fetch(`${CAMINHO_API}/deletar/itens`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const dadosResposta = await response.json();

        if (!response.ok) {
            throw new Error(dadosResposta.Erro);
        }
        return dadosResposta;

    } catch (error) {
        throw error;
    }
}

async function apiAlterarItens(dados) {
    try {
        const response = await fetch(`${CAMINHO_API}/alterar/itens`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const dadosResposta = await response.json();

        if (!response.ok) {
            throw new Error(dadosResposta.Erro);
        }
        return dadosResposta;

    } catch (error) {
        throw error;
    }
}

// tipos de itens

async function apiConsultarTipos() {
    try {
        const response = await fetch(`${CAMINHO_API}/consultar/tipos`, {
            method: "GET"
        });

        const dadosResposta = await response.json();

        if (!response.ok) {
            throw new Error(dadosResposta.Erro);
        }
        return dadosResposta;

    } catch (error) {
        throw error;
    }
}

async function apiCadastrarTipos(dados) {
    try {
        const response = await fetch(`${CAMINHO_API}/cadastrar/tipos`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const dadosResposta = await response.json();

        if (!response.ok) {
            throw new Error(dadosResposta.Erro);
        }

        return dadosResposta;

    } catch (error) {
        throw error;
    }
}

async function apiDeletarTipos(dados) {
    try {
        const response = await fetch(`${CAMINHO_API}/deletar/tipos`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const dadosResposta = await response.json();

        if (!response.ok) {
            throw new Error(dadosResposta.Erro);
        }

        return dadosResposta;

    } catch (error) {
        throw error;
    }
}

async function apiAlterarTipos(dados) {
    try {
        const response = await fetch(`${CAMINHO_API}/alterar/tipos`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const dadosResposta = await response.json();

        if (!response.ok) {
            throw new Error(dadosResposta.Erro);
        }

        return dadosResposta;

    } catch (error) {
        throw error;
    }
}

// Roda os scripts na página
document.addEventListener("DOMContentLoaded", () => {
    escondeElementosAposCarregar();

    apresentaOpcaoPorTipoDeBotaoInicial();

    apresentaFormularioParaCadaBotaoDeAcao();

    adicionaEventosParaOsFormularios();

});

