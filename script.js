//Manipulera dom

var body = document.querySelector("body");

//Vi skapa en <div> med en <p> med ditt namn i din <body>
var div = document.createElement("div");
var paragraph = document.createElement("p");
var namn = document.createTextNode("Edi Sogorovic");

paragraph.appendChild(namn);
div.appendChild(paragraph);
body.appendChild(div);

//Skapa en array som innehåller 4 saker du är bra på. Skriv ut denna array till en ny <div> under den tidigare. 
var div2 = document.createElement("div");
var array = ['Padel','Lyssna','Äta','Sova'];
arrailangd = array.length;
var listaUL = document.createElement("ul");

for (i = 0; i < arrailangd; i++) {
    var listaLI = document.createElement("li");
    listaLI.innerHTML = array[i];
    listaUL.appendChild(listaLI);
}
    div2.appendChild(listaUL);
    body.appendChild(div2);