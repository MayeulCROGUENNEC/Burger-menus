$(".burger").click(function() {
    $(this).toggleClass('active');
    $("ul.menu li").slideToggle('fast');
})

$(window).resize(function() {
    if ($(window).width() > 650) {
        $('ul.menu li').removeAttr('style');
    }
})

const home = document.querySelector('.Kawarimi_no_Jutsu');
const accueil = document.querySelector('.clickS');

accueil.addEventListener('click',function(){
  home.classList.toggle('--is-active')
})
