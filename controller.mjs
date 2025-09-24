// Import default data
import users from "./data.mjs"

// Fungsi untuk menampilkan seluruh data
const index = () => {
    console.log("\nSemua Data Users: ");
    
    // Nomor urut
    let idx = 1;

    // Looping data users
    users.map((user) => {
        console.log(`${idx++}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}`);
    });
};

// Fungsi untuk menambahkan data
const store = (user) => {
    // Menambah data dengan method push
    users.push(user);

    console.log("\nMenambahkan Data User: ");
    console.log(`User dengan nama ${user.nama} berhasil ditambahkan.`);
};

// Fungsi untuk menghapus data
const destroy = (nama) => {
    // Cari indeks user berdasarkan nama
    const idx = users.findIndex(user => user.nama === nama);
    
    // Jika user ditemukan, hapus dari array
    if (idx !== -1) {
        users.splice(idx, 1);
        console.log("\nMenghapus Data User: ");
        console.log(`User dengan nama ${nama} berhasil dihapus.`);
    } else {
        console.log(`\nUser dengan nama ${nama} tidak ditemukan.`);
    }
    index();
};

// Export fungsi
export { index, store, destroy };