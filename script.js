const products = [
    { name: "Laptop", price: 55000 },
    { name: "Headphones", price: 2000 },
    { name: "Smartphone", price: 25000 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

const productGrid = document.getElementById("productGrid");
const sortSelect = document.getElementById("sortSelect");

// Render Products
function displayProducts(productList) {
    productGrid.innerHTML = "";

    productList.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
        `;
        productGrid.appendChild(card);
    });
}

// Sort Products
sortSelect.addEventListener("change", () => {
    let sortedProducts = [...products];

    switch (sortSelect.value) {
        case "priceLow":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;

        case "priceHigh":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;

        case "nameAZ":
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    displayProducts(sortedProducts);
});

// Initial Load
displayProducts(products);
