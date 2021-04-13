'use strict';
let totalarray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let arrayOfObjects = [];


function calculateSpi() {
  for (let i = 0; i < arrayOfObjects.length; i++) {
    for (let a = 0; a < totalarray.length; a++) {
      //totalarray = arrayOfObjects[i].cookieseveryhour;
      totalarray[a] += arrayOfObjects[i].cookieseveryhour[a];
      //console.log(totalarray[i]);
    }
  }
}
function renderfooter() {
  let trEl2 = document.createElement('tr');
  table.appendChild(trEl2);
  let tdEl3 = document.createElement('td');
  trEl2.appendChild(tdEl3);
  tdEl3.textContent = 'total';
  for (let i = 0; i < 14; i++) {
    let tdEl2 = document.createElement('td');
    trEl2.appendChild(tdEl2);
    tdEl2.textContent = totalarray[i];
}
}

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let contaner = document.getElementById('cont');

let table = document.createElement('table');
contaner.appendChild(table);
let trEl = document.createElement('tr');
table.appendChild(trEl);
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1 pm', '2pm', '3pm', '4pm', '5pm ', '6pm', '7pm'];

function tableheader() {
  let thEl2 = document.createElement('th');
  trEl.appendChild(thEl2);
  for (let i = 0; i < hours.length; i++) {
    let thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];
  }

}
tableheader();

function City(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.custumernu = [];
  this.cookieseveryhour = [];
  this.totalnu = 0;
  arrayOfObjects.push(this);
}
City.prototype.randomnum = function () {

  for (let i = 0; i < hours.length; i++) {
    this.custumernu.push(Math.floor(randomValue(this.min, this.max)));
  }


  //console.log(this.custumernu);
};
City.prototype.cookiesperhour = function () {
  for (let i = 0; i < hours.length; i++) {
    let val = 0;
    val = Math.floor(this.custumernu[i] * this.avg);
    this.totalnu = this.totalnu + val;
    this.cookieseveryhour.push(val);
  }
  //console.log(this.cookieseveryhour);
};


City.prototype.render = function () {
  let trEl2 = document.createElement('tr');
  table.appendChild(trEl2);
  let tdEl3 = document.createElement('td');
  trEl2.appendChild(tdEl3);
  tdEl3.textContent = this.location;
  for (let i = 0; i < 14; i++) {
    let tdEl2 = document.createElement('td');
    trEl2.appendChild(tdEl2);
    tdEl2.textContent = this.cookieseveryhour[i];
  }
};

// City.prototype.data = function () {
//   let tdEl = document.createElement('td');
//   table.appendChild(tdEl);
//   tdEl.textContent = this.cookieseveryhour;

//   let list =document.createElement('ul');
//   contaner.appendChild(list);
//   let li = null ;
//   for ( let i = 0 ; i < this.cookieseveryhour.length ; i++){
//     li = document.createElement('li');
//     list.appendChild(li) ;
//     li.textContent = `${hours[i]} : ${this.cookieseveryhour[i]} cookies `;
//   }
//   let totalnu = document.createElement('li');
//   list.appendChild(totalnu);
//   totalnu.textContent = `the total is ${this.totalnu}`;
// };


let seattle = new City('seattle', 23, 65, 6.3);
let Tokyo = new City('tokyo', 3, 24, 1.2);
let dubai = new City('dubai', 11, 38, 3.7);
let paris = new City('paris', 20, 38, 2.3);
let lima = new City('lima', 2, 16, 4.6);
seattle.randomnum();
seattle.cookiesperhour();
seattle.render();
Tokyo.randomnum();
Tokyo.cookiesperhour();
Tokyo.render();
dubai.randomnum();
dubai.cookiesperhour();
dubai.render();
paris.randomnum();
paris.cookiesperhour();
paris.render();
lima.randomnum();
lima.cookiesperhour();
lima.render();

//console.log(arrayOfObjects);

calculateSpi();
console.log(totalarray);
renderfooter();
