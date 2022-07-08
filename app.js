// const tl=gsap.timeline({defaults:{ease:"power1.out"}});

// tl.to('.text1',{y:"0%",duration:1.5, stagger:0.25,delay:0.5})
// tl.to('.text1',{y:"-100%",duration:1.5, stagger:0.25,delay:0.5})
// tl.to('.text',{y:"0%",duration:2, stagger:0.25},'-=1.5')
// tl.to('.slider',{y:"-200%", duration:1.5,});
// tl.to('.intro',{y:"-200%",duration:.5},"-=1.5");
// tl.fromTo('nav',{opacity:0},{opacity:1,duration:1},"-=.5");
// tl.fromTo('.rest-part',{opacity:0},{opacity:1,duration:1},'-=1');
// tl.fromTo('.division .line_division',{opacity:0},{opacity:1,duration:1});
// tl.fromTo('main',{opacity:0},{opacity:1,duration:1},'-=1');



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



//DROPDOWN MENU FOR DATE OF BIRTH
const daySelect=document.querySelector("#day");
const monthSelect=document.querySelector("#month");
const yearSelect=document.querySelector("#year");

const months=['Birth Month','January','Feburary','March','April','May','June','July','August','September',
             'October','November','December'];

//Months will always be the same regardless of the year
(function populateMonths(){
    for(let i=0;i<months.length;i++)
    {
        const option=document.createElement('option');
        option.textContent=months[i];
        monthSelect.appendChild(option);
    }
})();

function populateDays(month){
    while(daySelect.firstChild)
    {
        daySelect.removeChild(daySelect.firstChild);
    }
    
    //holds the number of days for the month
    let dayNum;
    let yearNum=yearSelect.value;

    if(month==='Birth Month')
    {
        dayNum=0;
    }
    if(month==='January'||month==='March'||month==='May'||month==='July'||month==="August"||
    month=="October"||month=="December")
    {
        dayNum=31;
    }
    else if(month==="Feburary")
    {
        //check for a leap year
        if(new Date(yearNum,1,29).getMonth()===1)
        {
            dayNum=29;
        }
        else 
        {
            dayNum=28;
        }
    }
    else{
        dayNum=30;
    }

    if(month!='Birth Month'){
    for(let i=1;i<=dayNum;i++)
    {
        const option=document.createElement('option');
        option.textContent=i;
        daySelect.appendChild(option);
    }
   }
   else if(month==='Birth Month')
   {
    const option=document.createElement('option');
    option.textContent='Birth Day';
    daySelect.appendChild(option);
   }

}

function populateYears(){
    
    //extract current year
    let year=new Date().getFullYear();
    
    //make previous 100 years as the option
    for(let i=0;i<=100;i++)
    {
        const option=document.createElement('option');
        option.textContent=year-i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();

// yearSelect.onChange()=function(){
//     populateDays(monthSelect.value);
//     console.log("year changed");
// }
// monthSelect.onChange()=function(){
//     populateDays(monthSelect.value);
//     console.log("month changed");
// }

function changesAreMade(){
    populateDays(monthSelect.value);
}

//END OF DROP DOWN MENU FOR SELECTING DATE OF BIRTH.


//SETTING THE TIME OF BIRTH -->HOUR OF BIRTH AND MINUTES

const hourSelect=document.querySelector("#hours");
const minutesSelect=document.querySelector("#minutes");


function populateHours(){
   const option=document.createElement('option');
   option.textContent='Birth Hour';
   hourSelect.appendChild(option);

    for(let i=0;i<24;i++)
    {
        const option=document.createElement('option');
        option.textContent=i;
        hourSelect.appendChild(option);
    }
}

function populateMinutes(){
    const option=document.createElement('option');
    option.textContent='Birth Minute';
    minutesSelect.appendChild(option);

    for(let i=0;i<60;i++)
    {
        const option=document.createElement('option');
        option.textContent=i;
        minutesSelect.appendChild(option);
    }
}
populateHours();
populateMinutes();