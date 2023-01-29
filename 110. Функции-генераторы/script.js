'use strict';

// функции генероторы выдают функции последоватильно то есть 1 раз вызвали функции она отдала 1 результат когда вызыаем в некст раз даётся уже другой результат
// function* generatoe(){
//      yield 'S';
//      yield 'c';
//      yield 'r';
//      yield 't';
//      yield 'i';
//      yield 'p';
//      yield 't';
// }

// const str = generatoe();

// console.log(str.next().value);


function* count(n){
  for(let i = 0; i < n;i++){
     yield i;

  }
};

for(let k of count(7)){
     console.log(k);
}

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
