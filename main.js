


 document.querySelector("#control1").addEventListener('click', fun1)
 document.querySelector("#control2").addEventListener('click', fun2)
 document.querySelector("#control3").addEventListener('click', fun3) 
 
 


 function fun1() {
      testimonial.style.transform = 'translateX(870px)';
      control1.classList.add("active");
      control1.classList.remove("active");
      control1.classList.remove("active");
 }

 function fun2() {
  testimonial.style.transform = 'translateX(0px)';
  control1.classList.remove("active");
  control1.classList.add("active");
  control1.classList.remove("active");
}

function fun3() {
  testimonial.style.transform = 'translateX(-870px)';
  control1.classList.remove("active");
  control1.classList.remove("active");
  control1.classList.add("active");
}