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
function addHoursToDate(objDate, intHours) {
                var numberOfMlSeconds = objDate;
                var addMlSeconds = (intHours * 60) * 60 * 1000;
                var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
            
                return newDateObj;
            }
        
            let chosenDate = addHoursToDate(Date.now(), 0.5);
            let pluszora = chosenDate.getHours();
            let pluszperc = chosenDate.getMinutes();
            if (pluszora<10)
                {
                    
                        pluszora = "0"+pluszora;
            
                }
                if (pluszperc<10)
                    {
                        pluszperc = "0"+pluszperc;
                    }
            
             document.getElementById("addHoursToDate").innerHTML = pluszora + ":" + pluszperc 

             
             

// plusz ido
function addHoursToDate1(objDate, intHours) {
                var numberOfMlSeconds = objDate;
                var addMlSeconds = (intHours * 60) * 60 * 1000;
                var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
            
                return newDateObj;
            }
            
            
            // Alter the number of hourse here
            let chosenDate1 = addHoursToDate1(Date.now(), 0.75);
            let pluszora1 = chosenDate1.getHours();
            let pluszperc1 = chosenDate1.getMinutes();
            if (pluszora1<10)
                {
                    
                        pluszora1 = "0"+pluszora1;
            
                }
                if (pluszperc1<10)
                    {
                        pluszperc1 = "0"+pluszperc1;
                    }

             // Write chosenDate to the <body> tag
             document.getElementById("addHoursToDate1").innerHTML = pluszora1 + ":" + pluszperc1


// plusz ido
function addHoursToDate2(objDate, intHours) {
    var numberOfMlSeconds = objDate;
    var addMlSeconds = (intHours * 60) * 60 * 1000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
}


// Alter the number of hourse here
let chosenDate2 = addHoursToDate2(Date.now(), 0.81);
let pluszora2 = chosenDate2.getHours();
let pluszperc2 = chosenDate2.getMinutes();
if (pluszora2<10)
    {
        
            pluszora2 = "0"+pluszora2;

    }
    if (pluszperc2<10)
        {
            pluszperc2 = "0"+pluszperc2;
        }

 // Write chosenDate to the <body> tag
 document.getElementById("addHoursToDate2").innerHTML = pluszora2 + ":" + pluszperc2



// plusz ido
function addHoursToDate3(objDate, intHours) {
    var numberOfMlSeconds = objDate;
    var addMlSeconds = (intHours * 60) * 60 * 1000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
}


// Alter the number of hourse here
let chosenDate3 = addHoursToDate3(Date.now(), 1);
let pluszora3 = chosenDate3.getHours();
let pluszperc3 = chosenDate3.getMinutes();
if (pluszora3<10)
    {
        
            pluszora3 = "0"+pluszora3;

    }
    if (pluszperc3<10)
        {
            pluszperc3 = "0"+pluszperc3;
        }

 // Write chosenDate to the <body> tag
 document.getElementById("addHoursToDate3").innerHTML = pluszora3 + ":" + pluszperc3




// plusz ido
function addHoursToDate4(objDate, intHours) {
    var numberOfMlSeconds = objDate;
    var addMlSeconds = (intHours * 60) * 60 * 1000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
}


// Alter the number of hourse here
let chosenDate4 = addHoursToDate4(Date.now(), 1.25);
let pluszora4 = chosenDate4.getHours();
let pluszperc4 = chosenDate4.getMinutes();
if (pluszora4<10)
    {
        
            pluszora4 = "0"+pluszora4;

    }
    if (pluszperc4<10)
        {
            pluszperc4 = "0"+pluszperc4;
        }

 // Write chosenDate to the <body> tag
 document.getElementById("addHoursToDate4").innerHTML = pluszora4 + ":" + pluszperc4


// plusz ido
function addHoursToDate5(objDate, intHours) {
    var numberOfMlSeconds = objDate;
    var addMlSeconds = (intHours * 60) * 60 * 1000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
}


// Alter the number of hourse here
let chosenDate5 = addHoursToDate5(Date.now(), 0.12);
let pluszora5 = chosenDate5.getHours();
let pluszperc5 = chosenDate5.getMinutes();
if (pluszora5<10)
    {
        
            pluszora5 = "0"+pluszora5;

    }
    if (pluszperc5<10)
        {
            pluszperc5 = "0"+pluszperc5;
        }

 // Write chosenDate to the <body> tag
 document.getElementById("addHoursToDate5").innerHTML = pluszora5 + ":" + pluszperc5

// plusz ido
function addHoursToDate6(objDate, intHours) {
    var numberOfMlSeconds = objDate;
    var addMlSeconds = (intHours * 60) * 60 * 1000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
}


// Alter the number of hourse here
let chosenDate6 = addHoursToDate6(Date.now(), 0.19);
let pluszora6 = chosenDate6.getHours();
let pluszperc6 = chosenDate6.getMinutes();
if (pluszora6<10)
    {
        
            pluszora6 = "0"+pluszora6;

    }
    if (pluszperc6<10)
        {
            pluszperc6 = "0"+pluszperc6;
        }

 // Write chosenDate to the <body> tag
 document.getElementById("addHoursToDate6").innerHTML = pluszora6 + ":" + pluszperc6



    }
setInterval(ido,100);
setInterval(addHoursToDate,100);
setInterval(addHoursToDate1,100);
setInterval(addHoursToDate2,100);
    

