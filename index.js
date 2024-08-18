let iconSetting = document.querySelector('#icon');
let contentSetting = document.querySelector('.content');
let initialEl = document.querySelector('.initial')
let afterEl = document.querySelector('.after')
let btn = document.querySelector('button')
let inputEl = document.querySelector('.date');
let yearEl = document.querySelector('.year')
let monthEl = document.querySelector('.month')
let dayEl = document.querySelector('.day')
let hourEl = document.querySelector('.hour')
let minuteEl = document.querySelector('.minute')
let secondEl = document.querySelector('.second')


const twoDigit = (num) =>{
    return num > 9 ? num : `0${num}`;
}

let dateOfBirth;

let openDob = false;

function open(){
    if(openDob){
        contentSetting.classList.add('hide')
    }else{
        contentSetting.classList.remove('hide');
    }
    openDob  =   !openDob;
};



function setDob(){
     let dateStr = inputEl.value;
     dateOfBirth = dateStr ? new Date(dateStr) : null;
    
    if(dateOfBirth){
        initialEl.classList.add('hide');
        afterEl.classList.remove('hide')
        setInterval(() => updateAge(),1000)
    }else{
        initialEl.classList.remove('hide');
        afterEl.classList.add('hide')
    }
}
setDob();

iconSetting.addEventListener('click', open);
btn.addEventListener('click',setDob);




function updateAge(){
    let currentDate = new Date();
    let dateDiff = currentDate - dateOfBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60))% 24;
    const minute = Math.floor(dateDiff / (1000 * 60))% 60;
    const second = Math.floor(dateDiff / (1000))% 60;

    yearEl.innerHTML = twoDigit(year);
    monthEl.innerHTML = twoDigit(month);
    dayEl.innerHTML = twoDigit(day);
    hourEl.innerHTML = twoDigit(hour);
    minuteEl.innerHTML = twoDigit(minute);
    secondEl.innerHTML = twoDigit(second);
}
