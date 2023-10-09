const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let vairabile = "Bob";
let eta = 25;
let eta1 = 26;
let varBoll = true;
let vettore = [2, 3, 5, "pippo", true];

let confronto = (eta === eta1);
//alert(confronto);


// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("Yay, I love chocolate ice cream!");
// } else {
//     alert("Awwww, but chocolate is my favorite…");
// }

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
let ris = multiply(3, 5);
//alert(ris);

document.querySelector("img").addEventListener("click", function () {
    alert("Plz, dont touch me");
});

let mioBottone = document.querySelector("button");

if (!localStorage.getItem("name")) {
    setUseName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Il tuo nome è: ${storedName}`;
}

function setUseName() {
    const nome = prompt("Inserisci l'username");
    localStorage.setItem("name", nome);
    myHeading.textContent = `Il tuo nome è: ${nome}`;
}

mioBottone.onclick = () => {
    setUseName();
}
