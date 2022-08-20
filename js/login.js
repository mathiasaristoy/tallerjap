
function login() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === "") {
        document.getElementById('email').classList.add('is-invalid');
    }
    else { document.getElementById('email').classList.remove('is-invalid'); }
    if (password === "") {
        document.getElementById('password').classList.add('is-invalid');
    }
    else { document.getElementById('password').classList.remove('is-invalid'); }

    

    if (email === "" || password === "")
        return
        sessionStorage.setItem('email', 'mail');
        location.href = 'index.html'
    
}




document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btn').addEventListener('click', () => {
        login();

    })

    
})


