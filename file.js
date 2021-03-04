// 1. Создайте и добавьте с помощью JS между блоками one и three, div, внутри которого будет курсивный текст “dolor sit amet”;
let one = document.getElementById('one');
let newElement = document.createElement('div');
newElement.innerHTML = 'dolor sit amet';
newElement.style.fontStyle = 'italic';
one.after(newElement);

// 2. Добавьте для этого дива атрибут id со значением two. 
newElement.id = 'two';

// 3. Добавьте в начала списка элемент li с тектом html
let three = document.getElementById('three').nextElementSibling;
let newThree = document.createElement('li');
newThree.innerHTML = 'html';
three.prepend(newThree);

// 4. Добавьте в список элемент li с тектом js между элементами git и react
let four = document.getElementById('three').nextElementSibling.lastElementChild;
let newFour = document.createElement('li');
newFour.innerHTML = 'js';
four.before(newFour);

// 5. Удалите div с классом “zero”
document.getElementById('one').previousElementSibling.remove();

// 6. Каждому из трех оставшихся дивов задайте свой фоновый цвет

let divOne = document.getElementById('one');
divOne.style.backgroundColor = 'red';

let divTwo = document.getElementById('two');
divTwo.style.backgroundColor = 'green';

let divThree = document.getElementById('three');
divThree.style.backgroundColor = 'yellow';

// 7. Уберите маркеры у списка (свойство: `list-style: none;`)
let seven = document.getElementById('three').nextElementSibling;
seven.style.listStyleType = 'none';

// 8. К диву с классом “main” добавьте класс “container”
let eight = document.body.firstElementChild;
eight.classList.add('container');