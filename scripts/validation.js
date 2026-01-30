$(document).ready(function(){

$("#contactForm").submit(function(e){
e.preventDefault();

let name = $("#name").val().trim();
let email = $("#email").val().trim();
let message = $("#message").val().trim();
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name === "" || email === "" || message === ""){
$("#formMessage").css("color","red").text("All fields are required.");
return;
}

if(!emailPattern.test(email)){
$("#formMessage").css("color","red").text("Enter a valid email.");
return;
}

if(message.length < 10){
$("#formMessage").css("color","red").text("Message too short.");
return;
}

$("#formMessage").css("color","green").text("Message sent!");
$("#contactForm")[0].reset();

});

});
