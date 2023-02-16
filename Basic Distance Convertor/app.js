document.getElementById("convert").addEventListener("submit", function (event) {
  var distance = parseFloat(document.getElementById("distance").value);
  let answer = document.getElementById("answer");

  if (distance) {
    let conversion = (distance * 1.609344).toFixed(3);
    // let roundedConversion = (Math.random(conversion * 1000))/1000;

    answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
  } else {
    answer.innerHTML = "<h2>Please provide the number!</h2>";
  }

  event.preventDefault();
});
