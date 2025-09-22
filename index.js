// Class Kendaraan sebagai kelas dasar
class Kendaraan {
    constructor(brand, model, tahun, jenis) {
        this.brand = brand;
        this.model = model;
        this.tahun = tahun;
        this.jenis = jenis;
    }
}

// Subclass Mobil dan Motor yang mewarisi dari Kendaraan
class Mobil extends Kendaraan {
    constructor(brand, model, tahun, warna) {
        super(brand, model, tahun, 'mobil');
        this.warna = warna;
    }
}

// Subclass Motor yang mewarisi dari Kendaraan
class Motor extends Kendaraan {
    constructor(brand, model, tahun, tipe) {
        super(brand, model, tahun, 'motor');
        this.tipe = tipe;
    }
}

// Class Pelanggan untuk menyimpan informasi pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa = null) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    // Metode untuk mendapatkan info pelanggan
    getInfo() {
        if (this.kendaraanDisewa) {
            let detailKendaraan = '';
            if (this.kendaraanDisewa.jenis === 'mobil') {
                detailKendaraan = `Mobil ${this.kendaraanDisewa.brand} ${this.kendaraanDisewa.model} (${this.kendaraanDisewa.tahun}) - Warna: ${this.kendaraanDisewa.warna}`;
            } else {
                detailKendaraan = `Motor ${this.kendaraanDisewa.brand} ${this.kendaraanDisewa.model} (${this.kendaraanDisewa.tahun}) - Tipe: ${this.kendaraanDisewa.tipe}`;
            }
            return `Nama: ${this.nama}, Nomor Telepon: ${this.nomorTelepon}, ${detailKendaraan}`;
        } else {
            return `Nama: ${this.nama}, Nomor Telepon: ${this.nomorTelepon}, Tidak sedang menyewa`;
        }
    }

    // Metode untuk menampilkan transaksi
    transaksi() {
        // Menampilkan detail transaksi hanya jika pelanggan sedang menyewa kendaraan
        if (this.kendaraanDisewa !== null) {
            console.log(`Transaksi Penyewaan Kendaraan`);
            console.log(`Nama Pelanggan: ${this.nama}`);
            console.log(`Nomor Telepon: ${this.nomorTelepon}`);
            
            // Menampilkan detail kendaraan
            if (this.kendaraanDisewa.jenis === 'mobil') {
                console.log(`Jenis Kendaraan: Mobil`);
                console.log(`Brand: ${this.kendaraanDisewa.brand}`);
                console.log(`Model: ${this.kendaraanDisewa.model}`);
                console.log(`Tahun: ${this.kendaraanDisewa.tahun}`);
                console.log(`Warna: ${this.kendaraanDisewa.warna}`);
            } else if (this.kendaraanDisewa.jenis === 'motor') {
                console.log(`Jenis Kendaraan: Motor`);
                console.log(`Brand: ${this.kendaraanDisewa.brand}`);
                console.log(`Model: ${this.kendaraanDisewa.model}`);
                console.log(`Tahun: ${this.kendaraanDisewa.tahun}`);
                console.log(`Tipe: ${this.kendaraanDisewa.tipe}`);
            }
            console.log(`-------------------------------`);
        } else {
            console.log(`${this.nama} tidak sedang menyewa kendaraan.`);
        }
    }
}

// Class SistemTransportasi untuk menyimpan daftar pelanggan
class SistemTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    // Metode untuk menambah pelanggan
    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    // Metode untuk menampilkan SEMUA pelanggan
    tampilkanSemuaPelanggan() {
        console.log('\n=== DAFTAR SEMUA PELANGGAN ===');
        
        // Cek jika tidak ada pelanggan
        if (this.daftarPelanggan.length === 0) {
            console.log('Tidak ada pelanggan dalam sistem.');
            return;
        }

        console.log(`Total pelanggan: ${this.daftarPelanggan.length}`);
        
        // looping menampilkan daftar pelanggan
        this.daftarPelanggan.forEach((pelanggan, index) => {
            console.log(`${index + 1}. ${pelanggan.getInfo()}`);
        });
    }
}

console.log('=== SISTEM TRANSPORTASI ===');

// Membuat instance sistem transportasi
const sistemTransportasi = new SistemTransportasi();

// Membuat objek kendaraan
const mobil1 = new Mobil('Toyota', 'Avanza', 2020, 'Silver');
const mobil2 = new Mobil('Suzuki', 'Ertiga', 2019, 'Putih');
const mobil3 = new Mobil('Honda', 'Brio', 2022, 'Hitam');
const motor1 = new Motor('Honda', 'Beat', 2021, 'Matic');
const motor2 = new Motor('Yamaha', 'Fino', 2020, 'Matic');
const motor3 = new Motor('Suzuki', 'Vixion', 2019, 'Matic');

// Membuat pelanggan yang sedang menyewa kendaraan
const pelanggan1 = new Pelanggan('Wahyu', '08124323421', mobil1);
const pelanggan2 = new Pelanggan('Arya', '08124945823', motor1);
const pelanggan3 = new Pelanggan('Raka', '08235453345', mobil2);

// Membuat pelanggan yang menyewa kendaraan
const pelanggan4 = new Pelanggan('Higa', '08235451001');
const pelanggan5 = new Pelanggan('Andre', '08122345611');
const pelanggan6 = new Pelanggan('Fahmi', '08456423438');

// Menambahkan semua pelanggan ke sistem
sistemTransportasi.tambahPelanggan(pelanggan1);
sistemTransportasi.tambahPelanggan(pelanggan2);
sistemTransportasi.tambahPelanggan(pelanggan3);
sistemTransportasi.tambahPelanggan(pelanggan4);
sistemTransportasi.tambahPelanggan(pelanggan5);
sistemTransportasi.tambahPelanggan(pelanggan6);

// Menampilkan detail transaksi pelanggan
console.log('\n=== DETAIL TRANSAKSI PELANGGAN ===');
pelanggan1.transaksi();
pelanggan2.transaksi();
pelanggan3.transaksi();
pelanggan4.transaksi();
pelanggan5.transaksi();
pelanggan6.transaksi();

// Menampilkan semua pelanggan
sistemTransportasi.tampilkanSemuaPelanggan();