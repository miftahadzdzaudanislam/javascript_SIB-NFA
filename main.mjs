// Import Controller
import { destroy, index, store } from "./controller.mjs"

// Fungsi untuk main app
const main = () => {
    // Menambah data
    store("Al", 25, "Jl. Penonton No. 7");
    store("Miti", 50, "Jl. Batbot No. 8");
    
    // Menampilkan data
    index();

    // Menghapus data
    destroy("Yanto");
}

main();