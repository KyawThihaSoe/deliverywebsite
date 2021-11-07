const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function scrollReveal(){
    let revealpoint = 150;
    let revealElement = document.querySelectorAll(".demo");

    for(let i=0;i < revealElement.length;i++){
        let windowHeight = window.innerHeight;
        let revealtop = revealElement[i].getBoundingClientRect().top;

        if(revealtop<windowHeight-revealpoint){
            revealElement[i].classList.add("activeshow");
        }else{
            revealElement[i].classList.remove("activeshow");
        }
    }
}
window.addEventListener("scroll",scrollReveal);
scrollReveal();