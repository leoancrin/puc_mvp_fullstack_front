const CAMINHO_API = "http://localhost:5000";

// ===============================
// Funções de API
// ===============================

// itens colecionaveis

// get

export async function apiConsultarItens() {
    try {
        const response = await fetch(`${CAMINHO_API}/consultar/itens`,{
            method: "GET"
        });
        if(!response.ok) throw new Error(response.error);
        return response.json();
    } catch (error) {
        console.error("Erro na consulta da API", error);
    }
}

// tipos de itens

export async function apiConsultarTipos() {
    try {
        const response = await fetch(`${CAMINHO_API}/consultar/tipos`,{
            method: "GET"
        });
        if(!response.ok) throw new Error(response.error);
        return response.json();
    } catch (error) {
        console.error("Erro na consulta da API", error);
    }
}