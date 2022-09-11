function showProductInfo(product) {

    const htmlContentToAppend = `
    <div><br>
    <h4>${product.name}</h4>
    <hr>
    <p> <strong>Precio</strong> <br>${product.currency} ${product.cost}</p>
    <p><strong>Descripción</strong> <br>${product.description}</p>
    <p><strong>Categoría</strong> <br>${product.category}</p>
    <p><strong>Cantidad de vendidos</strong><br>${product.soldCount}</p>
    <p><strong>Imágenes ilustrativas</strong></p> 
    <div class="row">
    ${product.images.map(img => `<div class="col-3"><img src="${img}" class="img-thumbnail" alt="..."></div>`).join('')}
    </div>
    </div>
      `
    document.getElementById("prod-info-container").innerHTML = htmlContentToAppend;
}

function showProductComment(comments) {

    const htmlContentToAppend = `
    <div><br><br>
        <h5>Comentarios</h5>
        ${comments.map(comment => `<li class="list-group-item"><strong>${comment.user}</strong> - ${comment.dateTime} - ${rateStars(comment.score)}<br>${comment.description}</li>`).join('\n')};
     </div>
       `
    document.getElementById("prod-comment-container").innerHTML = htmlContentToAppend;
}
document.addEventListener("DOMContentLoaded", function (e) {
    let prodID = localStorage.getItem("prodID")


    getJSONData(PRODUCT_INFO_URL + prodID + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            const product = resultObj.data;
            showProductInfo(product);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL + prodID + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            const product = resultObj.data;
            showProductComment(product);
        }
    });
});

function rateStars(score) {

    let stars = ""

    for (let i = 0; i < 5; i++) {

        stars +=
            (i < score) ?
                `<span class="fa fa-star checked"></span>`
                :
                `<span class="fa fa-star "></span>`
    }

    return stars
}

