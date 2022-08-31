document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});



document.addEventListener("DOMContentLoaded", ()=> {

    let email= sessionStorage.getItem("email");
    if(!email){
        alert("Debe iniciar sesión para poder continuar en el sitio")
        location.href = "login.html";
        
    }    
    document.getElementById('dropdownMenuButton1').innerHTML = email;
})


    