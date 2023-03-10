window.addEventListener('DOMContentLoaded', () => {
   
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

      
     function hideTabContent(){
        tabsContent.forEach(item => { 
          item.classList.add('hide');
          item.classList.remove('show','fade');
        });

        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });
     }

    function showTabContent(i = 0){//если нету никого аргумента то будет 0
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    //addEventListener оброботчик события
    tabsParent.addEventListener('click',(event) =>{
       const target = event.target;

       if(target && target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=>{
           if(target == item){
            hideTabContent();
            showTabContent(i);
           }
        });
       }
    });
    //Timer 
 
    const deadline = '2023-01-14'; 
 
    function getTimeRemaining(endtime){ 
      let days,hours,minutes,seconds;
      const t = Date.parse(endtime) - Date.parse(new Date());
       if(t <= 0){
         days = 0;
         hours = 0;
         minutes = 0;
         seconds = 0;
       }else{
         days = Math.floor(t / (10000 * 60 * 60 * 24)), 
         hours = Math.floor((t / (1000 * 60 * 60) % 24 )), 
         minutes = Math.floor((t / 1000 / 60 ) % 60), 
         seconds = Math.floor((t / 1000) % 60); 
       }

      
            //% делит  на что-то и возращает остаток от деления  
            //Math.floor - округление до ближащего целого 
            return { 
              'total':t, 
              'days':days, 
              'hours':hours, 
              'minutes':minutes, 
              'seconds':seconds 
            };     
    }

   function  getZero(num){
      if(num >= 0 && num < 10){
         return `0${num}`;
      }else{
         return num;
      }
   }

    function setClock(selector,endtime) { 
      const timer = document.querySelector(selector), 
         days = timer.querySelector('#days'), 
         hours = timer.querySelector('#hours'), 
         minutes = timer.querySelector('#minutes'), 
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock,1000);

         updateClock();
         function updateClock(){
            const t = getTimeRemaining(endtime);
            
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0){
               clearInterval(timeInterval);
            }

         }

    }
    setClock('.timer',deadline );

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

            function openModal() {
               modal.classList.add('show');
               modal.classList.remove('hide');
               document.body.style.overflow = 'hidden';
               clearInterval(modalTimerId);
         }
          modalTrigger.forEach(btn => {         
              btn.addEventListener('click', openModal);
          });


          function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            // modal.classList.toggle('show');
            document.body.style.overflow = '';
          } 
    
    modal.addEventListener('click', (e) =>{
          if(e.target === modal || e.target.getAttribute('data-close') == ''){ 
            closeModal();
          }
    });

    document.addEventListener('keydown', (e) =>{
       if(e.code === "Escape" && modal.classList.contains('show')){
         closeModal();
       }
    });
    //developer modal 
    
    const modalTimerId = setTimeout(openModal,50000);  

    function showModalByScroll(){
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
         openModal();
         window.removeEventListener('scroll',showModalByScroll);
      }
    }

    window.addEventListener('scroll',showModalByScroll);//{once:true}); nope
    
    // User class for cards

    class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector) {
          this.src = src;
          this.alt = alt;
          this.title = title;
          this.descr = descr;
          this.price = price;
          this.parent = document.querySelector(parentSelector);
          this.transfer = 27;
          this.changeToUAH(); 
      }
      changeToUAH() {
         this.price = this.price * this.transfer; 
     }
     
     render() {
         const element = document.createElement('div');
         element.innerHTML = `
             <div class="menu__item">
                 <img src=${this.src} alt=${this.alt}>
                 <h3 class="menu__item-subtitle">${this.title}</h3>
                 <div class="menu__item-descr">${this.descr}</div>
                 <div class="menu__item-divider"></div>
                 <div class="menu__item-price">
                     <div class="menu__item-cost">Цена:</div>
                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                 </div>
             </div>
         `;
         this.parent.append(element);
     }
 }

 new MenuCard(
   "img/tabs/vegy.jpg",
   "vegy",
   'Меню "Фитнес"',
   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
   ".menu .container"
).render();
new MenuCard(
   "img/tabs/post.jpg",
   "post",
   'Меню "Постное"',
   'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
   14,
   ".menu .container"
).render();

new MenuCard(
   "img/tabs/elite.jpg",
   "elite",
   'Меню “Премиум”',
   'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
   21,
   ".menu .container"
).render();

//forms
const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText =  `
            display: block;
            margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend',statusMessage);
        

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            fetch('js/server.php' , {
              method:"Post",
              headers:{
                'Content-type':'application/json'
              },
                body:JSON.stringify(object)  
            })
            .then(data => data.text())
            .then(data => {
                console.log(data); // data - это данные которые возврощаються из promise
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() =>{
                showThanksModal(message.failure);
            }).finally(() =>{
              form.reset();
            });
        });
    }
    // если внутри fecha, promise поподает на ошибку которая связана с  HTTP-протоколом (404,405 и тд...) он не выкинет reject, то есть это для него не ошибка.То есть нормально выполнит reseve.Reject будет возникать только при сборе сети или что-то помешало механизму выполниться

    function showThanksModal(message){
      const prevModalDialog = document.querySelector('.modal__dialog');
    
     prevModalDialog.classList.add('hide');
     openModal();

     const thanksModal = document.createElement('div');
     thanksModal.classList.add('modal__dialog');
     thanksModal.innerHTML = `
     <div class="modal__content"> 
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
     </div>
     `;

     document.querySelector('.modal').append(thanksModal);
     setTimeout(() => {
         thanksModal.remove();
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.remove('hide');
         closeModal();
     },4000);
    }
   
    fetch('http://localhost:3000/menu    ')
         .then(data => data.json())
         .then(res => console.log(res));
});

// npm - кусочки кода которые лежат на отдельных серверах и которые мы можем себе установливать в проект для того чтобы использовать 