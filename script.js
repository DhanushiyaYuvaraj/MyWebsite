let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('menu');
    navbar.classList.toggle('active');
};

const themeToggleBtn = document.getElementById('theme-toggle')
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.about-container,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.intro-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.intro-content',{origin:'right'});

// CHATBOT

const chatbox = document.getElementById('chat');
const userInput = document.getElementById('userInput');
const responses = {
    'hey':'Hi there! How can I assist you?',
    'hi':'Hi there! How can I assist you?',
    'hello': 'Hi there! How can I assist you?',
    'bye': 'Goodbye! Have a wonderful day!',
    'thank you':'My pleasure',
    'thanks':'My Welcome',
    'do you know about dhanushiya':'You can check out this portfolio to know about dhanushiya',
    'dhanushiya':'You can check out this portfolio to know about dhanushiya',
    'how to contact':'send me message through contact me. I will contact you'
};

function sendMessage() {
    const message = userInput.value;
    displayMessage('You: ' + message);
    getResponse(message.toLowerCase());
    userInput.value = '';
}

function displayMessage(message) {
    const div = document.createElement('div');
    div.innerText = message;
    chatbox.appendChild(div);
}

function getResponse(message) {
    const response = responses[message] || "I'\m sorry, I don't understand that.";
    displayMessage('Dhanushiya: ' + response);
}
