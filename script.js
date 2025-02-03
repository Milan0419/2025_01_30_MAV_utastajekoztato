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

            function addHoursToDate(objDate, intHours) {
                var numberOfMlSeconds = objDate;
                var addMlSeconds = (intHours * 60) * 60 * 1000;
                var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
            
                return newDateObj;
            }
            
            // Alter the number of hourse here
            let chosenDate = addHoursToDate(Date.now(), 0.5);
            let pluszora = chosenDate.getHours();
            let pluszperc = chosenDate.getMinutes();
            
             // Write chosenDate to the <body> tag
             document.getElementById("addHoursToDate").innerHTML = pluszora + ":" + pluszperc

}
setInterval(ido,100);
