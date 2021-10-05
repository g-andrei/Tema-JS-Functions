//  Primul exercitiu
console.log(`Primul exercitiu`);

function temperatureConversion() {
    var denumireTemperatura = prompt(`Ce tip de temperatura doriti sa convertiti? (celsius sau fahrenheit)`);

    while( denumireTemperatura === "" ) {
        alert("Va rog sa alegeti un tip de temperatura.");
        denumireTemperatura = prompt(`Ce tip de temperatura doriti sa convertiti? (celsius sau fahrenheit)`);
    }

    var temperaturaPentruConversie = prompt("Ce temperatura doriti sa convertiti");

    while( temperaturaPentruConversie === "" ) {
        alert("Va rog sa introduceti valoarea pe care doriti sa o convertiti.");
        temperaturaPentruConversie = prompt("Ce temperatura doriti sa convertiti");
    }

    if( denumireTemperatura === "celsius" ) {
        console.log(`Temperatura celsius ${temperaturaPentruConversie}, temperatura in fahrenheit ${temperaturaPentruConversie/5*9 + 32} \n \n`);
        return temperaturaPentruConversie/5*9 + 32;
    } else if( denumireTemperatura === "fahrenheit" ) {
        console.log(`Temperatura fahrenheit ${temperaturaPentruConversie}, temperatura in celsius ${((temperaturaPentruConversie-32))*5/9} \n \n`);
        return (temperaturaPentruConversie-32)*5/9;
    }
}

temperatureConversion();

//  Al 2-lea exercitiu
console.log(`Al 2-lea exercitiu`);

function distantaDintre2PuncteInPlan (primulPunct, alDoileaPunct) {
    var distantaDintrePuncte = Math.sqrt( (alDoileaPunct[0] - primulPunct[0]) ** 2 + (alDoileaPunct[1] - primulPunct[1]) ** 2 );

    console.log(`Primul punct din plan este A(${primulPunct}), al 2-lea punct din plan este B(${alDoileaPunct}).`);
    console.log(`Distanta dintre cele doua puncte este AB= ${distantaDintrePuncte}. \n\n\n`);
}

var primulPunct = [1 , 1];
var alDoileaPunct = [4 , 5];

distantaDintre2PuncteInPlan(primulPunct, alDoileaPunct)


//  Al 3-lea exercitiu
console.log(`Al 3-lea exercitiu`);

function getDistances(points) {
    for(var i = 0; i < points.length; i++) {
        var distantaDintrePuncte = Math.sqrt( (points[i][1].x - points[i][0].x) ** 2 + (points[i][1].y - points[i][0].y) ** 2);

        console.log(`Distanta dintre A(${points[i][0].x}, ${points[i][0].y}) si B(${points[i][1].x}, ${points[i][1].y}) este AB= ${distantaDintrePuncte}`);
    }
}

points = [
    [{ x: 2, y: 3 }, { x: 1, y: 4 }], // pozitia 0

    [{ x: -1, y: 2 }, { x: 2, y: -3 }], // pozitia 1

    [{ x: 5, y: 0 }, { x: -2, y: 1 }], // pozitia 2

    [{ x: 4, y: 5 }, { x: 10, y: 13 }] // pozitia 3
];

getDistances(points);