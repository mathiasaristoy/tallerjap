const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL =
  "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL =
  "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
};

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
};

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = "ok";
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = "error";
      result.data = error;
      hideSpinner();
      return result;
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const email = localStorage.getItem("email");
  if (!email) {
    alert("Debe iniciar sesión para poder continuar en el sitio");
    location.href = "login.html";
  }
  document.getElementById("dropdownMenuButton1").innerHTML = email;
  document.getElementById("inputEmail").value = email;

  const name = localStorage.getItem("name");
  const lastname = localStorage.getItem("lastname");
  const middleName = localStorage.getItem("middlename");
  const secondLastName = localStorage.getItem("secondlastname");
  const phone = localStorage.getItem("phone");

  document.getElementById("inputEmail").value = email;
  document.getElementById("inputName").value = name;
  document.getElementById("inputLastname").value = lastname;
  document.getElementById("inputMiddleName").value = middleName;
  document.getElementById("inputeSecondLastname").value = secondLastName;
  document.getElementById("inputPhone").value = phone;
});

const dropdown = `

  
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="cart.html">Carrito </a>
      <li><a class="dropdown-item" href="my-profile.html">Perfil</a>
      <li><a class="dropdown-item" href="login.html">Cerrar sesión</a></li>
    </ul>
  </div>
 
  `;
document.getElementById("dropdownMenu").innerHTML = dropdown;
