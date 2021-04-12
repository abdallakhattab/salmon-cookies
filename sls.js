'use strict'

function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let contaner = document.getElementById ('cont')
 
let hours = ['6am ', '7am', '8am', '9am','10am', '11am', '12pm', '1 pm','2pm' ,'3pm', '4pm' , '5pm ' , '6pm' , '7pm']
let seattle = {
location : 'seattle' ,
min : 23 ,
max : 65 , 
avg : 6.3 , 
custumernu :[],
cookieseveryhour : [] ,
total : 0 ,
randomnum : function(){

for (let i = 0 ; i < hours.length ; i++){

this.custumernu.push(Math.floor(randomValue(this.min , this.max)));
}
console.log(this.custumernu);
}   

,

cookiesperhour : function(){

    for(let i = 0 ; i < hours.length ; i++){
    let val = 0 ;
val = Math.floor(this.custumernu[i] * this.avg);
this.total =this.total + val ;
this.cookieseveryhour.push(val);}

console.log(this.cookieseveryhour); 

},
 render: function(){

let h2 = document.createElement('h2');
contaner.appendChild(h2);
h2.textContent = this.location;

let list =document.createElement('ul');

contaner.appendChild(list);

let li = null ;

for ( let i = 0 ; i < this.cookieseveryhour.length ; i++){

li = document.createElement('li');
list.appendChild(li) ;
li.textContent = `${hours[i]} : ${this.cookieseveryhour[i]} cookies `




}
let totalnu = document.createElement('li');
list.appendChild(totalnu)
totalnu.textContent = `the total is ${this.total} `
}

}
seattle.randomnum();
console.log(seattle);
seattle.cookiesperhour() ; 
seattle.render();


