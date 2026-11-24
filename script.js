(function(){
  var raiz = document.documentElement;
  function temaAtual(){
    var t = raiz.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  var btnTema = document.getElementById("tema");
  try { var salvo = localStorage.getItem("tema"); if (salvo) raiz.setAttribute("data-theme", salvo); } catch (e) {}
  btnTema.setAttribute("aria-pressed", temaAtual() === "light" ? "true" : "false");
  btnTema.addEventListener("click", function(){
    var novo = temaAtual() === "dark" ? "light" : "dark";
    raiz.setAttribute("data-theme", novo);
    btnTema.setAttribute("aria-pressed", novo === "light" ? "true" : "false");
    try { localStorage.setItem("tema", novo); } catch (e) {}
  });

  var aviso = document.getElementById("aviso");
  var email = "a.s.gustavo@outlook.com.br";
  var timerAviso;
  function msg(t, manter){
    clearTimeout(timerAviso);
    aviso.textContent = t;
    if (!manter) timerAviso = setTimeout(function(){ aviso.textContent = ""; }, 3000);
  }
  function copiarLegado(texto){
    var area = document.createElement("textarea");
    area.value = texto;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(area);
    return ok;
  }
  document.getElementById("copiar").addEventListener("click", function(){
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(
        function(){ msg("E-mail copiado."); },
        function(){
          if (copiarLegado(email)) msg("E-mail copiado.");
          else msg("Copie manualmente: " + email, true);
        }
      );
    } else if (copiarLegado(email)) {
      msg("E-mail copiado.");
    } else {
      msg("Copie manualmente: " + email, true);
    }
  });

  document.getElementById("ano").textContent = new Date().getFullYear();
})();
