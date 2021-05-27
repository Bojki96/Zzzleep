//Date update everytime
function updateDate(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear()

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "daynum", "month", "year"];
        var values = [week[dname], dnum, months[mo], yr+'.'];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        
  }
//Date update everytime//
/////////////////////////
//Getting values from other Zleep_input.html
let showHourValue = document.getElementsByClassName('calculated-hours')[0].innerHTML;
let showMinuteValue = document.getElementsByClassName('calculated-minutes')[0].innerHTML; 
//Getting values from other Zleep_input.html//
/////////////////////////////
showHourValue = localStorage.getItem('Hour');
showMinuteValue = localStorage.getItem('Minute');
console.log(showHourValue);