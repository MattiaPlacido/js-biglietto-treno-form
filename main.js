//funzione di generazione per carrozza e codice
const randomNumberGen = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const submit = document.getElementById("submit");
const undo = document.getElementById("undo");

submit.addEventListener("click", () => {
  //nodi di input
  const km = document.getElementById("km");
  const age = document.getElementById("fasciaEta");
  const credentials = document.getElementById("credentials");

  //nodi di output
  const afterPage = document.getElementById("after");
  const credentialsOutput = document.getElementById("credentials-output");
  const priceOutput = document.getElementById("prezzo-biglietto");
  const carriage = document.getElementById("carrozza");
  const cpCode = document.getElementById("codice-cp");
  const ticketTypeOut = document.getElementById("tipo-biglietto");

  //variabili di elaborazione
  let ticketType;
  let price = 0;
  const fullprice = km.value * 0.21;

  if (age.value === "1") {
    price = fullprice * 0.8;
    ticketType = "Biglietto per minori";
  } else if (age.value === "2") {
    price = fullprice;
    ticketType = "Biglietto Standard";
  } else {
    price = fullprice * 0.6;
    ticketType = "Biglietto over 65";
  }

  //mostro il ticket
  afterPage.classList.remove("d-none");

  //do tutti i dati di output alla pagina
  priceOutput.textContent = price.toFixed(2) + "€";
  credentialsOutput.textContent = credentials.value;
  cpCode.textContent = randomNumberGen(10000, 99999);
  carriage.textContent = randomNumberGen(1, 50);
  ticketTypeOut.textContent = ticketType;

  //gestisco la possibilità che l'utente clicchi annulla
  undo.addEventListener("click", () => {
    afterPage.classList.add("d-none");
  });
});
