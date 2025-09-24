// Import Controller
import { destroy, index, store } from "./controller.mjs"

// Fungsi untuk main app
const main = () => {
    // Data user baru
    const user1 = {nama: "Al", umur: 25, alamat: "Jl. Penonton No. 7", email: "al@example.com"};
    const user2 = {nama: "Miti", umur: 50, alamat: "Jl. Batbot No. 8", email: "miti@example.com"};

    // Menambah data
    store(user1);
    store(user2);

    // Menampilkan data
    index();

    // Menghapus data
    destroy("Yanto");
}

main();