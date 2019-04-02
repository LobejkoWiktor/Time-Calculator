
var hours = 0;
var minutes = 0;
var numberOfInputs = 31;
var error = 0;

function onbClick() {
    hours = 0;
    minutes = 0;
    error = 0;
    for(let i = 1; i <= numberOfInputs; i++) {
        var j = i;
        let hour1 = document.getElementById("hours" + i).value;
        let min1 = document.getElementById("minutes" + i).value;
        let hour2 = document.getElementById("hours" + i + "-" + i).value;
        let min2 = document.getElementById("minutes" + i + "-" + i).value;
        if(hour1 === "" || hour2 === "" || min1 === "" || min2 === "")
        {
            if(hour1 === "" && hour2 === "" && min1 === "" && min2 === "") {
                continue;
            }
            
            error = 1;
            break;
        } else {
            hour1 = Number(hour1);
            min1 = Number(min1);
            hour2 = Number(hour2);
            min2 = Number(min2);
        }

            if(hour1 == 00 || hour1 == 0) {
                hour1 = 24;
            }
            if(hour2 == 00 || hour2 == 0) {
                hour2 = 24;
            }
            if(hour2 > hour1) {
                if(min2 > min1) {
                    let tempHour = hour2 - hour1;
                    let tempMin = min2 - min1;
                    hours += tempHour;
                    minutes += tempMin;
                } else {
                    let tempHour = hour2 - hour1 - 1;
                    let tempMin = 60 - min1 + min2;
                    hours += tempHour;
                    minutes += tempMin;
                }
            } else {
                if(min2 > min1) {
                    let tempHour = 24 - hour1 + hour2;
                    let tempMin = min2 - min1;
                    hours += tempHour;
                    minutes += tempMin;
                } else {
                    let tempHour = 24 - hour1 + hour2 - 1;
                    let tempMin = 60 - min1 + min2;
                    hours += tempHour;
                    minutes += tempMin;
                }
            }
            
        }
        
   // } 

    if(error == 0) {
        let restMinutes = minutes % 60;
        let minutesToCalculate = minutes - restMinutes;
        let restHours = minutesToCalculate / 60;
        let finalHours = hours + restHours;

        document.getElementById("result").innerHTML = finalHours + " hours " 
        + restMinutes + " minutes";
    } else if (error == 1) {
        document.getElementById("result").innerHTML = "Check Input"
    } else if (error == 2) {
        document.getElementById("result").innerHTML = "error"
    }

}
