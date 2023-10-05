let saveMessage = document.getElementsByClassName('popUpSave')[0];
let main = document.getElementsByTagName('main')[0];
let btnCon = document.getElementById('btnConfirm');
let btnSave = document.getElementsByClassName('btnSave')[0];
let btnCancel = document.getElementsByClassName('btnCancel')[0];

btnCon.addEventListener('click', (e) => {
    console.log('dwjobc');
    saveMessage.style.display = 'flex';
    main.style.filter = 'blur(3px)';
    document.body.classList.add('stop-scrolling');
    // main.style.overflow = 'hidden';
});

btnSave.addEventListener('click', () => {
    location.href = './index.html';
})

btnCancel.addEventListener('click', () => {
    saveMessage.style.display = 'none';
    main.style.filter = 'blur(0)';
    document.body.classList.remove("stop-scrolling");
})
