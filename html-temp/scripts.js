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

function plus(){
document.getElementById('counter').innerText =
    Number(document.getElementById('counter').innerText) + 1;
}
function minus(){

}
function reset(){
document.getElementById('counter').innerText = 0;
}
