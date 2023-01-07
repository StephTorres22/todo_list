/* THANKS KYLE @ WEBDEVSIMPLIFIED */

setInterval(setClock, 1000)
/* calls setClock every 1000miliseconds */

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){


    const currentDate = new Date();
    /* gives us current date, i.e today */

    const secondsRatio = currentDate.getSeconds() / 60
    /* lets us know how far to rotate the seconds hand */

    const minutesRation = (secondsRatio + currentDate.getMinutes()) / 60
    /* using the secondsRatio to help set the incrementations of minutes so they're not the same */

    const hoursRatio = (minutesRation + currentDate.getHours()) / 12
    /* over 12 as there are 12 hours */

    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRation);
    setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock();