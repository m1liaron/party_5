'use strict';

const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () =>{
   const request = new XMLHttpRequest();

    request.open('GET','js/current.json');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send();

    //События
    //readystatechange - отслеживает статус готовности нашего запроса в данный текущий момент
    request.addEventListener('load', () =>{
      if(request.status === 200){
        console.log(request.response);
        const data = JSON.parse(request.response);
        inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
      }else{
        inputUsd.value = "Что-то пошло не так";
      }
    });
    // status - статус запроса
    // statusText - текстовое описание ответа сервера
    // response - ответ от сервера
    // readyState - текущее состояние запроса
    });

    // toFixed - сколько-то знаков после точки  