'use strict';

function randomValue(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let contaner = document.getElementById ('cont');

let hours = ['6am ', '7am', '8am', '9am','10am', '11am', '12pm', '1 pm','2pm' ,'3pm', '4pm' , '5pm ' , '6pm' , '7pm'];
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
      li.textContent = `${hours[i]} : ${this.cookieseveryhour[i]} cookies `;




    }
    let totalnu = document.createElement('li');
    list.appendChild(totalnu);
    totalnu.textContent = `the total is ${this.total} `;
  }

};
seattle.randomnum();
console.log(seattle);
seattle.cookiesperhour() ;
seattle.render();
///////////////////////////////////////////////////////////////////tokyo


//  let contaner = document.getElementById ('cont')

// let hours = ['6am ', '7am', '8am', '9am','10am', '11am', '12pm', '1 pm','2pm' ,'3pm', '4pm' , '5pm ' , '6pm' , '7pm']
let tokyo = {
  location : 'Tokyo' ,
  min : 3 ,
  max : 24 ,
  avg : 1.2 ,
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
      li.textContent = `${hours[i]} : ${this.cookieseveryhour[i]} cookies `;




    }
    let totalnu = document.createElement('li');
    list.appendChild(totalnu);
    totalnu.textContent = `the total is ${this.total} `;
  }

};

tokyo.randomnum();
console.log(tokyo);
tokyo.cookiesperhour();
tokyo.render();

///////////////////////////////////////////dubai

let dubai = {
  location : 'Dubai' ,
  min : 11 ,
  max : 38 ,
  avg : 3.7,
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
      li.textContent = `${hours[i]} : ${this.cookieseveryhour[i]} cookies `;




    }
    let totalnu = document.createElement('li');
    list.appendChild(totalnu);
    totalnu.textContent = `the total is ${this.total} `;
  }

};

dubai.randomnum();
console.log(dubai);
dubai.cookiesperhour();
dubai.render();



///////////////////////////////paris

let paris = {
  location : 'Paris' ,
  min : 20 ,
  max : 38 ,
  avg : 2.3,
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
      li.textContent = `${hours[i]} : ${this.cookieseveryhour[i]} cookies `;




    }
    let totalnu = document.createElement('li');
    list.appendChild(totalnu);
    totalnu.textContent = `the total is ${this.total} `;
  }

};

paris.randomnum();
console.log( paris);
paris.cookiesperhour();
paris.render();

///////////////////Lima


let Lima = {
  location : 'Lima' ,
  min : 2 ,
  max : 16 ,
  avg : 4.6 ,
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
      li.textContent = `${hours[i]} : ${this.cookieseveryhour[i]} cookies `;




    }
    let totalnu = document.createElement('li');
    list.appendChild(totalnu);
    totalnu.textContent = `the total is ${this.total} `;
  }

};

Lima.randomnum();
console.log(Lima);
Lima.cookiesperhour();
Lima.render();

/////////////////////


