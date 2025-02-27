// plusz ido 7
function idoHozzaadas7(objDatum, alapOra) {
    var idoSzamlalas = objDatum;
    var hozzaadottMasodperc = (alapOra * 60) * 60 * 1000;
    var datumObjektum = new Date(idoSzamlalas + hozzaadottMasodperc);

    return datumObjektum;
}


// Idő hozzáadáshoz itt változtatjuk a számot
let kivalasztottIdo7 = idoHozzaadas7(Date.now(), 0.12);
let pluszora7 = kivalasztottIdo7.getHours();
let pluszperc7 = kivalasztottIdo7.getMinutes();
if (pluszora7<10)
    {
        
            pluszora7 = "0"+pluszora7;

    }
    if (pluszperc7<10)
        {
            pluszperc7 = "0"+pluszperc7;
        }

 // Dokumentum "id" tag-be hozzáadás
 document.getElementById("idoHozzaadas7").innerHTML = pluszora7 + ":" + pluszperc7
