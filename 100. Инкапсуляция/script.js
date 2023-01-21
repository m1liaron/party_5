'use strict';

// Инкапсуляция - это один из принцыпов объектно оринтрованного прогромированния
class User{
    constructor(name,age){
        this.name = name;
        this._age = age;
    }
    
    #surname = ' Matich';

    say = () =>{
        console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
    }
    get age(){
        return this._age;
    }
    
    set age(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        }else{
            console.log('Вы слишком стар идите в книгу рекоркодов гинеса!');
        }
    }
}   

const ivan = new User('Ivan',27);
console.log(ivan.surname);
ivan.say();