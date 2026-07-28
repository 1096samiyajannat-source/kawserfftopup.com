document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll("button");

  buttons.forEach(function(btn){

    if(btn.innerText.includes("BUY NOW")){

      btn.addEventListener("click", function(){

        let offer = this.parentElement.querySelector("h3").innerText;

        let uid = prompt("Enter Your Free Fire UID");

        if(!uid) return;

        let trx = prompt(
`Selected Offer:
${offer}

bKash: 01614156718
Nagad: 01742138790

Send Money করে Transaction ID লিখুন`
);

        if(!trx) return;

        alert(
`✅ Order Submitted

Offer: ${offer}
UID: ${uid}
Transaction ID: ${trx}

⚠️ যদি নির্ধারিত টাকার থেকে কম Send Money করেন তাহলে আপনার Order Cancel হতে পারে।

আপনার Order খুব দ্রুত Check করা হবে।`
);

      });

    }

  });

});
const savedUser = localStorage.getItem("userEmail");

if(savedUser){

const panel=document.getElementById("userPanel");
if(savedUser){

document.getElementById("userPanel").style.display="block";

document.getElementById("welcomeUser").innerHTML=
"👤 Welcome<br>"+savedUser;

}

function logoutUser(){

localStorage.removeItem("userEmail");
localStorage.removeItem("userPassword");

alert("Logout Successful");

window.location.href="login.html";

      }
document.addEventListener("DOMContentLoaded", function(){

let savedUser = localStorage.getItem("userEmail");

if(savedUser){

document.getElementById("userPanel").style.display="block";

document.getElementById("welcomeUser").innerHTML="👤 Welcome<br>"+savedUser;

}

});

function logoutUser(){

localStorage.removeItem("userEmail");
localStorage.removeItem("userPassword");

window.location.href="login.html";

  }
