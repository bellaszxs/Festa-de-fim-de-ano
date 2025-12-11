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
const form = document.getElementById("contatoForm");
if (form) {
  form.addEventListener("submit", (e) => {
    const email = form.email.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      alert("Digite um e-mail válido!");
      e.preventDefault();
    }
  });
}
