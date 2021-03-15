/*Mijn oplossing*/
/*let vraag = prompt("Geef me een random getal tussen 1 en 5 ");
let x = Math.floor((Math.random() * 5) +1);
console.log("het random getal dat u gaf was", x);


/*Oplissing prof*/
let getal;
do {
    getal = prompt('Geef een getal in');
    getal = parseInt(getal); // optioneel
} while (getal < 0 || getal > 5);
console.log(getal)