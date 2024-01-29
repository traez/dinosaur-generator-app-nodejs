console.log("scripts.js loaded");
const baseURL = 'https://dinosaur-generator-nodejs-traez.vercel.app';

document.querySelector('#btnLoad').addEventListener('click', () => {
	if (document.querySelector('#dinoName') !== null) {
		document.querySelector('#dinoName').remove();
	}
	if (document.querySelector('#dinoImage') !== null) {
		document.querySelector('#dinoImage').remove();
	}
	getDinoName();
});

async function getDinoName() {
	const response = await fetch('/dinoname');
	const data = await response.json();
	let dinoName = data[0].join(' ');
	console.log(dinoName);

	let dinoNameDiv = document.createElement('div');
	dinoNameDiv.id = 'dinoName';
	dinoNameDiv.textContent = dinoName;
	document.querySelector('#dinoWrapper').appendChild(dinoNameDiv);

	getDinoImage();
}

async function getDinoImage() {
	const response = await fetch('/dinoimage');
	const data = await response.json();
  let dinoImage = data.items[Math.floor(Math.random() * data.items.length)];
  let dinoImageUrl = dinoImage.thumbnailImageUrl;
  let dinoAlt = dinoImage.title;
	console.log(dinoImage);

	let img = document.createElement('img');
	img.id = 'dinoImage';
	img.src = dinoImageUrl;
	img.alt = dinoAlt;
	document.querySelector('#dinoWrapper').appendChild(img);
}

