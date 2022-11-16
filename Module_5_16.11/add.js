
const changeGrayColor = document.getElementById('input1');
changeGrayColor.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'gray';

    setTimeout(() => {
        event.target.style.backgroundColor = '';
    },1000);
}, false);


const greenColor = document.getElementById('input1');
greenColor.addEventListener('click', (e) => {
    e.target.style.backgroundColor = '#5abe85'
})

const changeColorGray = document.getElementById('input2');
changeColorGray.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'gray';

    setTimeout(() => {
        e.target.style.backgroundColor = '';
    }, 1000);
}, false);

const colorGreen = document.getElementById('input2');
colorGreen.addEventListener('click', (e) => {
    e.target.style.backgroundColor = '#5abe85'
})

const changeWord = document.getElementById('btn');
changeWord.onclick = function() {
    changeWord.innerHTML = 'Отправлено!';
    changeWord.style.color = 'red';
}

const wideWidth = document.getElementById('cub');
wideWidth.addEventListener('mousedown', (e) => {
    e.target.style.width = '3000px';
    e.target.style.transition = 'ease 10s'
})

const reduceWidth = document.getElementById('cub');
reduceWidth.addEventListener('mouseup', (e) => {
    e.target.style.width = '100px';
    e.target.style.transition = 'ease 3s'
})
