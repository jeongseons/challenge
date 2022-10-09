
const images = ["0.png","1.jpg","2.jpg","3.jpg","4.jpg","5.JPG","6.JPG"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);