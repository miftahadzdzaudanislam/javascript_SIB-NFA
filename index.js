// List Produk
let productList = [
    { id: 1, name: "Laptop", price: 6000000 },
    { id: 2, name: "handphone", price: 2000000 },
    { id: 3, name: "Tablet", price: 5000000 },
    { id: 4, name: "Monitor", price: 8000000 },
    { id: 5, name: "Keyboard", price: 500000 },
]

// Fungsi menambah produk dengan spread operator
const addProduct = (id, name, price) => {
    productList = [...productList, { id, name, price }];
}

// Fungsi menghapus produk dengan rest parameter
const removeProduct = (...id) => {
    productList = productList.filter(product => !id.includes(product.id));
}

// Fungsi menampilkan produk dengan destructuring
const viewProducts = () => {
    for (const { id, name, price } of productList) {
        console.log(`${id}. ${name} - Rp ${price}`);
    }
}

// Menampilkan semua produk
console.log("Menampilkan semua produk:");
viewProducts();

// Menambah produk baru
console.log("\nMenambah produk baru:");
addProduct(6, "Mouse", 90000);
viewProducts();

// Menghapus produk dengan id
console.log("\nMenghapus produk:");
removeProduct(2);
viewProducts();