let currentImage = 0;
let myPhotos = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];
let container = document.getElementById("content");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("previous");

nextBtn.addEventListener("click", function (event) {
  event.preventDefault();

  currentImage++;
  if (currentImage > myPhotos.length - 1) {
    currentImage = 0;
  }

  swapImage();
});

prevBtn.addEventListener("click", function (event) {
  event.preventDefault();

  currentImage--;
  if (currentImage < 0) {
    currentImage = myPhotos.length - 1;
  }

  swapImage();
});

function swapImage() {
  let newSlide = document.createElement("img");
  newSlide.src = `slides/${myPhotos[currentImage]}`;
  newSlide.className = "fadeinimg";
  container.appendChild(newSlide);

  if (container.children.length > 2) {
    container.removeChild(container.children[0]);
  }
}
