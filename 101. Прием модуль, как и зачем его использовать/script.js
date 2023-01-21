'use strict';

// модуль - нужен чтобы скрыть внутрение детали реалезации скрипта

/// создание модулей через нативную реализацию


// 1) анонимная самовызывающиеся функция

const number = 1;
    
(function(){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

// 2) объектный интерфейс 
//    модуль записываем в переменную и в неё уже возрощаем методы доступные снаружи
const user = (function(){
    const privat = function(){
        console.log('I privat');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();