'use strict';

// прелоадер
// window.onload = function () {
//     document.body.classList.add('loaded_hiding');
//     window.setTimeout(function () {
//       document.body.classList.remove('loaded');
//       document.body.classList.add('loaded_hiding');
//     }, 1000);
//   }

// SCROLL TO TOP BUTTON


let arrowTop = document.querySelector('.arrowTop')
window.onscroll = ()=> {
    if(window.scrollY > 2500){
        arrowTop.classList.add('isShow');


    }else if (window.scrollY < 2500){
        arrowTop.classList.remove('isShow');

    }
    // по клику скролл атоматически наверх
    arrowTop.onclick=()=>{
    window.scrollTo(0,0)
    }
    }






// scroll к блокам при клике на ссылки меню

const headerLink = document.querySelectorAll('.header_link[data-get]');
if(headerLink.length > 0) {
    headerLink.forEach(headerLink => {
        headerLink.addEventListener('click', onMenulinklick)
    });

    function onMenulinklick(e){
        // получаем целевой обьект
        const headerLink = e.target;
// проверяем заполнен ли обьект и существует ли сам обьект на который ссылается data-attribite
        if(headerLink.dataset.get && document.querySelector(headerLink.dataset.get)){
            const gotoBlock = document.querySelector(headerLink.dataset.get);
            // высчитываем положение обьекта
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            // скрол к секциям на бургере
            if(headerburger.classList.contains('active')) {
                document.body.classList.remove('lock');
                headerburger.classList.remove('active');
                headermenu.classList.remove('active')
            }

            window.scrollTo({
                top:gotoBlockValue,
                behavior: "smooth"
                });
                e.preventDefault();
        }
}
    }


// бургер меню
let headerburger = document.querySelector('.header_burger');
let headermenu = document.querySelector('.header_menu');
let ButtonContainerActive = document.querySelector('.ButtonContainer');
let headerLogo = document.querySelector('.header_logo');
let buttonContainer = document.querySelector('.button_container');
// let navcontainer1 = document.querySelector('.navcontainer_1')
headerburger.addEventListener('click',() => {
    headerburger.classList.toggle('active'),
    headermenu.classList.toggle('active'),
    headerLogo.classList.toggle('active'),
    buttonContainer.classList.toggle('active');
    document.body.classList.toggle('lock')
}

);


 // модальное окно (c этим кодом можно добавлять много модальных окон)
// находим все кнопки
let btns = document.querySelectorAll('*[data-modal-btn]');
// любой тег с таким атрибутом будет добавлятся
// для каждой кнопки должно быть такое же модальное окно с таким же атибутом (my_modal1)
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
let name = btns[i].getAttribute('data-modal-btn');
let modal = document.querySelector("[data-modal-window ='"+name+"']");
modal.style.display = 'block';
document.body.classList.add('lock');

let close = modal.querySelector('.close_modal_window');
close.addEventListener('click', function(){
    modal.style.display = 'none';
    document.body.classList.remove('lock');

})
    })

}
// по клику вне модального окна оно будет закрываться
window.onclick = function(e) {
//  событие event отслеживает элменты на странице
if(e.target.hasAttribute('data-modal-window')){
// target это именно кнопка у которого есть в наличии атрибут
let modals = document.querySelectorAll("*[data-modal-window]")
// выбираем все модальные окна
for (let i = 0; i< modals.length; i++){
    modals[i].style.display = 'none';
    document.body.classList.remove('lock');
}
}
}

// Видео в модальном окне
window.addEventListener('DOMContentLoaded' ,function(){
    let videoModal = document.querySelector('.video_modal');
    let textContainerModal = document.querySelector('.text_containerModal')
    videoModal.addEventListener('click', function(){
        //добавляем на video проверочный класс ready  и делвем проверку. Если класс Ready есть, то дублирование не идет
        if(videoModal.classList.contains('ready')){
            return;
        }
        videoModal.classList.add('ready');
        // textContainerModal.classList.add('none');
        // в video делвем дата атрибут  data-src = "https://www.youtube.com/embed/z34mEgY-HYU?autoplay=1">
        // обьявляем переменную src, тем самым мы можем менять ссылку на видео в HTMLа не в JS и одновременно видео подгружается
    let src = videoModal.dataset.src;
    videoModal.insertAdjacentHTML('afterbegin','<iframe width="560" height="315" src=" '+ src +' " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
    // можно добавить любое видео таким образом без загрузки в корневой каталог
    })

    })

//Табы

const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content ');
// перебираем заголовки
tabsTitle.forEach(item => item.addEventListener('click',event =>{
    // получаем атрибут при клике, для этого исользкется event.target. С помощью свойства event.target мы понимаем на какой загловок мы кликаем. С помощью getAttribute получем data-tab
const tabsTitleTarget = event.target.getAttribute('data-tab');
// при каждом клике мы будем удалять все активные табы
 tabsTitle.forEach(Element => Element.classList.remove('active-tab'));
 tabsContent.forEach(Element => Element.classList.add('hidden-tab-content'));
// на какой заголовок нажали мы добавлем класс
item.classList.add('active-tab');
// ищем какой блок с контентом мы должны открть по клику
document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');
}))
// открытая вкладка первая
document.querySelector('[data-tab = "tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');
//


// стрелочки аккордеона
let liItem = document.querySelectorAll('.li_item')
let arrow = document.querySelectorAll('.arrow');
for (let i = 0; i < arrow.length; i++){
    let submenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];
    arrow[i].addEventListener('click',function() {
        thisArrow.classList.toggle('active');
        submenu.classList.toggle('open');
    });
}

// const menuList = document.querySelectorAll('.menu_list')
// for (let i = 0; i < menuList.length; i++) {
//   const subMenu = menuList[i].querySelector('.sub_menu_list')
//   const arrow = menuList[i].querySelector('.arrow')

//   menuList[i].addEventListener('click', () => {
//     arrow.classList.toggle('active');
//     subMenu.classList.toggle('open');
//   })
// }



document.addEventListener('DOMContentLoaded', clickTabs);

function clickTabs() {
    let tabs = document.querySelector('#tabs_tabs');
    let items = document.querySelectorAll('.item');
    let itemContents = document.querySelectorAll('.item-content');

    if (!tabs) return;

    tabs.addEventListener("click", function (event) {
        if (event.target.classList.contains('item')) {
            items.forEach(function(item) {
                item.classList.remove('active');
            });

            itemContents.forEach(function(content) {
                content.classList.remove('active');
            });

            event.target.classList.add('active');
            let idItemContent = event.target.id + '-content';
            let iC = document.getElementById(idItemContent);
            if (iC) {
                iC.classList.add('active');
            }
        }
    });
}



// форма обратной связи с переходом в Whatsap
function gotowhatsapp() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let textService = document.getElementById('textService').value;
    let message = document.getElementById('message').value

   let url = "https://wa.me/9529609891?text="
        + "Имя: " + name + "%0a"
        + "Телефон: " + phone + "%0a"
        + "Услуга: " + textService + "%0a"
        + "Комментарии: " + message + "%0a"


    window.open(url, '_blank').focus();
}

//  SplitType
