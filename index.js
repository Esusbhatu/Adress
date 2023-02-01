
var ul = document.getElementById('inzicht');
const newArray = new Array();




function createlink(id) {
	const link = document.createElement("a");
	link.href = "data.html?id=" + id;
	return link;

}
function show_local() {
	
    var myTable = document.getElementById("mytable");
    
        var array = JSON.parse(localStorage.getItem("personen"));
        if (array != null) {
            for (i = 0; i < array.length; i++) {
    
                // const newId = newArray.length++;
                // const link = createlink(newId);
                let button = document.createElement("button");
                var t = document.createTextNode("verwijder");
                button.appendChild(t)
                button.value = array[i].id;
                button.classList.add('btn');
                button.classList.add('btn-danger');
                // ul.appendChild(button);
                // ul.appendChild(link);
                var row = myTable.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML += array[i].voornaam;
                cell2.innerHTML += array[i].acternaam;
                // cell3.innerHTML += '<a href= ' + link + '><button type="button" class="btn btn-primary">Toon</button></a>';
                cell4.appendChild(button);
    
                button.addEventListener("click", function (e) {
                    console.log('event', e.target.value);
    
                    const id = e.target.value;
                    const newArray = array.filter((personInfo) => personInfo.id != id);
                    localStorage.setItem('personen', JSON.stringify(newArray));
                    location.href = 'http://127.0.0.1:5500/index.html';
    
                })
            }
        }
    
    }

    show_local();
	
function add_local() {
	const toevoegen = getPersonlist();
	const voornaam = document.getElementById('voornaam').value;
	const tussennaam = document.getElementById('tussennaam').value;
	const acternaam = document.getElementById('acternaam').value;
	const woonplaats = document.getElementById('woonplaats').value;
	const adres = document.getElementById('adres').value;
	const postcode = document.getElementById('postcode').value;
	const newId = newArray.length;
	console.log(newId);
	if (voornaam) {
		toevoegen.push({
			id: newId, voornaam: voornaam, tussennaam: tussennaam,
			acternaam: acternaam, woonplaats: woonplaats, adres: adres, postcode: postcode
		});
		//  invoer leeg maken
		document.getElementById('voornaam').value = '';
		document.getElementById('tussennaam').value = '';
		document.getElementById('acternaam').value = '';
		document.getElementById('woonplaats').value = '';
		document.getElementById('adres').value = '';
		document.getElementById('postcode').value = '';
		//  Hier worden de gegevens in localStorage opgeslagen
		localStorage.setItem('personen', JSON.stringify(toevoegen));
		
		

	}
	location.href = 'http://127.0.0.1:5500/registratie.html';
}

// Deze function kijkt of localStorage heeft data dan geeft terug ander maakt nieuw array 
function getPersonlist() {
	var personList = localStorage.getItem("personen");
	if (personList != null) {
		return JSON.parse(personList);
	} else {
		return newArray;
	}
}


// deze function zorgt dat localStorage leeg wordt gemaakte
function emptyStorage() {
	localStorage.removeItem("personen");

	location.href = 'http://127.0.0.1:5500/registratie.html';
}






