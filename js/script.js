let email = document.getElementById('email').value;

const btn = document.getElementById('button');
const form = document.getElementById('form');
const content = document.getElementById('main-content');

document.addEventListener('keypress', () =>{
    let email = document.getElementById('email').value;

    if(email != null && !email.includes("@") || !email.includes(".com")){
        btn.classList.add('active-btn');
        form.classList.add('active-form');
        content.classList.add('active-content');
        console.log("FALSE");
    }else{
        btn.classList.remove('active-btn');
        form.classList.remove('active-form');
        content.classList.remove('active-content');
        console.log("TRUE");
    }
});