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
        <td><input id="input" type="number" value="${article.count}" onchange="finalCost(this, ${article.id})" </td>
        <td><strong id="finalCost">${article.unitCost}</strong></td>
      </tr>
      </tr>
    </tbody>
  </table>
    `
  document.getElementById("cart").innerHTML = htmlContentToAppend; 

  
}}

  function finalCost (event, articleID){
   
    array.find(article => article.id === articleID)
    let cost = array[0].unitCost;
    let count = event.value ;  
    total = parseInt(cost) * parseInt(count);
    document.getElementById('finalCost').innerHTML = total
  }

document.addEventListener("DOMContentLoaded", function (e) {

   getJSONData(CART_INFO_URL + 25801 + EXT_TYPE).then(function (resultObj) {
      if (resultObj.status === "ok") {
          const {articles} = resultObj.data ;
          cart(articles);
      }
  });

});

