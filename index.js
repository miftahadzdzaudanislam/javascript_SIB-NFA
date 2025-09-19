// Array data produk di toko
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
]

// Fungsi untuk menambah produk baru
let tambahProduk = (nama, harga, stok) => {
    let id = produkToko.length + 1; // Generate id baru
    let produkBaru = {id: id, nama: nama, harga: harga, stok: stok}; // Buat objek produk baru

    produkToko.push(produkBaru); // Tambahkan produk baru ke array
    console.log(`Produk ${nama}, dengan harga ${harga} berhasil ditambahkan.`);
    tampilkanProduk(); // Tampilkan daftar produk setelah penambahan
}

// Fungsi untuk menghapus produk berdasarkan id
let hapusProduk = (id) => {
    // Cari index produk berdasarkan id
    let index = produkToko.findIndex(produk => produk.id === id); 

    produkToko.splice(index, 1); // Hapus produk dari array
    console.log(`Produk dengan id ${id} berhasil dihapus.`);
    tampilkanProduk(); // Tampilkan daftar produk setelah penghapusan
}

// Fungsi untuk menampilkan semua produk
let tampilkanProduk = () => {
    console.log("Daftar Produk di Toko:");
    // Perulangan untuk menampilkan setiap produk
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`);
    });
}

// Penggunaan fungsi
tambahProduk("Monitor", 1500000, 8);
console.log();
hapusProduk(1);
console.log();
tampilkanProduk();