// Smooth Scrolling

document.querySelectorAll(".nav-links a").forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});
});
});


// Dark Mode Toggle

const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});


// Contact Form Validation

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let msg = document.getElementById("message").value.trim();

if(name.length < 3){
message.textContent="Please enter a valid name.";
return;
}

if(!email.includes("@")){
message.textContent="Please enter a valid email.";
return;
}

if(msg.length < 10){
message.textContent="Message must be at least 10 characters.";
return;
}

message.textContent="Message sent successfully!";
form.reset();

});
