// 1

let hamburgers = 4;
let fries = 4;

if(hamburgers >= 4 && fries >=1) {
    console.log('Ми поїли')
}else {
    console.log('Ми йдемо в інше кафе')
}

//2
let num1 = 1000;
let num2 = 1900;

if(num1 >= 1000 && num2 <= 1900 ){
    console.log('ok')
} else {
    console.log('cannot be bought')
}

//3
let num3 = 1000;
let num4 = 1900;
if(num3 < 1000 && num4 > 1900 ){
    console.log('cannot be bought')
} else {
    console.log('you can buy')
}

//3.1
let num5 = 1000;
let num6 = 1900;
if(num5 < 1000 && !num6 <= 1900 ){
    console.log('cannot be bought')
} else {
    console.log('you can buy')
}

//4
let season = {
    0: 'winter',
    1: 'spring',
    2: 'summer',
    3: 'autumn'
}
console.log(season[3]);

//5
let a = 8;
let b = 14;
let c = 9;

if( a < c && a > b || a > c && a < b ){
    console.log('a')
} else if (b < a && b > c || b > a && b < c){
    console.log('b')
} else {
    console.log('c')
}

//6
let week = 23;

switch(week){
    case 0: 
        console.log('Monday');
        break;
    case 1: 
        console.log('Tuesday');
        break;
    case 2: 
        console.log('Wednesday');
        break;
    case 3: 
        console.log('Thursday');
        break;  
    case 4: 
        console.log('Friday');
        break;      
    case 5: 
        console.log('Saturday');
        break;
    case 6: 
        console.log('Sunday');
        break;    
    default:
        console.log('There is no such day of the week');
        break;  
}

//7
let value = 1;
let value2 = 2;
let result = '*';

switch(result){
    case '+': 
        console.log(value + value2);
        break;
    case '-': 
        console.log(value - value2);
        break;
    case '/': 
        console.log(value/value2);
        break;
    case '*': 
        console.log(value*value2);
        break;      
    default:
        console.log('mistake');
        break;  
}

//8
let string = 'Інтерпретація';
console.log(string.replace(/[аоуеиі]/gi, ''));

//9
let meters = 3;
let kilometers = meters/1000;

if( kilometers == 1){
    console.log( kilometers + ' кілометр ')
} else if( kilometers == 2 || 3 || 4 ){
    console.log( kilometers + ' кілометра ')
} else {
    console.log( kilometers + ' кілометрів ')
}
