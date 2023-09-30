let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const themeToggleBtn = document.getElementById('theme-toggle')
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme'); // Add or remove 'dark-theme' class to body
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

    header.classList.toggle('sticky',window.screenY>100);
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
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

// Selecting elements
const chatbox = document.getElementById('chat');
const userInput = document.getElementById('userInput');

// Chatbot responses
const responses = {
    'hello': 'Hi there! How can I help you?',
    'bye': 'Goodbye! Have a great day!',
    // Add more responses here
};

// Function to send a message
function sendMessage() {
    const message = userInput.value;
    // Display user message
    displayMessage('You: ' + message);
    // Get chatbot response
    getResponse(message.toLowerCase());
    // Clear user input
    userInput.value = '';
}

// Function to display messages in the chat window
function displayMessage(message) {
    const div = document.createElement('div');
    div.innerText = message;
    chatbox.appendChild(div);
}

// Function to get chatbot response based on user input
function getResponse(message) {
    const response = responses[message] || "I'\m sorry, I don't understand that.";
    displayMessage('Chatbot: ' + response);
}
