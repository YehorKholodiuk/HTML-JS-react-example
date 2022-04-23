console.log('---JS---')

const titles = document.getElementsByTagName('h2')
const  idOne = document.getElementById('one')
console.log(idOne.innerText)
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
