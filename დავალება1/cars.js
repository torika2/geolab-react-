let car1 = {
	mark:"Audi",
	model:"A4",
	color:"White",
	hp:190,
	price:2000,
	release_date:"5/15/2019",
};
let car2 = {
	mark:"Bmw",
	model:"M3",
	color:"Black",
	hp:234,
	price:35000,
	release_date:"5/15/2019",
};
let car3 = {
	mark:"Ford",
	model:"Eleonore",
	color:"Grey",
	hp:504,
	price:70000,
	release_date:"5/15/2019",
};
let car4 = {
	mark:"Volkswagen",
	model:"Tey",
	color:"Red",
	hp:100,
	price:3000,
	release_date:"5/15/2019",
};


let cars = [car1,car2,car3,car4];

let counter = 0;
for (var i = 0; i < cars.length; i++) {
	if (cars[i].price < 15000) {
		console.log(`Mark:${cars[i].mark}, Model:${cars[i].model}`);
		counter = 1;
	}
}
if (counter == 0) {
	console.log("Not found!");
}