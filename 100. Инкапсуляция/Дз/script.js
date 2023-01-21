'use strict';

// Инкапсуляция - это один из принцыпов объектно оринтрованного прогромированния
class User{
   constructor(name,age,power){
    this.name = name;
    this._age = age;
    this.power = power;
   }
 

   say = () => {
    console.log(`Имя пользователя${this.name}, ему ${this._age} лет, его сила состовляет${this.power}}`);
   }

   get age(){
    return this._age;
   }

   set age(age){
    if(typeof age === 'number' && age > 0 && age < 110){
        this._age = age;
    }else{
        console.log('Вы старый');
    }
   }
}

const Vladimir = new User('Vladimir',60);
ivan.say();