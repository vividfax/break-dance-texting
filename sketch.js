let followCard;
let leadCard
let followBlankCard;
let leadBlankCard;

let cards;

let followMiddleStack = [];
let leadMiddleStack = [];

let narrativeIndex = 0;

function preload() {

	followCard = loadImage("images/follow-card.png");
	leadCard = loadImage("images/lead-card.png");
	followBlankCard = loadImage("images/follow-blank-card.png");
	leadBlankCard = loadImage("images/lead-blank-card.png");

	cards = loadJSON("cards.json");
}

function setup() {

	createCanvas(windowWidth, windowHeight);
	background("#B798AF");

	imageMode(CENTER);
	textAlign(CENTER, CENTER);
	angleMode(DEGREES);

	push();

	translate(width/2, height/2);

	displayMiddleCardStack();
	displayCardStacks();
	displayCurrentCards(0);
	displayOpposingCards();

	pop();

	narrativeIndex++;

	noLoop();
}

function mousePressed() {


	push();
	translate(width/2, height/2);

	if (mouseX > width/2 - 250 && mouseX < width/2 + 250 && mouseY > height-200) {

		background("#B798AF");

		displayMiddleCardStack();
		displayCardStacks();

		if (cards.cards[narrativeIndex].response.one != "") {

			displayCurrentCards(narrativeIndex);
			displayOpposingCards();
		}

		narrativeIndex++;
	}
	pop();
}

function displayMiddleCardStack() {

	let followMiddleCard = new Card("followBlank", 0, -40, cards.cards[narrativeIndex].call, false);
	followMiddleStack.push(followMiddleCard);

	let leadMiddleCard = new Card("leadBlank", 0, -40, cards.cards[narrativeIndex].call, false);
	leadMiddleStack.push(leadMiddleCard);

	for (let i = 0; i < followMiddleStack.length; i++) {

		if (i != 0) {
			leadMiddleStack[i].display();
		}
		followMiddleStack[i].display();
	}
}

function displayCurrentCards(n) {

	let choiceCard1 = new Card("leadBlank", -150, height/2-70, cards.cards[n].response.one, false);
	choiceCard1.display();

	let choiceCard2 = new Card("leadBlank", 0, height/2-80, cards.cards[n].response.two, false);
	choiceCard2.display();

	let choiceCard3 = new Card("leadBlank", 150, height/2-70, cards.cards[n].response.three, false);
	choiceCard3.display();
}

function displayCardStacks() {

	let leadStack1 = new Card("lead", width/3, -40, "", true);
	leadStack1.display();

	let leadStack2 = new Card("lead", width/3+2, -40-2, "", true);
	leadStack2.display();

	let leadStack3 = new Card("lead", width/3+4, -40-4, "", true);
	leadStack3.display();

	let followStack1 = new Card("follow", -width/3, -40, "", true);
	followStack1.display();

	let followStack2 = new Card("follow", -width/3+2, -40-2, "", true);
	followStack2.display();

	let followStack3 = new Card("follow", -width/3+4, -40-4, "", true);
	followStack3.display();
}

function displayOpposingCards() {

	let opposing1 = new Card("follow", -150, -height/2-10, "", false);
	opposing1.display();

	let opposing2 = new Card("follow", 0, -height/2, "", false);
	opposing2.display();

	let opposing3 = new Card("follow", 150, -height/2-10, "", false);
	opposing3.display();
}
