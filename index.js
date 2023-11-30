const image=document.querySelector("#myImage");
const text=document.querySelector("h2");

const buttonOne=document.querySelector("#one");
const buttonTwo=document.querySelector("#two");

buttonOne.addEventListener ("click", happy);
buttonTwo.addEventListener ("click", tragic);

function happy(){
image.setAttribute ("src", "https://www.looper.com/img/gallery/bizarre-things-that-happened-on-the-titanic-set/l-intro-1661352743.jpg");
text.innerHTML="Where Jack will go?";
buttonOne.innerHTML="He will go to Europe";
buttonTwo.innerHTML=" He will stay in England";


buttonOne.addEventListener("click", Europe);
buttonTwo.addEventListener("click", England);

function Europe(){
    image.setAttribute ("src", "https://the-talks.com/wp-content/uploads/2011/11/Leonardo-Dicaprio-01.jpg");
    text.textContent="He will become a successful artist ";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}
}
function England(){
    image.setAttribute ("src","https://i.pinimg.com/originals/1f/6f/46/1f6f469d5ca72ff19c7ba87205c67144.jpg");
    text.textContent="He will find Love of his life and they will live long and happy!";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function tragic(){
    image.setAttribute("src","https://hips.hearstapps.com/hmg-prod/images/mv5bntcxntrindyty2e4my00zdu3lwixndetmtq2otjhmdu0yzqxxkeyxkfqcgdeqxvymzq3nzk5mtuat-v1-sy1000-sx1500-al-1563372401.jpg");
    text.textContent="He will meet his Love of his life and they will die together on the cruise ship ";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}
