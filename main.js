//1a parte con solo 2 form e l'output in console

//2a parte con il form nell'immagine stampando i contenuti in pagina

const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const km = document.getElementById("km");
  const age = document.getElementById("fasciaEta");

  let price = 0;
  const fullprice = km.value * 0.21;

  if (age.value === "1") price = fullprice * 0.8;
  else if (age.value === "2") price = fullprice;
  else price = fullprice * 0.6;

  console.log(price);
});
