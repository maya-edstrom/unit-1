function initialize(){
	cities();

}

function cities () {
	let cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	let table = document.createElement("table");
	let myDiv = document.getElementById("mydiv");

	let headerRow = document.createElement("tr");
	let cityHeader = document.createElement("th");
	cityHeader.innerHTML = "City";
	headerRow.appendChild(cityHeader);

	let popHeader = document.createElement("th");
	popHeader.innerHTML = "Population";
	headerRow.appendChild(popHeader);

	console.log(headerRow)
	table.appendChild(headerRow);
	myDiv.appendChild(table);
	console.log(cityPop)
	console.log(cityPop[0].city)
	for (let i = 0; i < cityPop.length; i++){
		let row = document.createElement("tr")
		let city = document.createElement("td")
		let population = document.createElement("td")


		city.innerHTML = cityPop[i].city
		population.innerHTML = cityPop[i].population

		row.appendChild(city)
		row.appendChild(population)

		table.appendChild(row)

		//"<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		//table.appendChild(rowHtml)

		//table.append(rowHtml);
	};

	addColumns(cityPop);
	addEvents();
};

function addColumns(cityPop) {
	document.querySelectorAll("tr").forEach(function (row, i) {

		if (i === 0) {

			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');

		} else {

			let citySize;

			if (cityPop[i - 1].population < 100000) {
				citySize = 'Small';

			} else if (cityPop[i - 1].population < 500000) {
				citySize = 'Medium';

			} else {
				citySize = 'Large';
			}

			row.appendChild(citySize)
			let sizeCell = document.createElement("td");
			sizeCell.innerHTML = citySize;
			row.appendChild(sizeCell);
		}
	});
}

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){

		let color = "rgb";

		for (let i=0; i<3; i++){
			let random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";

			} else {
				color += ")";
		}

		document.querySelector("table").color = color;
		}
	});
}

function clickMe(){

	document.querySelector("table").addEventListener("click", function(){
		alert('Hey, you clicked me!');
		});
}

window.onload = initialize();
