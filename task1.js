// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку, в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінн secondEl
// четвертний елемент - змінна fourthEl
//третій елемент - змінна thirdEl
// для перевірки завдання запустити команду npx jest task1.test.js

const list = document.getElementById("list");

const firstEl = list.firstElementChild;
const lastEl = list.lastElementChild;
const secondEl = list.children[1];
const fourthEl = list.children[3];
const thirdEl = list.children[2];

module.exports = {
  firstEl,
  lastEl,
  secondEl,
  fourthEl,
  thirdEl,
};

