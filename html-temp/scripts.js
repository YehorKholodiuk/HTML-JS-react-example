console.log('---JS---')

const titles = document.getElementsByTagName('h2')
const idOne = document.getElementById('one')
const idTwo = document.getElementById('two')
console.log(idOne.innerText)
console.log(idTwo.innerText)
//for (let i = 0; i < titles.length; i++) {
// console.log(titles[i])
//}
let i = 5;
const subTitles = document.getElementsByClassName('Hello')
console.log(subTitles)

function plusOne() {
    console.log(++i)
};

function minusOne() {
    console.log(--i)
};

const counterSelector = document.getElementById('counter')

function plus() {
    counterSelector.innerText =
        Number(document.getElementById('counter').innerText) + 1;
}

function minus() {
    counterSelector.innerText =
        Number(document.getElementById('counter').innerText) - 1;
}

function reset() {
    counterSelector.innerText = 0;
}

const list = [
    {
        id: 1,
        title: "learn JS"
    },
    {
        id: 2,
        title: "learn React, and get a Job!!!"
    },

]

const listElement = document.getElementById('list')
const todoInput = document.getElementById('ToDoInput')

function Render() {
    list.forEach(el => {
            const listItem = document.createElement('li');
            const listItemText = document.createTextNode(el.title)
            listItem.appendChild(listItemText)

            const buttonItem = document.createElement('button');
            const buttonItemText = document.createTextNode('Done')
            buttonItem.appendChild(buttonItemText)
            listItem.appendChild(buttonItem)
            listElement.appendChild(listItem)
        }
    );
}

Render();

function addToList() {
    const todoInputValue = todoInput.value;
    //console.log(v)
    list.push({
        id: Math.random(),
        title: todoInputValue,
    })
    console.log(list)
    listElement.innerHTML = null;
    Render();

    todoInput.value = '';
}
