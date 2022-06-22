let img;
let ratio = 1675 / 3200;
let myButtons = [];
let myButtonsImages = [];

const buttonsArr = [
	{
		image: "./assets/17-giugno---pulsante.png",
		url: "https://www.instagram.com/p/Cd5fvluq1FQ/",
		ratio: 195 / 1066,
	},
	{
		image: "./assets/18-giungo---pulsante.png",
		url: "https://www.instagram.com/p/Cd5fvluq1FQ/",
		ratio: 193 / 1066,
	},
	{
		image: "./assets/19-giugno---pulsante.png",
		url: "https://www.instagram.com/p/Cd5fvluq1FQ/",
		ratio: 211 / 1066,
	},
	{
		image: "./assets/albese-con-cassano---pulsante.png",
		url: "http://bit.ly/LambrockArrivoSubito",
		ratio: 264 / 971,
	},
	{
		image: "./assets/via-cristoforo-colombo-pulsante.png",
		url: "http://bit.ly/LambrockArrivoSubito",
		ratio: 150 / 663,
	},
	{
		image: "./assets/dieci-anni-di-lambrock-pulsante.png",
		url: "https://www.facebook.com/events/s/lambrock-festival-2022/323179513235562/",
		ratio: 299 / 1143,
	},
	{
		image: "./assets/notti-da-lupi---pulsante.png",
		url: "https://www.instagram.com/p/Ce5nMzNKIQ0/",
		ratio: 299 / 602,
	},
];

// function preload() {
// 	img = loadImage("./assets/splash-page---illustrazioni.png");
// }

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < buttonsArr.length; i++) {
		const { image, url, ratio } = buttonsArr[i];
		const x = (width / (buttonsArr.length + 1)) * i + 1;
		const y = int(random(height * 0.1, height * 0.9));
		createImageButton(x, y, image, url, ratio);
	}
}

function draw() {
	clear();
	for (let i = 0; i < myButtons.length; i++) {
		myButtons[i].run();
	}
}

function createImageButton(x, y, image, url, ratio) {
	const aNewBubble = new ImageButton(x, y, image, url, ratio);
	aNewBubble.create();
	myButtons.push(aNewBubble);
}

class ImageButton {
	constructor(temp_x, temp_y, temp_image, temp_url, temp_ratio) {
		this.x = temp_x;
		this.y = temp_y;
		this.speed = random(0.75,1.25)
		this.directionX = random([this.speed, -this.speed]);
		this.directionY = random([this.speed, -this.speed]);
		this.img = temp_image;
		this.url = temp_url;
		this.width = 150;
		this.ratio = temp_ratio;
	}

	create() {
		this.button = createImg(this.img);
		this.button.addClass('lambrock-button');
		this.width = int(random(width * 0.2, width * 0.2));
		this.width = max(this.width, 200);
		this.height = int(this.width * this.ratio);
		this.button.size(this.width, this.height);
		this.button.position(this.x, this.y);
		this.button.mousePressed(() => navigate(this.url));
	}

	updatePosition() {
		this.x += this.directionX;
		this.y += this.directionY;

		if (this.x > width - this.width) {
			this.directionX *= -1;
			this.x = width - this.width;
		} else if (this.x < 0) {
			this.directionX *= -1;
			this.x = 0;
		}
		if (this.y > height - this.height) {
			this.directionY *= -1;
			this.y = height - this.height;
		} else if (this.y < 0) {
			this.directionY *= -1;
			this.y = 0;
		}

		this.button.position(this.x, this.y);

		const d = dist(this.x+this.width/2, this.y+this.height/2, width/2, height/2);
		
		const _scale = 1 - (d / max(width/2, height/2))

		this.button.style('transform', `scale(${_scale})`);


	}

	run() {
		this.updatePosition();
	}
}

function navigate(url) {
	window.location.href = url;
}
