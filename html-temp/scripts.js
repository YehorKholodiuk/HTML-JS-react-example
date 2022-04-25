console.log('---JS---')

const titles = document.getElementsByTagName('h2')
const  idOne = document.getElementById('one')
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
function minusOne(){
    console.log(--i)
};

const counterSelector = document.getElementById('counter')

function plus(){
counterSelector.innerText =
    Number(document.getElementById('counter').innerText) + 1;
}
function minus(){
    counterSelector.innerText =
        Number(document.getElementById('counter').innerText) - 1;
}
function reset(){
counterSelector.innerText = 0;
}
const list = [
    {  id:1,
    title:"learn JS"
},
{
    id:2,
        title:"learn React, and get a Job!!!"
},

]

function Render(){
    list.forEach( el => {
            const listItem = document.createElement('li');
            const listItemText = document.createTextNode(el.title)
            listItem.appendChild(listItemText)
            document.getElementById('list').appendChild(listItem)
        }
    );
}
Render();
function addToList(){
    const toDoInputValue = document.getElementById('ToDoInput').value;
    //console.log(v)
    list.push({
        id:Math.random(),
        title:toDoInputValue
    })
    console.log(list)
    document.getElementById('list').innerHTML = null;
    Render();
}
