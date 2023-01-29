function updateTime() {
  let luccaElement = document.querySelector("#lucca");
  let luccaDateElement = luccaElement.querySelector(".date");
  let luccaTimeElement = luccaElement.querySelector(".time");
  let luccaMoment = moment().tz("Europe/Rome");

  luccaDateElement.innerHTML = luccaMoment.format("dddd Do MMMM YY");
  luccaTimeElement.innerHTML = luccaMoment.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeMoment = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeMoment.format("dddd Do MMMM YY");
  singaporeTimeElement.innerHTML = singaporeMoment.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let athensElement = document.querySelector("#athens");
  let athensDateElement = athensElement.querySelector(".date");
  let athensTimeElement = athensElement.querySelector(".time");
  let athensMoment = moment().tz("Europe/Athens");

  athensDateElement.innerHTML = athensMoment.format("dddd Do MMMM YY");
  athensTimeElement.innerHTML = athensMoment.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
