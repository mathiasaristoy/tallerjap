let array = [];
let total = 0;

function cart(articles) {
  array = [...articles];
  let htmlContentToAppend = "";
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    htmlContentToAppend += `
    <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Nombre</th>
        <th scope="col">Costo</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><img src="${article.image}" alt="Product image" width="50" height="auto"></th>
        <td>${article.name}</td>
        <td>${article.currency}   <span id="cost">${article.unitCost}</span></td>
        <td><input id="input" type="number" min="1" value="${article.count}" onchange="finalCost(this, ${article.id})" </td>
        <td><strong>${article.currency}</strong> <strong id="finalCost"></strong></td>
      </tr>
      </tr>
    </tbody>
  </table>
    `;
    document.getElementById("cart").innerHTML = htmlContentToAppend;

    const htmlContentToAppend2 = `<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Subtotal
      <span id="subtotal">${article.unitCost}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Costo de envío
      <span id="shippingCost"></span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Total
      <strong id="finalTotal"></strong>
    </li>
  </ul>`;

    document.getElementById("costs").innerHTML = htmlContentToAppend2;
  }
}

function finalCost(event, articleID) {
  array.find((article) => article.id === articleID);
  let cost = array[0].unitCost;
  let count = event.value;
  total = parseInt(cost) * parseInt(count);
  document.getElementById("finalCost").innerHTML = total;
  document.getElementById("subtotal").innerHTML = total;

  let shippingCost = parseFloat(
    document.querySelector("input[name=shipping]:checked").value
  );
  let percentage = shippingCost * total;
  document.getElementById("shippingCost").innerHTML = percentage;

  let finalTotal = total + percentage;
  document.getElementById("finalTotal").innerHTML = finalTotal;
}

function paymentValidation() {
  const card = document.getElementById("card");
  const transfer = document.getElementById("transfer");
  const inputcard = document.getElementById("cr_no");
  const inputexp = document.getElementById("exp");
  const inputcvv = document.getElementById("cvv");
  const inputacc = document.getElementById("acc_no");

  if (card.checked) {
    document.getElementById('paymentmethod').innerHTML = card.value
    inputacc.disabled = true;
    inputcard.disabled = false;
    inputexp.disabled = false;
    inputcvv.disabled = false;
  }

  if (transfer.checked) {
    document.getElementById('paymentmethod').innerHTML = transfer.value
    inputacc.disabled = false;
    inputcard.disabled = true;
    inputexp.disabled = true;
    inputcvv.disabled = true;
  }
}

document.getElementById('form').addEventListener("submit", function(event) {
  event.preventDefault();
  buy();
  
  document.querySelectorAll("input").forEach((input) => {
    input.onkeyup=() => buy()
    if (input.type === "radio"){
      input.onclick=()=>buy ()
    }
  })
});

function buy() {

  const street = document.getElementById('street');
  const corner = document.getElementById('corner');
  const door = document.getElementById('door');
  const premium = document.getElementById('premium');
  const express = document.getElementById('express');
  const standard = document.getElementById('standard');
  const card = document.getElementById('card');
  const transfer = document.getElementById('transfer');
  const selectPM = document.getElementById('selectPM')
  const cr_no = document.getElementById('cr_no');
  const exp = document.getElementById('exp');
  const cvv = document.getElementById('cvv');
  const acc_no = document.getElementById('acc_no');

  if (street.value === ""){
    street.classList.add("is-invalid");
    street.classList.remove("is-valid");
  }else{
    street.classList.add("is-valid");
    street.classList.remove("is-invalid");
  }

  if (corner.value === ""){
    corner.classList.add("is-invalid");
    corner.classList.remove("is-valid");
  }else{
    corner.classList.add("is-valid");
    corner.classList.remove("is-invalid");
  }

  if (door.value === ""){
    door.classList.add("is-invalid");
    door.classList.remove("is-valid");
  }else{
    door.classList.add("is-valid");
    door.classList.remove("is-invalid");
  }

  if(!premium.checked && !express.checked && !standard.checked){
    premium.classList.add("is-invalid");
    express.classList.add("is-invalid");
    standard.classList.add("is-invalid");
    premium.classList.remove("is-valid");
    express.classList.remove("is-valid");
    standard.classList.remove("is-valid");
  }else if(premium.checked){
    premium.classList.add('is-valid');
    premium.classList.remove("is-invalid");
    express.classList.remove("is-invalid");
    standard.classList.remove("is-invalid");
    express.classList.remove("is-valid");
    standard.classList.remove("is-valid");
  }else if(express.checked){
    express.classList.add('is-valid');
    express.classList.remove("is-invalid");
    premium.classList.remove("is-invalid");
    standard.classList.remove("is-invalid");
    premium.classList.remove("is-valid");
    standard.classList.remove("is-valid");
  }else if(standard.checked){
    standard.classList.add('is-valid');
    standard.classList.remove("is-invalid"); 
    premium.classList.remove("is-invalid");
    express.classList.remove("is-invalid");
    premium.classList.remove("is-valid");
    express.classList.remove("is-valid");       
  }


  if (!card.checked && !transfer.checked){
    selectPM.classList.add("is-invalid");
    selectPM.classList.remove("is-valid");
  }else if(card.checked){
    selectPM.classList.remove("is-invalid");
  }else if(transfer.checked){
    selectPM.classList.remove("is-invalid");
  }
  
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_URL + 25801 + EXT_TYPE).then(function (resultObj) {
    if (resultObj.status === "ok") {
      const { articles } = resultObj.data;
      cart(articles);
    }
  });
});



