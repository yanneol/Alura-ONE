// Função para criptografar o texto
function criptografar() {
    let texto = document.getElementById("texto").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("texto-criptografado").textContent = textoCriptografado;
    document.getElementById("texto-descriptografado").textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
}

// Função para descriptografar o texto
function descriptografar() {
    let texto = document.getElementById("texto").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("texto-descriptografado").textContent = textoDescriptografado;
    document.getElementById("texto-criptografado").textContent = "Nenhuma mensagem encontrada";
}

// Função para copiar o texto para a área de transferência
function copiarTexto() {
    let textoCopiado = document.getElementById("texto-criptografado").textContent || document.getElementById("texto-descriptografado").textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        alert("Texto copiado!");
    });
}

// Adicionando ouvintes de eventos
document.getElementById("criptografar").addEventListener("click", criptografar);
document.getElementById("descriptografar").addEventListener("click", descriptografar);
document.getElementById("copiar").addEventListener("click", copiarTexto);

