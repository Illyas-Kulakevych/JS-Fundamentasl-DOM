// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npx jest task2.test.js


function applyStyles() {
    const bigTitle = document.getElementById('title');
    bigTitle.style.backgroundColor = 'lightgreen';
    const myDivElement = document.getElementById('myDiv');
    const paragraphs = myDivElement.querySelectorAll('p');
    paragraphs[0].style.fontWeight = '700';;
    paragraphs[1].style.color = 'red';
    paragraphs[2].style.textDecoration = 'underline';
    paragraphs[3].style.fontStyle = 'italic';

    const myUl = document.getElementById('myList');
    myUl.style.display = 'flex'; 
    myUl.style.listStyle = 'none';
    document.querySelector('div.style_elements span').style.display = 'none';
}

module.exports = applyStyles;

