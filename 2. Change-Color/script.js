const changeBtn = document.getElementById('change-btn')
const body =  document.getElementById('body');

changeBtn.addEventListener('click', ()=>{
    changeBackground();
})

const changeBackground =()=>{
body.style.background = '#'+ Math.floor(Math.random() * 16777216).toString(16);
}