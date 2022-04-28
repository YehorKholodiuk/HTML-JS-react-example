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
        id: 'id1',
        title: "learn JS",
        done: true,
    },
    {
        id: 'id2',
        title: "learn React, and get a Job!!!",
        done: false,
    },

]

const listElement = document.getElementById('list')
const todoInput = document.getElementById('ToDoInput')

function Render() {
    listElement.innerHTML = null;
    list.forEach(el => {
            const listItem = document.createElement('li');
            listItem.setAttribute('class', el.done ? 'done' : 'progress')
            const listItemText = document.createTextNode(el.title)
            listItem.appendChild(listItemText)

            const buttonItem = document.createElement('button');
            buttonItem.setAttribute('id', el.id)
            const buttonItemText = document.createTextNode('Done')
            buttonItem.appendChild(buttonItemText)
            listItem.appendChild(buttonItem)
            listElement.appendChild(listItem)
        }
    );
}

Render();

listElement.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const id = event.target.id
        console.log(typeof id)
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) list[i].done = !list[i].done;
        }
        console.log(list)
        Render()
    }

})

function addToList() {
    const todoInputValue = todoInput.value;
    //console.log(v)
    list.push({
        id: Math.random().toString(),
        title: todoInputValue,
    })
    console.log(list)
    localStorage.setItem('list',JSON.stringify(list))
    Render();

    todoInput.value = '';
}
