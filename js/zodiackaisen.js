const questions = document.querySelectorAll('li.q');

for (let i = 0; i < questions.length; i++) {
    questions[i].setAttribute('class', 'question');
}