//Los Angeles
function LosAngelesDate() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, MMMM Do YYYY");
    function displayLosAngelesTime() {
      let losAngelesTimeElement = losAngelesElement.querySelector(".time");
      let losAngelesTime = moment().tz("America/Los_Angeles");
      losAngelesTimeElement.innerHTML = losAngelesTime.format(
        "HH:mm:ss [<small>]a[</small>]"
      );
    }
  }
  displayLosAngelesTime();
  setInterval(displayLosAngelesTime, 1000);
}
LosAngelesDate();

//São Paulo
function SaoPauloDate() {
  let saoPauloElement = document.querySelector("#sao-paulo");
  if (saoPauloElement) {
    let saoPauloDateElement = saoPauloElement.querySelector(".date");
    let saoPauloTime = moment().tz("America/Sao_Paulo");
    saoPauloDateElement.innerHTML = saoPauloTime.format("dddd, MMMM Do YYYY");
    function displaySaoPauloTime() {
      let saoPauloTimeElement = saoPauloElement.querySelector(".time");
      let saoPauloTime = moment().tz("America/Sao_Paulo");
      saoPauloTimeElement.innerHTML = saoPauloTime.format(
        "HH:mm:ss [<small>]a[</small>]"
      );
    }
  }
  displaySaoPauloTime();
  setInterval(displaySaoPauloTime, 1000);
}
SaoPauloDate();

//Lisbon
function LisbonDate() {
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTime = moment().tz("Europe/Lisbon");
    lisbonDateElement.innerHTML = lisbonTime.format("dddd, MMMM Do YYYY");
    function displayLisbonTime() {
      let lisbonTimeElement = lisbonElement.querySelector(".time");
      let lisbonTime = moment().tz("Europe/Lisbon");
      lisbonTimeElement.innerHTML = lisbonTime.format(
        "HH:mm:ss [<small>]a[</small>]"
      );
    }
  }
  displayLisbonTime();
  setInterval(displayLisbonTime, 1000);
}
LisbonDate();

function updateCity(event) {
  function updateTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` <div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "HH:mm:ss [<small>]a[</small>]"
            )}</div>
          </div>
          <hr />
          <h2></h2>
          <a href="index.html" class="timemachine">Start time machine</a>`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
