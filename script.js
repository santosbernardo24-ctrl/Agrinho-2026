/* AGRINHO 2026 - script.js */

// Mensagem ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
console.log("Site AGRINHO 2026 carregado com sucesso!");
});

// Função para exibir uma mensagem ao clicar em um botão
function mostrarMensagem() {
alert("Juntos podemos construir um agro mais sustentável!");
}

// Exemplo de mudança de tema da página
function alterarTema() {
document.body.classList.toggle("tema-escuro");
}

// Exemplo de animação simples ao clicar em um elemento
function destacarElemento(id) {
const elemento = document.getElementById(id);

```
if (elemento) {
    elemento.classList.add("destaque");

    setTimeout(() => {
        elemento.classList.remove("destaque");
    }, 1000);
}
```

}

// Exemplo de validação de formulário
function validarFormulario() {
const nome = document.getElementById("nome");

```
if (nome && nome.value.trim() === "") {
    alert("Por favor, preencha o campo nome.");
    return false;
}

alert("Formulário enviado com sucesso!");
return true;
```

}

