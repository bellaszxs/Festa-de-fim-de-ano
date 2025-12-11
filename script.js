// Função do menu responsivo
document.querySelectorAll('.hamburger').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.nextElementSibling;
    nav.classList.toggle('open');
  });
});

// Ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const ano = new Date().getFullYear();
  document.querySelectorAll("#anoAtual").forEach(el => {
    el.textContent = ano;
  });
});

// Validação do formulário
document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Validação do Formulário de Contato ---
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            
            // 1. Coleta e Limpa os valores
            const nome = document.getElementById('nome');
            const email = document.getElementById('email');
            const mensagem = document.getElementById('mensagem');

            const nomeValue = nome.value.trim();
            const emailValue = email.value.trim();
            const mensagemValue = mensagem.value.trim();
            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            let validationPassed = true; // Flag para rastrear a validação

            // Validações Sequenciais
            if (nomeValue === "") {
                alert("ERRO DE VALIDAÇÃO: Por favor, preencha o campo 'nome completo'.");
                nome.focus();
                validationPassed = false;
            } else if (!emailPattern.test(emailValue)) {
                alert("ERRO DE VALIDAÇÃO: Por favor, insira um endereço de e-mail válido.");
                email.focus();
                validationPassed = false;
            } else if (mensagemValue === "") {
                alert("ERRO DE VALIDAÇÃO: Por favor, preencha o campo 'mensagem'.");
                mensagem.focus();
                validationPassed = false;
            }

            if (!validationPassed) {
                // Se a validação falhou, impedimos o envio
                event.preventDefault(); 
            } else {
                // Se o JS passou, vamos permitir o envio do formulário,
                // que agora deve apontar para processa.html (onde o JS está incorporado).
                // O 405 Não Permitido ocorrerá no processa.html se o método POST for usado.
            }
        });
    }

    // --- 2. Outras Funções (Menu e Ano no Rodapé) ---
    
    // Função do Menu Responsivo (Assumindo que está em todos os arquivos)
    document.querySelectorAll('.hamburger').forEach(btn => {
        btn.addEventListener('click', () => {
            const nav = btn.nextElementSibling;
            nav.classList.toggle('open');
        });
    });

    // Ano no Rodapé (Se o seu HTML tiver um elemento com ID 'anoAtual')
    const ano = new Date().getFullYear();
    document.querySelectorAll("#anoAtual").forEach(el => {
        el.textContent = ano;
    });
});

