'use strict';

// filter 

// const names = ['Ivan','Ann','Ksenia','Vladislav'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map - позволяет взять исходный массив и изменить каждый елемент внутри него, соответственно на выходе у вас получаеться опять какой-то новый массив уже с изменёнными данными  

// let answers = ['IVan','AnnA','HElo','hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(answers);


// every/some  
// some - берёт массив перебирает его и если у нас хотябы какой-то елемент подходит по какомо-ту условию,которое  мы зададим в callbacks function то в таком случае он нам вернёт true если нет false
// some - если какой-то елемент в нутри массива будет равен тому условию которому мы написали то будет true

// const some = [4, 5,7];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

// reduce

//1)
const arr = [4, 5, 1, 3, 2, 6];
                      //0   //4
                      //4   //5
                      //9   //1
                      //10  //3
const res = arr.reduce((sum,current) => sum + current,3);

console.log(res);

//2)
// const arr = ['apple', 'pear', 'orange'];

// const res = arr.reduce((sum,current) => `${sum}, ${current}  `);

// console.log(res);





// filter - фильтрует 
// map - позволяет взять исходный массив и изменить каждый елемент внутри него, соответственно на выходе у вас получаеться опять какой-то новый массив уже с изменёнными данными  
// every/some  - перебирает каждый елемент в массиве/перебирает какой-то елемент в массиве
// reduce - собирает массив в одно целое 

const obj = {
     ivan:'persone',
     ann:'persone',
     ksenia:'persone',
     dog:'animal',
     cat:'animal',
     bird:'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] == 'persone')
.map(item => item[0]);


console.log(newArr);