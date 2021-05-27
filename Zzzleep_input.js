//adding another sleep cycle
let add = document.getElementById('plus');

add.addEventListener("click", e => {
e.preventDefault();
var newOne = document.createElement('div'); 
newOne.setAttribute('class', 'whole');
newOne.innerHTML = `<div id = "container">
<div class = "lines"></div>
<form id = "form">
    <input id="from" type="time">
    <input id="til" type="time">
</form>
<div class ="time-text">
    <div class = "from-text">Fallen asleep</div>
    <div class = "til-text">Woken up</div>
</div>
<div id = "cancel" onclick = "remove(this.parentElement.parentElement)">
<i class="fas fa-times"></i>
</div>
</div>
<p id = "before-bed">What did you take before bed?</p>
<div class = "all-inputs">
<ol id = "inputs">
    <li><input class="improvements" id = "first" type="text" placeholder="Coffee"></li>
    <li><input class="improvements" id = "second" type="text"></li>
    <li><input class="improvements" id = "third" type="text"></li>
    <li><input class="improvements" id = "third" type="text"></li>
</ol>
<textarea class="notes" name="paragraph_text" placeholder="Dreams, notes"></textarea>
</div>
<hr>`;
document.body.appendChild(newOne);
});
//adding another sleep cycle//
/////////////////////////////
//removing added sleep cycle
var remove = (parent) => {
    parent.remove();
};
//removing added sleep cycle//
/////////////////////////////////////7
//get values from time input
showTimeValueFrom = () => {
    let fallAsleepValues = document.getElementById('from').value;
    let hour = fallAsleepValues.split(":").shift();
    var hrsFrom = parseInt(hour);
    //console.log(hrsFrom);
    let minute = fallAsleepValues.split(":").pop();
    var minFrom = parseInt(minute);
    //console.log(minFrom);
    return [hrsFrom, minFrom];
    }

var timeFrom = showTimeValueFrom();

showTimeValueTil = () => {
    let wakeUpValues = document.getElementById('til').value;
    let hour = wakeUpValues.split(":").shift();
    var hrsTil = parseInt(hour);
        //console.log(hrsTil);
    let minute = wakeUpValues.split(":").pop();
    var minTil = parseInt(minute);
        //console.log(minTil);
        return [hrsTil, minTil];
        }

var timeTil = showTimeValueTil();
//get values from time input//
///////////////////////////////////////////////////////
//calculate the hours slept
var hourSlept;
var minSlept;
var hrsFrom = timeFrom.shift();
var hrsTil = timeTil.shift();
var minFrom = timeFrom.pop();
var minTil = timeTil.pop();
//if someone slept more than 24 hours
function overSlept() {
    var tooMuch = prompt("Have you slept more than 23 hours:", "'yes' or 'no'");
     if (tooMuch == "yes") {
      if(hrsFrom > hrsTil){
      hrsTil = 24 + hrsTil;
      }
      hourSlept = 23 + Math.abs(hrsFrom - hrsTil);
      minSlept = 60 - (minFrom - minTil);
    }
    else if(tooMuch == "no"){
    alert("You set wrong time inputs");
    hourSlept = "/";
    minSlept = "/";
    }
    else{
    alert("Please write exactly 'yes' or 'no'");
    overSlept();
    }
  }
//if someone slept more than 24 hours

calculateHours = () => {
    if(hrsFrom > hrsTil){
        hourSlept = 24 - hrsFrom + hrsTil;
            if(minFrom > minTil){
                minSlept = 60 - minFrom + minTil;
                hourSlept = 24 - hrsFrom + hrsTil - 1;
            }
            else if(minFrom < minTil){
                minSlept = minTil - minFrom;
            }
            else{
                minSlept = 0;
            }
        }
        else if(hrsFrom < hrsTil){
        hourSlept = hrsTil - hrsFrom;
            if(minFrom > minTil){
                minSlept = 60 - minFrom + minTil;
                hourSlept = hrsTil - hrsFrom - 1;
            }
            else if(minFrom < minTil){
                minSlept = minTil - minFrom;
            }
            else{
                minSlept = 0;
            }
        }
        else{
            hourSlept = 0;
            minSlept = minTil - minFrom;
            if(minTil < minFrom){
            overSlept();
            }
        }
        return [hourSlept, minSlept];
    
};

console.log(calculateHours());

let saveReturn = document.getElementById('before-bed');
saveReturn.addEventListener('click', e =>{
    e.preventDefault;
    calculateHours();
    hourSlept = calculateHours().shift();
    minSlept = calculateHours().pop();
    let x = document.getElementsByClassName('from-text')[0].innerHTML = hourSlept;
    let y = document.getElementsByClassName('til-text')[0].innerHTML = minSlept;
});
//local storage
/*let passHour = calculateHours().shift();
let passMinute = calculateHours().pop();
let saveReturn = document.getElementById('return');
function saveValues(){
    localStorage.setItem('Hour', passHour);
    localStorage.setItem('Minute', passMinute);
};*/



