var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var dot = document.getElementById('dot');
var date = document.getElementById('date');
var month = document.getElementById('month');
var year = document.getElementById('year');
var day = document.getElementById('day');
var typeClock = document.getElementById('typeClock');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var alarm = false;
var ampm = false;;


var t = new Date();


if (ampm)
if (t.getHours() >= 12){
    hour.innerHTML = t.getHours() - 12;
    typeClock.innerHTML = "PM";
} else {
    hour.innerHTML =  t.getHours();
    typeClock.innerHTML = "AM";

}
else 
hour.innerHTML = t.getHours();

if (t.getMinutes() < 10) {
    min.innerHTML = '0' + t.getMinutes();
} else {
    min.innerHTML = t.getMinutes();
}

if (t.getSeconds() < 10) {
    sec.innerHTML = '0' + t.getSeconds();
} else {
    sec.innerHTML = t.getSeconds();
}

month.innerHTML = months[t.getMonth()];

if (t.getDate() < 10) {
    date.innerHTML = '0' + t.getDate();
} else {
    date.innerHTML = t.getDate();
}

year.innerHTML = t.getFullYear();
day.innerHTML = days[t.getDay()];
    
    






    setInterval(function() {

        t = new Date();

        if (ampm)
            if (t.getHours() >= 12){
                hour.innerHTML = t.getHours() - 12;
                typeClock.innerHTML = "PM";
            } else {
                hour.innerHTML =  t.getHours();
                typeClock.innerHTML = "AM";

            }
        else 
            hour.innerHTML = t.getHours();

        if (t.getMinutes() < 10) {
            min.innerHTML = '0' + t.getMinutes();
        } else {
            min.innerHTML = t.getMinutes();
        }

        if (t.getSeconds() < 10) {
            sec.innerHTML = '0' + t.getSeconds();
        } else {
            sec.innerHTML = t.getSeconds();
        }

        month.innerHTML = months[t.getMonth()];
        
        if (t.getDate() < 10) {
            date.innerHTML = '0' + t.getDate();
        } else {
            date.innerHTML = t.getDate();
        }

        year.innerHTML = t.getFullYear();
        day.innerHTML = days[t.getDay()];


        if (alarm) {
            if (hour.innerText == alarmHour.innerText && min.innerText == alarmMinute.innerText) {
               var j=  alarmAlert;
               j();
            }
        }
    
    }, 10);


    function alarmAlert(){
        var music = document.getElementById('alarmSound');
        music.play();
        console.log('I am working')
        setTimeout(function(){
            music.pause();
            alarm = false;
        }, 30000)
    }


    typeClock.addEventListener("click", function() {
        if (!ampm) {
            this.style.color = "rgb(43, 71, 55)";
            this.innerHTML = t.getHours() >= 12 ? 'PM':'AM';
            ampm = true;

            hour.innerHTML = t.getHours() > 12 ? t.getHours() - 12 : t.getHours();

        } else {
            this.style.color = "rgb(22, 31, 26)";
            this.innerHTML = 'AM/PM';
            ampm = false;
            hour.innerHTML = t.getHours();
        }
    });




    function setAlarm(n) {
        var h = document.getElementById('aHour');
        var m = document.getElementById('aMinute');
         alarmHour = document.getElementById('alarmHour');
         alarmMinute = document.getElementById('alarmMinute');

        alarmWin = document.getElementById('getAlarm');
        switch(n){
            case 'ok': alarm = true;
                       
                        alarmHour.innerText = h.value;
                       
                        if (m.value < 10) {
                            alarmMinute.innerText = '0' + m.value;
                        } else {
                            alarmMinute.innerText = m.value;
                        }
                        
                        alarmWin.style.display = 'none';
                break;
            case 'cancel': alarm = false;
                            alarmWin.style.display = 'none';
                break;
            case 'view': h.value =  hour.innerText; 
                        m.value = 1 + parseInt(min.innerText); 

                        alarmWin.style.display = 'flex';
                break;
            case 'close': alarmWin.style.display = 'none';
                break;
        }
    }