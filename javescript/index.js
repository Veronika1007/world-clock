function updateTime() {
  let luccaElement = document.querySelector("#lucca");
  if (luccaElement) {
    let luccaDateElement = luccaElement.querySelector(".date");
    let luccaTimeElement = luccaElement.querySelector(".time");
    let luccaMoment = moment().tz("Europe/Rome");

    luccaDateElement.innerHTML = luccaMoment.format("dddd Do MMMM YY");
    luccaTimeElement.innerHTML = luccaMoment.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeMoment = moment().tz("Asia/Singapore");

    singaporeDateElement.innerHTML = singaporeMoment.format("dddd Do MMMM YY");
    singaporeTimeElement.innerHTML = singaporeMoment.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensMoment = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensMoment.format("dddd Do MMMM YY");
    athensTimeElement.innerHTML = athensMoment.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
<div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd Do MMMM YY")}</div>
    </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
</div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
