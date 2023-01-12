'use strict';

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {// resolve - что-то выполнилось правильно // reject - это то что наше обещание не выполнилось и что-то пошло не так
//     setTimeout(() => {
//         console.log('Подготовка данных...');
     
//         const product = {
//          name:'TV',
//          price:20000
//         };
//       resolve(product);
//      },2000);
// });

// req.then((product) =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             product.status = 'ordered';
//             // reject();
//             resolve(product);
//            },2000);
//     });
// }).then(data =>{
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//   console.error('Произошла ошибочка-_-');
// }).finally(() =>{
//     console.log('Завершение запроса...');
// });

const test = time  => {
    return new Promise(resolve => {
          setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(1000).then(() => console.log('2000 ms'));

Promise.all([test(1000),test(2000)]).then(() =>{
    console.log('All');
});
// all ждёт выполнение всех promisev и только тогда что-то делает

Promise.race([test(1000),test(2000)]).then(() =>{
    console.log('All');
});
// race выполняет свои  действия только тогда самый первый promise правильно отработал

// catch - это метод который выполняется при какой-то ошибке 
// then - это метод который выполняется  на Promise в случае положительного исхода


//Tegs

// promise - обещание 