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
    console.log(`\nMenambah produk ${name} dengan harga ${price}`);
    productList = [...productList, { id, name, price }];
}

// Fungsi menghapus produk dengan rest parameter
const removeProduct = (...id) => {
    console.log(`\nMenghapus produk pada id ${id}`);
    productList = productList.filter(product => !id.includes(product.id));
}

// Fungsi menampilkan produk dengan destructuring
const viewProducts = () => {
    console.log("Menampilkan semua produk pada");
    for (const { id, name, price } of productList) {
        console.log(`${id}. ${name} - Rp ${price}`);
    }
}

// Menampilkan semua produk
viewProducts();

// Menambah produk baru
addProduct(6, "Mouse", 90000);
viewProducts();

// Menghapus produk dengan id
removeProduct(2);
viewProducts();