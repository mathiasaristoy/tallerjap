function login() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === "" || password === "") {
        document.getElementById('email').classList.add('is-invalid');
        document.getElementById('password').classList.add('is-invalid');
    } else {
        localStorage.setItem('email', email);
        location.href= 'inicio.html'
    }
}



    document.addEventListener('DOMContentLoaded', () => {

        document.getElementById('btn').addEventListener('click', () => {
            login();
        })
    })