console.log('---JS---')

const titles = document.getElementsByTagName('h2')
const  idOne = document.getElementById('one')
const idTwo = document.getElementById('two')
console.log(idOne.innerText)
console.log(idTwo.innerText)
for (let i = 0; i < titles.length; i++) {
 console.log(titles[i])
}
let i = 5;

function plusOne() {
    console.log(++i)
};
function minusOne(){
    console.log(--i)
};
