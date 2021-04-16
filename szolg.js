var feliratkoztak = [];
var valtottak = [];
function Feliratkozott(nev, dij, tel, upc, digi, invitel, valtott, szolg) {
    this.nev = nev;
    this.dij = dij;
    this.tel = tel;
    this.upc = upc;
    this.digi = digi;
    this.invitel = invitel;
    this.valtott = valtott;
    this.szolg = szolg;
    
    if(this.tel){
        this.szolg = "Magyar Telekom";
    }
    if(this.upc){
        this.szolg = "UPC - Vodafone";
    }
    if(this.digi){
        this.szolg = "Digi";
    }
    if(this.invitel){
        this.szolg = "Invitel";
    }

}


function felvesz() {
    var nev = document.getElementById("nev").value;
    var dij = document.getElementById("dij").value;
    var szolg = document.getElementById("szolg");
    var tel = document.getElementById("tel").checked;
    var upc = document.getElementById("upc").checked;
    var digi = document.getElementById("digi").checked;
    var invitel = document.getElementById("invitel").checked;
    var valtott = document.getElementById("valtott").checked;
    var hiba = document.getElementById("hiba");
    var jo = true;


    if (nev == "" || dij == "") {
        jo = false;
        hiba.innerHTML = "*** Nem töltötted ki a nevet vagy a havi díjjat! ***"
    }




    if (!valtott && jo) {
        var feliratkozott = new Feliratkozott(nev, dij, tel, upc, digi, invitel, szolg);
        feliratkoztak.push(feliratkozott);
        kiir();
    }

    if (valtott && jo) {
        var feliratkozott = new Feliratkozott(nev, dij, tel, upc, digi, invitel, szolg);
        valtottak.push(feliratkozott);
        elkiir();

    }
}
function kiir() {
    var ki = document.getElementById("ki");
    ki.innerHTML = "";

    var tablazat = document.createElement("table")
    for (let i = 0; i < feliratkoztak.length; i++) {
        var feliratkozott = feliratkoztak[i];
        var sor = document.createElement("tr")
        var cella = document.createElement("td")
        cella.innerHTML = feliratkozott.nev + " - ";
        sor.appendChild(cella);
        var cella = document.createElement("td")
        cella.innerHTML = feliratkozott.dij + " Ft a havidíj - a  ";
        sor.appendChild(cella);
        var cella = document.createElement("td")
        cella.innerHTML = feliratkozott.szolg + " a szolgáltatója.";
        sor.appendChild(cella);
        sor.onclick = function () { atrak(i) };
        tablazat.appendChild(sor);
    }

    ki.appendChild(tablazat);
}
function atrak(id) {
    feliratkozott = feliratkoztak[id];
    valtottak.push(feliratkozott);
    feliratkoztak.splice(id, 1);
    kiir();
    elkiir();
}

function valtott(id) {
    feliratkozott = feliratkoztak[id];
    if (valtott.checked) {
        elkiir();
    }

}
function elkiir() {
    var be = document.getElementById("be")
    be.innerHTML = "";
    var tablazat = document.createElement("table");
    for (let i = 0; i < valtottak.length; i++) {
        var feliratkozott = valtottak[i];
        var sor = document.createElement("tr")
        var cella = document.createElement("td")
        cella.innerHTML = feliratkozott.nev + " / ";
        sor.appendChild(cella);
        var cella = document.createElement("td")
        cella.innerHTML = feliratkozott.dij + " Ft / ";
        sor.appendChild(cella);
        var cella = document.createElement("td")
        cella.innerHTML = feliratkozott.szolg + " a szolgáltatója.";
        sor.appendChild(cella);
        tablazat.appendChild(sor);

    }
    be.appendChild(tablazat);
}


