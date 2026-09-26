# puc_mvp_fullstack_front
Repositório para o front-end do MVP da disciplina Desenvolvimento FullStack da Pós da PUC-Rio

## Descrição

Este repositório tem por função apresentar o código desenvolvido para o front-end da API de itens colecionáveis. É uma SPA (Single Page Application).

---

## Como acessar

Caso queira ver o html inteiro basta abrir o arquivo no seu navegador

### Como interagir dinamicamente

Para interagir com o html é necessário instalar a extensão LiveServer (caso use o VS Code), ou outra forma de rodar um servidor local. Em seguida basta clicar com o botão direito sobre o arquivo no VS Code e clicar em Open with Live Server.

---

## Como interagir com a API

A API responsável pelo back-end se encontra no repositório `https://github.com/leoancrin/puc_mvp_fullstack_api`. Para funcionar é necessário seguir os passos descritos no README. Configure a porta da API para 5000 (127.0.0.1:5000)

>Para alterar o direcionamento, acesse o arquivo api.js e altere a variável CAMINHO_API

---

### Opcional

O código também foi estruturado para rodar via LiveServer. Nesse caso abra o index.html e descomente o trecho
> <!-- <script defer type="module" src="../javascript/script.js"></script> -->
e comente o trecho
> <script src="../script_mvp.js"></script>



