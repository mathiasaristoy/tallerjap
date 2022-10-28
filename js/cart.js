let array = [] 
let total = 0

function cart(articles) {
  array = [...articles]
  let htmlContentToAppend = ""
  for (let i = 0; i < articles.length; i++) {

    const article = articles[i];
      

    htmlContentToAppend +=`
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
    `
  document.getElementById("cart").innerHTML = htmlContentToAppend; 

    const htmlContentToAppend2=

    `<ul class="list-group">
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
  </ul>`

    document.getElementById("costs").innerHTML = htmlContentToAppend2
  

  
}}

  function finalCost (event, articleID){
   
    array.find(article => article.id === articleID)
    let cost = array[0].unitCost;
    let count = event.value ;  
    total = parseInt(cost) * parseInt(count);
    document.getElementById('finalCost').innerHTML = total
    document.getElementById('subtotal').innerHTML = total
    
    let shippingCost = parseFloat(document.querySelector("input[name=shipping]:checked").value);  
    let percentage = shippingCost * total;
    document.getElementById('shippingCost').innerHTML = percentage
   
    let finalTotal = total + percentage
    document.getElementById('finalTotal').innerHTML = finalTotal
  }

  function paymentValidation(){
    const card = document.getElementById('card');
    const transfer = document.getElementById('transfer')
    const inputcard = document.getElementById('cr_no')
    const inputexp = document.getElementById('exp')
    const inputcvv = document.getElementById('cvv')
    const inputacc = document.getElementById('acc_no')

   if (card.checked){
    inputacc.disabled = true
    inputcard.disabled = false
    inputexp.disabled = false
    inputcvv.disabled = false
   }

   if(transfer.checked){
    inputacc.disabled = false
    inputcard.disabled = true
    inputexp.disabled = true
    inputcvv.disabled = true
   }

  }

  function buy(){

    
  }
  
  

document.addEventListener("DOMContentLoaded", function (e) {

   getJSONData(CART_INFO_URL + 25801 + EXT_TYPE).then(function (resultObj) {
      if (resultObj.status === "ok") {
          const {articles} = resultObj.data ;
          cart(articles);
      }
  });
 
});


