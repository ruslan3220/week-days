
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elHeading = document.querySelector(".heading");
let elResult = document.querySelector(".result");


elForm.addEventListener ("submit", function(evt){

    evt.preventDefault();

    let inputValue = elInput.value;

    let box;

     if(inputValue === "1") {
         box = "Dushanba";
     } else if(inputValue  ==="2") {
         box = "Seshanba";
     } else if(inputValue  === "3") {
         box = "Chorshanba";
     } else if(inputValue === "4") {
         box = "Payshanba";
     } else if(inputValue === "5") {
         box = "Juma";
     } else if(inputValue === "6") {
         box = "Shanba";
     } else if(inputValue === "7") {
         box = "Yakshanba";
     } else {
         box = "Iltimos 1 dan 7 gacha sonlarni kiriting!!!"
     }

     elResult.textContent = `${box}`;
    })