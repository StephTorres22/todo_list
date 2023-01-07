/* THANKS KYLE @ WEBDEVSIMPLIFIED */


/* calls setClock every 1000miliseconds */

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

const numberDivs = document.querySelectorAll('.number');


export function setClock(){


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

    highLightCurrentHour()
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}

function highLightCurrentHour(){

   
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const hours = Array.from(numberDivs);
    
    let highlightColor = 'rgb(225, 230, 0)'
    /* not sure how to pull variable from css, that would be good. */

    hours.forEach((hour, index) => {
        if(hours.indexOf(hour) == currentHour){
            hours[index-1].firstChild.nextSibling.style.borderTopColor = highlightColor;
        }
    })
}

