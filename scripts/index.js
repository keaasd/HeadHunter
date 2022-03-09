console.log('привет мир: ');
const optionBtnOrder = document.querySelector('.option__btn_order');
const optionBtnPeriod = document.querySelector('.option__btn_period');// за все время

const optionListOrder = document.querySelector('.option__list_order'); 
const optionListPeriod = document.querySelector('.option__list_period'); 

optionBtnOrder.addEventListener('click', () => {
    console.log('клик');
    optionListOrder.classList.toggle('option__list_active'); 
});

optionBtnPeriod.addEventListener('click', () => {
    console.log('клик');
    optionListPeriod.classList.toggle('option__list_active'); 
});