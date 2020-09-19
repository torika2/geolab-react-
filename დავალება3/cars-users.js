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

function carsPriceMean(){
	let unsignedPrice = 0; 
	let count = 0;

	for (var i = 0; i < cars.length; i++) {
		unsignedPrice += cars[i].price;
		count++;
		if (cars.length === count){
			unsignedPrice = unsignedPrice/cars.length
		}
	}
	return `Ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის : ${unsignedPrice}`;
}

console.log(carsPriceMean());


function findCarMaxPrice() {
	let number = cars[1].price;
	for (var i = 1; i < cars.length; i++) {
		if(cars[i].price > number){
			number = cars[i].price;
		}
	}
	return `ჩვენს მარაგში არსებული ყველაზე ძვირიანი მანქანის ფასი არის : ${number}`;
}

console.log(findMaxPrice());


let user1 = {
	usn : 'tor1k',
	pwd : '111',
};

let user3 = {
	usn : 'sofo',
	pwd : '222',
};

let user2 = {
	usn : 'giorgi2',
	pwd : 'gio',
};


let users = [user1,user2,user3];

function checkPasswordDifficalty(password) {
	if (password.length < 8) {
		return true;
	}
}

// console.log(typeof ra);

function login(username,password) {
	for (var i = 0; i < users.length; i++){
		if(users[i].usn === username){
			if(users[i].pwd === password){
				if (checkPasswordDifficalty(password)) {
					return `შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი`;
				}
				return `წარმატებით შეხვედით სისტემაში`;
			}else{
				return `პაროლი არასწორია!`;
			}
		}else{
			return `მოცემული სახელით მომხმარებელი არ მოიებნა`;
		}
	}
}

console.log(login('tor1k','111'));

