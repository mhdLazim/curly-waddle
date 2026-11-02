fetch("https://dummyjson.com/products/")
.then(response => response.json())
.then(data => {
    let products = data.products;

    products.sort((a, b) => a.id - b.id);

    console.log(products);
})
.catch(error => {
    console.log(error);
});