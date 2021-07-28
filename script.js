let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let actualHour = new Date();
    let hour = actualHour.getHours();
    let minute = actualHour.getMinutes();
    let second = actualHour.getSeconds();

    digitalElement.innerHTML = `${fix(hour)}:${fix(minute)}:${fix(second)}`;

    let sDeg = ((360/60) * second) - 90;
    let mDeg = ((360/60) * minute) - 90;
    let hDeg = ((360/12) * hour) - 90;


    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fix(time) {
    if(time < 10){
        return '0'+time;
    } else {
        return time;
    }
}

setInterval(updateClock, 1000);
updateClock(); /*isso foi feito pra corrigir o erro de 
                demorar 1 segundo para aparecer a hora*/