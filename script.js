let productsContainer = document.getElementById('productsContainer');

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {
    let products = json.products;
    products.forEach((product) => {
        // console.log(product);
        let productCard = document.createElement('div');
        let title = document.createElement('h1');
        let brand = document.createElement('h3');
        let description = document.createElement('p');
        let price = document.createElement('div');
        let img = document.createElement('img');
        let btn = document.createElement(`div`)
        title.innerHTML=`${product.title}`
        brand.innerHTML=`${product.brand}`
        description.innerHTML=`${product.description}`
        price.innerHTML=`${product.price}`
        btn.innerHTML=`<button>Add to Cart</button>`
        img.setAttribute('src', product.thumbnail);
        img.style.width = '100%';
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(brand);
        productCard.appendChild(description);
        productCard.appendChild(price);
        productCard.appendChild(btn);
        productsContainer.appendChild(productCard);
    });
})