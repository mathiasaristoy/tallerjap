MUST_LOGIN

const ORDER_ASC_BY_PRICE = "1-9";
const ORDER_DESC_BY_PRICE = "9-1";
const ORDER_BY_COUNT = "Cant.";
let products = [];
let currentSortCriteria = undefined;
let minPrice = undefined;
let maxPrice = undefined;

function sortProducts(criteria, products) {
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE) {
        result = products.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_PRICE) {
        result = products.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_COUNT) {
        result = products.sort(function (a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;
}


function showProductsList() {
    let htmlContentToAppend = "";

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        if (((minPrice == undefined) || (minPrice != undefined && parseInt(product.cost) >= minPrice)) &&
            ((maxPrice == undefined) || (maxPrice != undefined && parseInt(product.cost) <= maxPrice))) {

            htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="${product.image}" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>${product.name} - ${product.currency}${product.cost}</h4> 
                        <p> ${product.description}</p> 
                        </div>
                        <small class="text-muted">${product.soldCount} vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        }
        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }
}


function sortAndShowProducts(sortCriteria, productList) {
    currentSortCriteria = sortCriteria;

    if (productList != undefined) {
        products = productList;
    }

    products = sortProducts(currentSortCriteria, products);


    showProductsList();
}


document.addEventListener("DOMContentLoaded", function (e) {
    let catID = localStorage.getItem("catID")


    getJSONData(PRODUCTS_URL + catID + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            products = resultObj.data.products;
            showProductsList();
            showProductsList(resultObj.data.products);
        }
    });
});

document.getElementById("sortAsc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_ASC_BY_PRICE);
});

document.getElementById("sortDesc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_DESC_BY_PRICE);
});

document.getElementById("sortByCount").addEventListener("click", function () {
    sortAndShowProducts(ORDER_BY_COUNT);
});

document.getElementById("clearRangeFilter").addEventListener("click", function () {
    document.getElementById("rangeFilterPriceMin").value = "";
    document.getElementById("rangeFilterPriceMax").value = "";

    minPrice = undefined;
    maxPrice = undefined;

    showProductsList();
});

document.getElementById("rangeFilterPrice").addEventListener("click", function () {

    minPrice = document.getElementById("rangeFilterPriceMin").value;
    maxPrice = document.getElementById("rangeFilterPriceMax").value;

    if ((minPrice != undefined) && (minPrice != "") && (parseInt(minPrice)) >= 0) {
        minPrice = parseInt(minPrice);
    }
    else {
        minPrice = undefined;
    }

    if ((maxPrice != undefined) && (maxPrice != "") && (parseInt(maxPrice)) >= 0) {
        maxPrice = parseInt(maxPrice);
    }
    else {
        maxPrice = undefined;
    }

    showProductsList();
});
;

