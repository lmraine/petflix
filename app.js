//find all buttons that are FAQ questions
//for every button execute code when clicked
//find sibling to add or subtract closed class for that element

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {
    button.addEventListener('click', e => {
        answerDiv = e.target.parentElement.nextElementSibling;
        answerDiv.classList.toggle("closed");
    });
});