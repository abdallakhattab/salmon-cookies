function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Seattle = {
    min: 	23 ,
    max: 	65 ,
    avg:   6.3 ,
    custumers : 0 ,
    getcustumers:function(){
        this.custumers = randomValue(23,65);

}

}

 Seattle.getcustumers();

 let hours= [6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 ];
 let unorderlist = document.createElement('ul');
 let li = null;
 for (let i = 0; i < hours.length; i++) {

    let a = Seattle.avg * Seattle.custumers ;
    let li = document.createElement('li');
     unorderlist.appendChild(li);
     li.textContent = `${a} test`




 }