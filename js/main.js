close = document.getElementById('close')
const menu = (toggleId, navId) =>{
    const burger = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(burger && nav){
        burger.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

menu('burger','menu')

const link = document.querySelectorAll('.link');

function action(){
    link.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const closeMenu = document.getElementById('menu')
    closeMenu.classList.remove('show')
}
link.forEach(n => n.addEventListener('click', action)); 



//  commands page

const accordionItemHeaders = document.querySelectorAll('.text');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => { // fixme unused param event
        const currentlyActiveAccordionItemHeader = document.querySelector('.text.active');
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('active');
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = '0'
            // accordionItemBody.style.maxHeight = 0;  // FIXME
        }
    });
});

// LOADER

window.addEventListener("load", function() {
    const loader = document.querySelector('.loader');
    loader.className += " hidden"; 
});