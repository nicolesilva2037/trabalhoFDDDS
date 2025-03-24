document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("integrantes").style.display = "none";
  document.getElementById("tarefas").style.display = "none";
  document.getElementById("sobre").style.display = "none";
  document.getElementById("contato").style.display = "none";

  function mostrarSecao(secaoId) {
      let secoes = ["integrantes", "tarefas", "sobre", "contato"];
      secoes.forEach(secao => {
          document.getElementById(secao).style.display = secao === secaoId ? "block" : "none";
      });
  }

  document.querySelector("a[href='#integrantes']").addEventListener("click", function (event) {
      event.preventDefault();
      mostrarSecao("integrantes");
  });

  document.querySelector("a[href='#tarefas']").addEventListener("click", function (event) {
      event.preventDefault();
      mostrarSecao("tarefas");
  });

  document.querySelector("a[href='#sobre']").addEventListener("click", function (event) {
      event.preventDefault();
      mostrarSecao("sobre");
  });

  document.querySelector("a[href='#contato']").addEventListener("click", function (event) {
    event.preventDefault();
    mostrarSecao("contato");
});
});
