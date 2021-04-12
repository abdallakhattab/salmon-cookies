'use strict'

function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = document.getElementById ('cont')
 
let hours = ['6', '7', '8', '9','10', '11', '12', '13','14' ,'15', '16' , '17 ' , '18' , '19']
let seattle = {
location : seattle ,
  min : 23 ,
max : 65 , 
avg : 6.3 , 
custumernu :[],
cookieseveryhour : [] ,
total : 0 ,
randomnum : function(){

for (let i = 0 ; i < hours.length ; i++){

this.custumernu.push
(randomValue(this.min , this.max))


}

},

cookiesperhour : function(){

    for(let i = 0 ; i < hours.length ; i++)
    let val = 0 
val = math.ceil(this.randomnum[i] * this.avg);
this.total =this.total + val ;
this.cookieseveryhour.push(val); 
},
 render: function(){

let h2 = document.createElement('h2');
a.appendChild(h2);
h2.textContent = this.location;

let list =document.createElement('ul');

a.appendChild(list);

let li = null ;

for ( let i = 0 ; i < this.cookieseveryhour.length ; i++){

li = document.createElement('li');
list.appendChild(li) ;
li.textContent = this.cookieseveryhour[i];
let totalnu = document.createElement('li');
list.appendChild(totalnu)
totalnu.textContent(this.total)



}

}

}
seattle.randomnum();
console.log(seattle);
seattle.cookiesperhour() ; 
seattle.render();