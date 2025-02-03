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

}
setInterval(ido,100);
setInterval(addHoursToDate,100);
    

