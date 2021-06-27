// Solving problems using array functions on rest countries data. 
// 	- Get all the countries from Asia continent /region using Filter function
// 	- Get all the countries with a population of less than 2 lakhs using Filter function
// 	- Print the following details name, capital, flag using forEach function 
// 	- Print the total population of countries using reduce function 
// 	- Print the country which use US Dollars as currency.

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.eu/rest/v2/all");

xhr.onload = function () {
    let data = JSON.parse(this.response);

// 1)
    let asi = data.filter((m) => { return m.region === "Asia"; });
    console.log(asi);
// 2)
    let pop = data.filter((n) => { return n.population < 200000; });
    console.log(pop);
// 3)
	data.forEach((el,i) => {
		console.log("Name:",el.name);
		console.log("Capital:",el.capital);
		console.log("Flag:",el.flag);
	});
// 4)
	let tot = data.map((p) => { return p.population; }).reduce((x,y) => { return x+y; });
	console.log(tot);
// 5)
	let usd = data.filter((d) => { return d.currencies });
	for(let i in usd) {
		if(usd[i].currencies[0].code == 'USD') {
			console.log(usd[i].name);
		}
	}
};

xhr.send();
