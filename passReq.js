const myInput = document.getElementById('psw')
const letter = document.getElementById('letter');
const  capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');

myInput.onfocus = function(){
    document.getElementById('message').style.display = 'block'
}
myInput.onblur = function(){
    document.getElementById('message').style.display = 'none'
}

myInput.onkeyup = function(){
    let lowerCaseLetters = [a-z]/g;
    if(myInput.ariaValueMax.match(lowerCaseLetters)){
        letter.classList.remove('invalid')
        letter.classList.add('valid')
    }
    else{
        letter.classList.remove('vaild')
        letter.classList.add('invalid')
    }
}
