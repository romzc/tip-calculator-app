/** buttons */
const btn5 = document.getElementById('btn5');
const btn10 = document.getElementById('btn10');
const btn15 = document.getElementById('btn15');
const btn25 = document.getElementById('btn25');
const btn50 = document.getElementById('btn50');
const reset = document.getElementById('reset');

/** inputs */
const bill = document.getElementById('bill');
const custom = document.getElementById('custom');
const people = document.getElementById('people');

/**  amount */
const tip = document.getElementById('tip');
const total = document.getElementById('total');

/** span */
const span_bill = document.getElementById('span-bill'); 
const span_tip = document.getElementById('span-tip');
const span_people = document.getElementById('span-people');

/** buttons container */
const container = document.getElementsByClassName("choose-container");

/** --------------- */
let tipValue = 0;
let billValue = 0;
let peopleValue = 0;

const doActive = (element, number ) => {
    for( let i = 0; i < element.length-1; i++ ) {
        element[i].classList.replace("active","no-active");
        if( i == number ) {
            element[i].classList.replace("no-active","active");
        }
    }
}

/** choose tip % events */
btn5.addEventListener('click', () => { 
    tipValue = 0.05;

    doActive(container[0].children,0);

    span_tip.classList.replace("show","ocult");
    showError();
    if ( tipValue != 0 && peopleValue != 0 && billValue != 0 ) {

        let data = getSplit(billValue, tipValue, peopleValue);
        tip.innerText = Number(data.tipAmount).toFixed(2);
        total.innerText = Number(data.total).toFixed(2);
    }
});



btn10.addEventListener('click', () => { 
    tipValue = 0.10; 

    doActive(container[0].children,1);

    span_tip.classList.replace("show","ocult");
    showError();
    if ( tipValue != 0 && peopleValue != 0 && billValue != 0 ) {

        let data = getSplit(billValue, tipValue, peopleValue);
        tip.innerText = Number(data.tipAmount).toFixed(2);
        total.innerText = Number(data.total).toFixed(2);
    }
});


btn15.addEventListener('click', () => {
    tipValue = 0.15; 
    
    doActive(container[0].children,2);

    span_tip.classList.replace("show","ocult");
    showError();
    if ( tipValue != 0 && peopleValue != 0 && billValue != 0 ) {
        
        let data = getSplit(billValue, tipValue, peopleValue);
        tip.innerText = Number(data.tipAmount).toFixed(2);
        total.innerText = Number(data.total).toFixed(2);
    }
});


btn25.addEventListener('click', () => { 
    tipValue = 0.25; 

    doActive(container[0].children,3);

    span_tip.classList.replace("show","ocult");
    showError();
    if ( tipValue != 0 && peopleValue != 0 && billValue != 0 ) {
        
        let data = getSplit(billValue, tipValue, peopleValue);
        tip.innerText = Number(data.tipAmount).toFixed(2);
        total.innerText = Number(data.total).toFixed(2);
    }
});


btn50.addEventListener('click', () => { 
    tipValue = 0.50; 
    
    doActive(container[0].children,4);

    span_tip.classList.replace("show","ocult");
    showError();

    if ( tipValue != 0 && peopleValue != 0 && billValue != 0 ) {
        
        let data = getSplit(billValue, tipValue, peopleValue);
        tip.innerText = Number(data.tipAmount).toFixed(2);
        total.innerText = Number(data.total).toFixed(2);
    }
});

custom.addEventListener('click', () => {
    doActive(container[0].children,5);
    tipValue = Number(custom.value) / 100;

    if ( tipValue != 0 && peopleValue != 0 && billValue != 0 ) {

        let data = getSplit(billValue, tipValue, peopleValue);
        tip.innerText = Number(data.tipAmount).toFixed(2);
        total.innerText = Number(data.total).toFixed(2);
    }
})

custom.addEventListener('keyup', () => { 
    tipValue = Number(custom.value) / 100;

    span_tip.classList.replace("show","ocult");
    showError();

    if ( tipValue != 0 && peopleValue != 0 && billValue != 0 ) {

        let data = getSplit(billValue, tipValue, peopleValue);
        tip.innerText = Number(data.tipAmount).toFixed(2);
        total.innerText = Number(data.total).toFixed(2);
    }
});



bill.addEventListener('keyup',() => {
    billValue = Number(bill.value);
    console.log(billValue);

    span_bill.classList.replace("show","ocult");
    bill.classList.replace("border-warning","border");
    showError();

    if ( tipValue != 0 && peopleValue != 0 && billValue != 0  ) {
        

        let data = getSplit(billValue, tipValue, peopleValue);
        tip.innerText = Number(data.tipAmount).toFixed(2);
        total.innerText = Number(data.total).toFixed(2);
    }
});


people.addEventListener('keyup',() => {
    peopleValue = Number(people.value);

    span_people.classList.replace("show","ocult");
    people.classList.replace("border-warning","border");

    showError();
    if ( tipValue != 0 && peopleValue != 0 && billValue != 0  ) {

        let data = getSplit(billValue, tipValue, peopleValue);
        tip.innerText = Number(data.tipAmount).toFixed(2);
        total.innerText = Number(data.total).toFixed(2);
    }
});


reset.addEventListener('click', () => {

    tipValue = 0;
    billValue = 0;
    peopleValue = 0;

    tip.innerText = "0.00";
    total.innerText = "0.00";

    custom.value = "";
    people.value = "";
    bill.value = "";

    span_tip.classList.replace("show","ocult");
    span_people.classList.replace("show","ocult");
    span_bill.classList.replace("show","ocult");

    doActive(container[0].children,5);
    people.classList.replace("border-warning","border");
    bill.classList.replace("border-warning","border");
});




/** show errors */
const showError = () => {
    if( tipValue == 0 ) {

        span_tip.classList.replace("ocult","show");
        

        tip.innerText = "0.00";
        total.innerText = "0.00";

    }
    if( peopleValue == 0 ) {

        span_people.classList.replace("ocult","show");
        people.classList.replace("border","border-warning");

        tip.innerText = "0.00";
        total.innerText = "0.00";
    }
    if( billValue == 0 ) {

        span_bill.classList.replace("ocult","show");
        bill.classList.replace("border","border-warning");

        tip.innerText = "0.00";
        total.innerText = "0.00";
    }
}


/** get split */
const getSplit = ( bill, tip, people ) => {

    let oneBill = bill / people;
    let tipAmount = oneBill * tip;
    let total = oneBill + tipAmount;
    
    return {tipAmount, total};
}


const truncate = (number,x) => {
    str = number.toString();
    str = str.slice(0,str.indexOf('.') + x);
    return str;
}