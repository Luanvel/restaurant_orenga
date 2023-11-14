(function () {
  /***** Oferta gastronòmica *****/
  afegeixEsdevenimentCopiaText();

  /***** Reserves *****/
  afegeixEsdevenimentCanviNumeroComensals();
  afegeixEsdevenimentEnviamentFormulari();

  /***** Footer (secció contacte) *****/
  afegeixHoraActual();

  /***** Oferta gastronòmica *****/
  function afegeixEsdevenimentCopiaText() {
    let ofertaGastronomica = document.getElementById("ofertaGastronomica");

    ofertaGastronomica.addEventListener("copy", function () {
      alert(
        "Sol·liciti a info@restaurantorenga.cat l'oferta gastronòmica en format digital i li enviarem un document PDF amb tota la informació."
      );
    });
  }

  /***** Reserves *****/
  function afegeixEsdevenimentCanviNumeroComensals() {
    let comensals = document.getElementById("comensals");
    let preuAproximat = document.getElementById("preuAproximat");

    comensals.addEventListener("input", function () {
      const numeroComensals = comensals.value;
      let preuAproximatReal = numeroComensals * 50;

      preuAproximat.innerText = preuAproximatReal;
    });
  }

  function afegeixEsdevenimentEnviamentFormulari() {
    let formReserves = document.querySelector("form");

    formReserves.addEventListener("submit", function (event) {
      const menors5Anys = formReserves.elements["menors5Anys"].value;

      const ubicacio = formReserves.elements["ubicacio"].value;

      if (menors5Anys === "Sí" && ubicacio === "Sala Mèxic") {
        alert(
          "No es possible fer una reserva si hi ha menors de 5 anys i la ubicació triada és la Sala Mèxic ja que no està suficientment habilitada."
        );
        event.preventDefault();
      }
    });
  }

  /***** Footer (secció contacte) *****/
  function afegeixHoraActual() {
    const nouParagraf = document.createElement("p");
    nouParagraf.innerHTML = 'Hora actual: <span id="horaActual"></span>';
    const elementAddress = document.querySelector("address");
    const ultimParagraf = elementAddress.lastElementChild;
    elementAddress.removeChild(ultimParagraf);
    elementAddress.appendChild(nouParagraf);
    elementAddress.appendChild(ultimParagraf);
    setInterval(actualitzaHora, 1000);
  }

  function actualitzaHora() {
    const data = new Date();
    let hores = data.getHours();
    let minuts = data.getMinutes();
    let segons = data.getSeconds();
    hores = estableixFormatDosDigits(hores);
    minuts = estableixFormatDosDigits(minuts);
    segons = estableixFormatDosDigits(segons);
    document.getElementById("horaActual").innerHTML =
      hores + ":" + minuts + ":" + segons;
  }

  function estableixFormatDosDigits(valor) {
    return valor.toString().padStart(2, "0");
  }
})();
