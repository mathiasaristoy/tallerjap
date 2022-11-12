
function login() {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === ""|| !regex.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
    }
    else { document.getElementById('email').classList.remove('is-invalid'); }
    if (password === "") {
        document.getElementById('password').classList.add('is-invalid');
    }
    else { document.getElementById('password').classList.remove('is-invalid'); }

    

    if (email === "" || password === "")
        return
        localStorage.setItem('email', email);
        location.href = 'index.html';
        
    
}




document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btn').addEventListener('click', () => {
        login();

    })

    
})



