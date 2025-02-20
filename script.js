// Bal felső sarokban valós idő megjelenítése
function ido()
{ 
    let datum = new Date();
    let masodperc = datum.getSeconds();
    let perc = datum.getMinutes();
    let ora = datum.getHours();
    
    if (ora<10)
        {
        
            ora = "0"+ora;

        }
    if (perc<10)
        {
            perc = "0"+perc;
        }
    if (masodperc<10)
        {
            masodperc = "0"+masodperc;

        }
            document.getElementById("ido").innerHTML = ora + ":" + perc + ":" + masodperc


// plusz ido
function idoHozzaadas(objDatum, alapOra) {
    var idoSzamlalas = objDatum;
    var hozzaadottMasodperc = (alapOra * 60) * 60 * 1000;
    var datumObjektum = new Date(idoSzamlalas + hozzaadottMasodperc);
            
    return datumObjektum;
            }
        
    let kivalasztottIdo = idoHozzaadas(Date.now(), 0.5);
    let pluszora = kivalasztottIdo.getHours();
    let pluszperc = kivalasztottIdo.getMinutes();
        if (pluszora<10)
            {
                    
                pluszora = "0"+pluszora;
            
            }
        if (pluszperc<10)
            {
                pluszperc = "0"+pluszperc;
            }
            
document.getElementById("idoHozzaadas").innerHTML = pluszora + ":" + pluszperc 

             
             

// plusz ido 1
function idoHozzaadas1(objDatum, alapOra) {
    var idoSzamlalas = objDatum;
    var hozzaadottMasodperc = (alapOra * 60) * 60 * 1000;
    var datumObjektum = new Date(idoSzamlalas + hozzaadottMasodperc);
            
    return datumObjektum;
}
            
            
            // Idő hozzáadáshoz itt változtatjuk a számot
    let kivalasztottIdo1 = idoHozzaadas1(Date.now(), 0.75);
    let pluszora1 = kivalasztottIdo1.getHours();
    let pluszperc1 = kivalasztottIdo1.getMinutes();
        if (pluszora1<10)
            {
                    
                pluszora1 = "0"+pluszora1;
            
            }
        if (pluszperc1<10)
            {
                pluszperc1 = "0"+pluszperc1;
            }

             // Dokumentum "id" tag-be hozzáadás
document.getElementById("idoHozzaadas1").innerHTML = pluszora1 + ":" + pluszperc1


// plusz ido 2
function idoHozzaadas2(objDatum, alapOra) {
    var idoSzamlalas = objDatum;
    var hozzaadottMasodperc = (alapOra * 60) * 60 * 1000;
    var datumObjektum = new Date(idoSzamlalas + hozzaadottMasodperc);

    return datumObjektum;
}


// Idő hozzáadáshoz itt változtatjuk a számot
let kivalasztottIdo2 = idoHozzaadas2(Date.now(), 0.81);
let pluszora2 = kivalasztottIdo2.getHours();
let pluszperc2 = kivalasztottIdo2.getMinutes();
if (pluszora2<10)
    {
        
            pluszora2 = "0"+pluszora2;

    }
    if (pluszperc2<10)
        {
            pluszperc2 = "0"+pluszperc2;
        }

 // Dokumentum "id" tag-be hozzáadás
 document.getElementById("idoHozzaadas2").innerHTML = pluszora2 + ":" + pluszperc2



// plusz ido 3
function idoHozzaadas3(objDatum, alapOra) {
    var idoSzamlalas = objDatum;
    var hozzaadottMasodperc = (alapOra * 60) * 60 * 1000;
    var datumObjektum = new Date(idoSzamlalas + hozzaadottMasodperc);

    return datumObjektum;
}


// Idő hozzáadáshoz itt változtatjuk a számot
let kivalasztottIdo3 = idoHozzaadas3(Date.now(), 1);
let pluszora3 = kivalasztottIdo3.getHours();
let pluszperc3 = kivalasztottIdo3.getMinutes();
if (pluszora3<10)
    {
        
            pluszora3 = "0"+pluszora3;

    }
    if (pluszperc3<10)
        {
            pluszperc3 = "0"+pluszperc3;
        }

 // Dokumentum "id" tag-be hozzáadás
 document.getElementById("idoHozzaadas3").innerHTML = pluszora3 + ":" + pluszperc3




// plusz ido 4
function idoHozzaadas4(objDatum, alapOra) {
    var idoSzamlalas = objDatum;
    var hozzaadottMasodperc = (alapOra * 60) * 60 * 1000;
    var datumObjektum = new Date(idoSzamlalas + hozzaadottMasodperc);

    return datumObjektum;
}


// Idő hozzáadáshoz itt változtatjuk a számot
let kivalasztottIdo4 = idoHozzaadas4(Date.now(), 1.25);
let pluszora4 = kivalasztottIdo4.getHours();
let pluszperc4 = kivalasztottIdo4.getMinutes();
if (pluszora4<10)
    {
        
            pluszora4 = "0"+pluszora4;

    }
    if (pluszperc4<10)
        {
            pluszperc4 = "0"+pluszperc4;
        }

 // Dokumentum "id" tag-be hozzáadás
 document.getElementById("idoHozzaadas4").innerHTML = pluszora4 + ":" + pluszperc4


// plusz ido 5
function idoHozzaadas5(objDatum, alapOra) {
    var idoSzamlalas = objDatum;
    var hozzaadottMasodperc = (alapOra * 60) * 60 * 1000;
    var datumObjektum = new Date(idoSzamlalas + hozzaadottMasodperc);

    return datumObjektum;
}


// Idő hozzáadáshoz itt változtatjuk a számot
let kivalasztottIdo5 = idoHozzaadas5(Date.now(), 0.12);
let pluszora5 = kivalasztottIdo5.getHours();
let pluszperc5 = kivalasztottIdo5.getMinutes();
if (pluszora5<10)
    {
        
            pluszora5 = "0"+pluszora5;

    }
    if (pluszperc5<10)
        {
            pluszperc5 = "0"+pluszperc5;
        }

 // Dokumentum "id" tag-be hozzáadás
 document.getElementById("idoHozzaadas5").innerHTML = pluszora5 + ":" + pluszperc5

// plusz ido 6 .. keses
function idoHozzaadas6(objDatum, alapOra) {
    var idoSzamlalas = objDatum;
    var hozzaadottMasodperc = (alapOra * 60) * 60 * 1000;
    var datumObjektum = new Date(idoSzamlalas + hozzaadottMasodperc);

    return datumObjektum;
}


// Idő hozzáadáshoz itt változtatjuk a számot
let kivalasztottIdo6 = idoHozzaadas6(Date.now(), 0.32);
let pluszora6 = kivalasztottIdo6.getHours();
let pluszperc6 = kivalasztottIdo6.getMinutes();
if (pluszora6<10)
    {
        
            pluszora6 = "0"+pluszora6;

    }
    if (pluszperc6<10)
        {
            pluszperc6 = "0"+pluszperc6;
        }

 // Dokumentum "id" tag-be hozzáadás
 document.getElementById("idoHozzaadas6").innerHTML = pluszora6 + ":" + pluszperc6



    }



setInterval(ido,100);
setInterval(idoHozzaadas,100);
setInterval(idoHozzaadas1,100);
setInterval(idoHozzaadas2,100);
setInterval(idoHozzaadas3,100);
setInterval(idoHozzaadas4,100);
setInterval(idoHozzaadas5,100);
setInterval(idoHozzaadas6,100);

