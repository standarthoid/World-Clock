//Los Angeles
function LosAngelesDate() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do YYYY");
  function displayLosAngelesTime() {
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss [<small>]a[</small>]"
    );
  }
  displayLosAngelesTime();
  setInterval(displayLosAngelesTime, 1000);
}
LosAngelesDate();

//São Paulo
function SaoPauloDate() {
  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTime = moment().tz("America/Sao-Paulo");
  saoPauloDateElement.innerHTML = saoPauloTime.format("dddd, MMMM Do YYYY");
  function displaySaoPauloTime() {
    let saoPauloTimeElement = saoPauloElement.querySelector(".time");
    let saoPauloTime = moment().tz("America/Sao-Paulo");
    saoPauloTimeElement.innerHTML = saoPauloTime.format(
      "hh:mm:ss [<small>]a[</small>]"
    );
  }
  displaySaoPauloTime();
  setInterval(displaySaoPauloTime, 1000);
}
SaoPauloDate();

//Lisbon
function LisbonDate() {
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTime = moment().tz("Europe/Lisbon");
  lisbonDateElement.innerHTML = lisbonTime.format("dddd, MMMM Do YYYY");
  function displayLisbonTime() {
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");
    lisbonTimeElement.innerHTML = lisbonTime.format(
      "hh:mm:ss [<small>]a[</small>]"
    );
  }
  displayLisbonTime();
  setInterval(displayLisbonTime, 1000);
}
LisbonDate();
