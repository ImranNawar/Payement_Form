let convertType = "miles";
let heading = document.querySelector("h1");
let intro = document.querySelector("p");
let answerDiv = document.getElementById("answer");
let form = document.getElementById("convert");

document.addEventListener("keydown", function (event) {
  let key = event.code; // capturing key

  if (key === "KeyK") {
    convertType = "kilometers";
    heading.innerHTML = "Kilometers to Miles Convertor";
    intro.innerHTML =
      "Type in a number of kilometers and click the button to convert the distance to miles";
  } else if (key === "KeyM") {
    convertType = "miles";
    heading.innerHTML = "Miles to Kilometers Convertor";
    intro.innerHTML =
      "Type in a number of miles and click the button to convert the distance to kilometers";
  }
});

form.addEventListener("submit", function (event) {
  let distance = parseFloat(document.getElementById("distance").value);
  if (distance) {
    if (convertType == "miles") {
      let converted = (distance * 1.609344).toFixed(3);
      answer.innerHTML = `${distance} miles convert to ${converted} kilometers`;
    } else {
      let converted = (distance * 0.621371192).toFixed(3);
      answer.innerHTML = `${distance} kilometers convert to ${converted} miles`;
    }
  } else {
    answer.innerHTML = "<h2>Please provide a number!</h2>";
  }
  event.preventDefault();
});
