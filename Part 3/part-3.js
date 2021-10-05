console.log(`Primul exercitiu`);
console.log(``);


function palindrome(number) {
    let numberContainer;
    let newNumber = 0;
    let numberFromParameter = number;

    while( number > 0 ) {
        numberContainer = number % 10;
        number = parseInt(number/10);
        newNumber = newNumber * 10 + numberContainer;
    }
    numberFromParameter === newNumber ? console.log(`Numarul ${numberFromParameter} este palindrom.`) : console.log(`Numarul NU ${numberFromParameter} este palindrom.`);
}

palindrome(121);
palindrome(51);
palindrome(872);
palindrome(555);
palindrome(2002);





console.log(``);
console.log(`Al 2-lea`);
console.log(``);

function uppercaseLetter( string ) {
    const words = string.split(' ');
    let finalResult = '';

    for( let i = 0; i < words.length; i++) {
        finalResult += words[i][0].toUpperCase() + words[i].substr(1) + ' ';
    }
    console.log(`Before ${string}`);
    console.log(`After: ${finalResult}`);
}

uppercaseLetter('javascript is really fun!');





console.log(``);
console.log(`Al 3-lea`);
console.log(``);

function countTheVowels(string) {
    let counter = 0
    for (var i = 0; i < string.length; i++) {
        if( string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || string.charAt(i) === 'u' || string.charAt(i) === 'A' || string.charAt(i) === 'E' || string.charAt(i) === 'I' || string.charAt(i) === 'O' || string.charAt(i) === 'U') {
            counter++;
        }
    }
    console.log(`This string "${string}" has a number of ${counter} vowels`);
}

countTheVowels('javascript is really fun!');






console.log(``);
console.log(`Al 4-lea`);
console.log(``);

function primeNumber (number) {
    let alert = true;
    for( let i = 2; i <= number/2; i++) {
        if( number % i === 0 )  {
            alert = false;
            break;
        }
    }

    if(alert) {
        console.log(`Numarul ${number} NU este prim.`);
    } else {
        console.log(`Numarul ${number} este prim.`);
    }
}

primeNumber(7);
primeNumber(12);
primeNumber(24);
primeNumber(9);
primeNumber(11);