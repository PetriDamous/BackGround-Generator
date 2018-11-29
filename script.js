var _ = require('lodash');

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let gradient = document.getElementById('gradient');
let button = document.querySelector('button');
let current_color = document.querySelector('h3');

const change_color = () => {        
   let color = gradient.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;   
   current_color.innerText = `${color};`;    
}

Array.prototype.shuffle = function(){        
    for(i = this.length-1; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        let temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this; 
}

const random_color = () => {
    let hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let newHex = [];
    let newHex2 = [];
    
    for(let i = 0; i < 6; i++){
        hex.shuffle();    
        newHex.push(hex[i]);
        newHex2.push(hex[i+3]);  
        
    }       
    color1.value = "#" + newHex.join('');
    color2.value = "#" + newHex2.join('');    
    change_color();    
}

color1.addEventListener("input", change_color);

color2.addEventListener("input", change_color);

button.addEventListener("click", random_color);

random_color();

//Note: es6 functions must be defined first before called on similar to Ruby
//Note: es5 functions can be called anywhere

