const tl=gsap.timeline({defaults:{ease:"power1.out"}});

tl.to('.text1',{y:"0%",duration:1.5, stagger:0.25,delay:0.5})
tl.to('.text1',{y:"-100%",duration:1.5, stagger:0.25,delay:0.5})
tl.to('.text',{y:"0%",duration:2, stagger:0.25},'-=1.5')
tl.to('.slider',{y:"-200%", duration:1.5,});
tl.to('.intro',{y:"-200%",duration:.5},"-=1.5");
tl.fromTo('nav',{opacity:0},{opacity:1,duration:1},"-=.5");
tl.fromTo('.rest-part',{opacity:0},{opacity:1,duration:1},'-=1');
tl.fromTo('.division .line_division',{opacity:0},{opacity:1,duration:1});
tl.fromTo('main',{opacity:0},{opacity:1,duration:1},'-=1');



// MOBILE VERSION
const menuIconContainer=document.querySelector("nav .menu-icon-container");

const navContainer=document.querySelector(".nav-container");
const navLinks=document.querySelector("#clickables");

navLinks.addEventListener("click",()=>{
    navContainer.classList.toggle("active");
})

menuIconContainer.addEventListener("click",()=>{
    navContainer.classList.toggle("active");
})

//NAVBAR CHANGE ON SCROLL

window.addEventListener('scroll',()=>{
   
   

    if(window.scrollY>=44 && window.scrollY<1590)
    {
        navContainer.classList.remove("scrolled-bg");
        navContainer.classList.add("scrolled");
    }
    else if(window.scrollY<44)
    {
        navContainer.classList.remove("scrolled");
    }
    else if(window.scrollY>=1590 && window.scrollY<2270)
    {
        navContainer.classList.add("scrolled-bg");
    }
    else if(window.scrollY>=2270)
    {
        navContainer.classList.remove("scrolled-bg");
        navContainer.classList.add("scrolled");
    }
})



const buttons=document.querySelectorAll("[data-carousel-button]");


buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const offset=button.dataset.carouselButton ==="next" ? 1:-1;
        const slides=button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide=slides.querySelector("[data-active]")
        let newIndex= [...slides.children].indexOf(activeSlide)+offset;
        if(newIndex<0)
        {
            newIndex=slides.children.length-1;
        }
        else if(newIndex>=slides.children.length)
        {
            newIndex=0;
        }

        slides.children[newIndex].dataset.active=true;
        delete activeSlide.dataset.active;
    })
})

//CAROUSEL TOUCH EVENTS

