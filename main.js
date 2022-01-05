// Nesneleri Tanımlama
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let counterDOM = document.getElementById('counter');


// Local Storage Oluşturma
let counter =  localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;
counterDOM.innerHTML = counter;


// Increase Butonuna Basıldığında
increase.addEventListener('click',function(){
    counter = counter + 1 ;
    counterDOM.innerHTML = counter;
    localStorage.setItem('counter', counter);
});


// Decrease Butonuna Basıldığında
decrease.addEventListener('click',function(){
    counter = counter - 1 ;
    counterDOM.innerHTML = counter;
    localStorage.setItem('counter', counter);
});

