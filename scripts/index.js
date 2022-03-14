console.log('привет мир: ');
const optionBtnOrder = document.querySelector('.option__btn_order');
const optionBtnPeriod = document.querySelector('.option__btn_period');// за все время

const optionListOrder = document.querySelector('.option__list_order'); 
const optionListPeriod = document.querySelector('.option__list_period'); 

optionBtnOrder.addEventListener('click', () => {
    optionListOrder.classList.toggle('option__list_active'); 
    optionListPeriod.classList.remove('option__list_active'); // выключить соседнее меню
});

optionBtnPeriod.addEventListener('click', () => {
    optionListPeriod.classList.toggle('option__list_active'); 
    optionListOrder.classList.remove('option__list_active'); // выключить соседнее меню
});

optionListOrder.addEventListener('click', (event) => {
    const target2 = event.target; // клик по Ul 

    if (target2.classList.contains('option__item')) { 
        // клик по li 
        console.log('клик по li: ');
    optionBtnOrder.textContent = target2.textContent; // замена в кнопке
    optionListOrder.classList.remove('option__list_active'); //  удаляем класс у Ul 
    for(const elem of optionListOrder.querySelectorAll('.option__item')) { // ищем класс Li у Ul
        if (elem === target2) { // если елемент нажат
            elem.classList.add('option__item_active'); // то доб. элементу класс актив
        }   else {elem.classList.remove('option__item_active');}    }
    target2.classList.add('option__item_active'); // иветн добавим класс актив li
    }
});
// option__btn_period - кнопка optionBtnPeriod
// option__list_period - Ul optionListPeriod
// option__item option__item_active - Li

optionListOrder.addEventListener('click', (event) => {
    const target2 = event.target; // клик по Ul 
    console.log(event.target);
    // проверим, точно ли на кликаем Li 
    if (target2.classList.contains('option__item')) { 
        
        console.log('клик по li: ');
    optionBtnOrder.textContent = target2.textContent; // замена в кнопке
    optionListOrder.classList.remove('option__list_active'); //  удаляем класс у Ul 
    for(const elem of optionListOrder.querySelectorAll('.option__item')) { // ищем класс Li у Ul
        if (elem === target2) { // если елемент нажат
            elem.classList.add('option__item_active'); // то доб. элементу класс актив
        }   else {elem.classList.remove('option__item_active');}    }
    target2.classList.add('option__item_active'); // иветн добавим класс актив li
    }
});


    
    // optionListPeriod option__list_active
    // click по ul 
    optionListPeriod.addEventListener('click', (event) => {
        // переменная для клика по.. 
        const target3 = event.target; // клик по Ul 
        console.log(event.target);
        // проверим, точно ли на кликаем Li 
        if (target3.classList.contains('option__item')) { 
            
            console.log('клик по li: ');
        optionBtnPeriod.textContent = target3.textContent; // замена текста в кнопке
        optionListPeriod.classList.remove('option__list_active'); //  удаляем класс у Ul. закрытие по клику
            // удалить галочку
        for(const elemPeriod of optionListPeriod.querySelectorAll('.option__item')) { // ищем класс Li у Ul
            if (elemPeriod === target3) { // если елемент нажат
                elemPeriod.classList.add('option__item_active'); // то доб. элементу класс актив
            }   else {elemPeriod.classList.remove('option__item_active');}    
        }
        target3.classList.add('option__item_active'); // иветн добавим класс актив li
        }
    });
    
    

// option__item_active
// console.log('клик');