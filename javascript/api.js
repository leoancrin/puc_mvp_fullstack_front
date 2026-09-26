const CAMINHO_API = "http://localhost:5000";

// ===============================
// Funções de API
// ===============================

// itens colecionaveis

export async function apiConsultarItens() {
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

export async function apiConsultarItensTipoEspecifico(tipoItem) {
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

export async function apiCadastrarItens(dados) {
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

export async function apiDeletarItens(dados) {
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

export async function apiAlterarItens(dados) {
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

export async function apiConsultarTipos() {
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

export async function apiCadastrarTipos(dados) {
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

export async function apiDeletarTipos(dados) {
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

export async function apiAlterarTipos(dados) {
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