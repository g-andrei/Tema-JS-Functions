function cursEuro(valoare) {
	return valoare * 4.8;
}

function cursUsd(valoare) {
	return valoare * 4.3;
}

function extragereCastiguri(propozitie) {
	var str = propozitie.split(" ");
	var venituri = str.map((numar) => parseInt(numar) ? parseInt(numar) : numar);
	return venituri;
}

function calculVenituriAnuale(venit) {
	var numere = extragereCastiguri(venit);
	var castigEuroAn = 0;
	var castigUsdAn = 0;
	var castigLeiAn = 0;
	var castigTotal = 0;

	for (var i = 0; i < numere.length; i++) {
		switch (numere[i + 1]) {
			case "lei/luna":
				castigLeiAn = castigLeiAn + numere[i] * 12;
				break;
			case "lei/an":
				castigLeiAn += numere[i];
				break;
			case "euro/luna":
				castigEuroAn += numere[i] * 12;
				break;
			case "euro/an":
				castigEuroAn += numere[i];
				break;
			case "usd/luna":
				castigUsdAn += numere[i] * 12;
				break;
			case "usd/an":
				castigUsdAn += numere[i];
				break;
		}
	}

	castigTotal = cursEuro(castigEuroAn) + cursUsd(castigUsdAn) + castigLeiAn;

	console.log(`Venitul total anual al lui ${numere[0]} este de: ${castigTotal} lei.`);
}

calculVenituriAnuale("Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing");
calculVenituriAnuale("John castiga 1000 euro/luna din salariu, 9000 lei/an bonus si 1000 usd/luna din freelancing.");