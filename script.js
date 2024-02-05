const form = document.querySelector('form');
const pw = document.getElementById('pw');
const confirmPw = document.getElementById('confirmpw');
const noMatch = document.getElementById('match')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    
    if (obj.pw !== obj.confirmpw) {
        noMatch.textContent = "*Passwords do not match"
        /* pw.classList.add('.nomatch');
        confirmPw.classList.add('.nomatch'); */
        pw.style.border = "rgb(211, 2, 2) solid 1.5px";
        confirmPw.style.border = "rgb(211, 2, 2) solid 1.5px"
        form.reset();
    } else {
        form.submit()
    }
})


