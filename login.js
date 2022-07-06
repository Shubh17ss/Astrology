const register1=document.querySelector('.register');

register1.addEventListener('click',()=>{
  const time1=gsap.timeline({defaults:{ease:"power1.out"}});
  time1.to('.container',{y:"-150%",duration:0.5})
  time1.to('.container2',{y:"-120%",duration:0.5})
});

if(window.innerWidth<=768)
{
  document.querySelector('.Sign_up_heading').innerHTML='Register';

}



const input_area=document.querySelector('.input_field');

input_area.addEventListener('click',()=>{
 
  if(window.innerWidth<=768)
  {
    document.querySelector('.container').style.overflow='hidden';
    const time2=gsap.timeline({defaults:{ease:"power1.out"}});
    time2.to('.image_1',{y:"-200%",duration:0.5});
  }

})

