// alert('hi');
let iconLike = document.getElementById('iconLike');

document.getElementById('btnLike').addEventListener('click', (e) => {
    e.preventDefault();
    iconLike.style.color = 'blue';
})

// function btnDrop(){
//     document.getElementById('test').classList.toggle('show');
// }

// document.getElementsByClassName('btn-classes')[0].addEventListener('click', () => {
//     console.log('clicked!');
//     dropClass.style.display = 'block';
// })

// dropBtn = addEventListener(e)('click', () => {
// document.getElementsByClassName('classes-content');
// })

// window.onclick = (e) => {
//     // console.log('clicked!');
//     if(!e.target.matches('btn-classes')){
//         dropClass.classList.remove('show');
//     }
// }
