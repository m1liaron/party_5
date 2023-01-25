# party_5

In order to create a slider we need to describe several properties in detail here is an example ==>

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
