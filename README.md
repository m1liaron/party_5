# party_5

Для того чтобы создать слайдер нам неообходимо описать несколько свойств их описать подробно вот пример ==>

function slider({container,slide,nextArrow,prevArrow,totalCounter,currentCounter,wrapper,field}){

          slider({
            container:'.offer__slider',
            nextArrow:'.offer__slider-next',
            prevArrow:'.offer__slider-prev',
            slide:'.offer__slide',
            totalCounter:'#total',
            currentCounter:'#current',
            wrapper:'.offer__slider-wrapper',
            field:'.offer__slider-inner'
          });
