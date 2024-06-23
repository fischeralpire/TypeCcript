function bla(x: number) {
    let blubu: number = 1
    x = 2
    x = blubu + x
    return x
}

/*
    function flaeche(laenge: number, breite: number): number {
        return laenge * breite;
    } 
*/

function flaeche(laenge: number, breite: number) {
    let flaeche: number = laenge * breite; 
    return flaeche;
}

function kreisUmfang(radius: number): number {
    let umfang: number = 2 * radius * Math.PI;
    return umfang;
}

function kreisFlaeche(radius: number): number {
    let flaeche: number = radius * radius * Math.PI;
    return flaeche;
}

function quaderVolumen(a: number, b: number, h: number): number {
    return a * b * h;
}

function zylinderVolumen(radius: number, h: number): number {
    return  Math.PI * (radius * radius) * h;
}

function kugelVolumen(radius: number): number {
    return 4/3 * (radius * radius* radius) *  Math.PI;
}

function sucheFreddos(verloren: String[]): number {
    for (let i = 0; i <= verloren.length; i++) {
        if (verloren[i] == "Freddos") {
            return i+1;
        }
    }
}


/*****************************************************************************/


console.log("*************SUMME:*************")
var result = bla(34)
console.log("Summe:" + " " + result + "\n")


console.log("*************RECHTECK:*************")
console.log("Rechteck:" + " " + flaeche(2,5) + "\n")


console.log("*************Kreis:*************")
console.log("Kreis Umfang:" + " " + kreisUmfang(12) + "\n")
console.log("Kreis Fläche:" + " " + kreisFlaeche(12) + "\n")


console.log("*************VOLUMEN:*************")
console.log("Quader Volumen" + " " + quaderVolumen(1, 1, 1) + "\n")
console.log("Zylinder Volum" + " " + zylinderVolumen(1, 1) + "\n")
console.log("Kugel Volum" + " " + kugelVolumen(1)+ "\n")


console.log("*************FINDE-FREDDOS:*************")
let array: String[] = ["0", "0", "0", "Freddos", "0", "0"];
console.log("Freddos ist an der" + " " + sucheFreddos(array) + "." + " " + "Stelle da!" + "\n")
