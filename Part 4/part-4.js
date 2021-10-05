console.log(`Primul exercitiu`);
console.log(``);

function checkLengthAndCharachters( string ) {
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    console.log(string);
    if ( string.length >= 8 && specialCharacters.test(string)) {
        console.log(`The string is good!`);
    } else {
        console.log(`The string has less than 8 characters or doesn't contain a special character!`);
    }
    console.log("");
}

checkLengthAndCharachters(`Less8$.`);
checkLengthAndCharachters(`More than 8 without special character`);
checkLengthAndCharachters(`More than 8 with special character !`);





console.log(``);
console.log(`Al 2lea exercitiu`);
console.log(``);

function checkForEmail( string ) {
    let checkEmail = /\S+@\S+\.\S+/;

    if(checkEmail.test(string)) {
        console.log(`este mail`);
    } else {
        console.log(`nu este email`);
    }
}

checkForEmail('andrei@g.hot')





console.log(``);
console.log(`Al 3lea exercitiu`);
console.log(``);

function checkUser( user ){
    // console.log(user.parola);
    let checkEmail = /\S+@\S+\.\S+/;
    console.log(`Nume: ${user.nume}, Prenume: ${user.prenume}, Email: ${user.email}`);
    if(user.nume === '' || user.prenume === '') {
        console.log(`Campul nume este gol!`);
    } else {
        console.log(`Campurile NUME si PRENUME au valori!`);
    }

    if(checkEmail.test(user.email)) {
        console.log(`User-ul are o adresa de email valida!`);
    } else {
        console.log(`User-ul NU are o adresa de email valida!`);
    }

    console.log("");
}

checkUser({nume: 'Hilary', prenume: 'Salvador', email: 'hilary@yahoo', parola: 'zE+ZuPt3c@'}); // adresa de email nu este valida
checkUser({nume: 'Lance', prenume: 'Tone', email: 'lance_tone@frontend.com', parola: 'dx}~N7:X2p'});
checkUser({nume: '', prenume: 'Pigeon', email: 'andrei@frontend.com', parola: 'V52M3x<KZ7'}); // nu are nume





console.log(``);
console.log(`Al 4lea exercitiu`);
console.log(``);

function checkEveryUser( user ){
    let checkEmail = /\S+@\S+\.\S+/;

    for(let i = 0; i < user.length; i++ ) {
        if(user[i].nume !== "" && user[i].prenume !== "" && checkEmail.test(user[i].email) && user[i].parola.length >= 8) {
            console.log(user[i].nume, user[i].prenume);
        }
    }
}

const users = [
    {nume: 'Guy', prenume: 'Response', parola: 'vr4SP"uyZw@', email: 'response@guy.com'},
    {nume: 'Sir', prenume: 'Cumference', parola: 'qwerty', email: 'sir@email.com'}, // parola nu are 8 caractere
    {nume: 'Fleece', prenume: 'Marigold ', parola: '*vsamHL5', email: 'marigold@yahoo'}, // adresa de email nu este valida
    {nume: 'Hanson', prenume: 'Deck', parola: 'vs27LD7pmHJ', email: 'hanson@gmail.com'},
    {nume: 'Will', prenume: '', parola: '8`:z%GZb-S', email: 'mondover@gmail.com'}, // nu are prenume
    {nume: '', prenume: 'Internetiquette', parola: '7vVPXU7NwEa', email: 'internetiquette@gmail.com'}, // nu are nume
    {nume: 'Bodrum', prenume: 'Mondover', parola: '7vVPXU7NwE', email: 'mondover@usa.com'},

];

checkEveryUser(users);