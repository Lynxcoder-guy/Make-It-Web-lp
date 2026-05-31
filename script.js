// ==========================================
// 1. DEKLARASI VARIABEL TOMBOL
// ==========================================
const lite_btn = document.getElementById("lite-btn");
const smart_btn = document.getElementById("smart-btn");
const multi_btn = document.getElementById("multi-btn");

const home_btn = document.getElementById("home-btn");
const service_btn = document.getElementById("service-btn");
const pros_btn = document.getElementById("pros-btn");
const contact_btn = document.getElementById("contact-btn");
// ==========================================
// 2. DEKLARASI ELEMEN YANG AKAN DIUBAH
// ==========================================
const nama_paket = document.getElementById("nama-paket");
// Kita ambil elemen <h2> harga yang berada di dalam #detail-paket
const harga_paket = document.querySelector("#detail-paket h2"); 

// Mengambil total 8 list <li> sekaligus dari kedua div kembar
const semua_paket = document.querySelectorAll('[id="Deskripsi-paket"] ul li, [id="deskripsi-paket"] ul li');

//==========================================
// FUNGSI PERUBAHAN WARNA TOMBOL
//==========================================
function backToNormal() {
    // Semua tombol dikembalikan ke gradient biru awal dan tulisan kembali putih
    lite_btn.style.backgroundImage = "linear-gradient(to right, #1c6ad4, #2483ff)";
    lite_btn.style.backgroundColor = "";
    lite_btn.style.color = "#ffffff";

    smart_btn.style.backgroundImage = "linear-gradient(to right, #1c6ad4, #2483ff)";
    smart_btn.style.backgroundColor = "";
    smart_btn.style.color = "#ffffff";

    multi_btn.style.backgroundImage = "linear-gradient(to right, #1c6ad4, #2483ff)";
    multi_btn.style.backgroundColor = "";
    multi_btn.style.color = "#ffffff";

    pro_btn.style.backgroundImage = "linear-gradient(to right, #1c6ad4, #2483ff)";
    pro_btn.style.backgroundColor = "";
    pro_btn.style.color = "#ffffff";
}

function changeColor(tombol) {
    backToNormal(); // Matikan warna tombol aktif yang sebelumnya
    tombol.style.backgroundImage = "none"; // Hilangkan gradient biru pada tombol aktif
    tombol.style.backgroundColor = "#bbff00"; // Pasang warna solid neon dengan string yang benar
    tombol.style.color = "#1f1f1f"; // Ubah teks tombol aktif menjadi hitam gelap
}


// ==========================================
// 3. FUNGSI UTAMA LOGIKA IF - ELSE IF
// ==========================================
function showLayanan(layanan_current) {
    
    if (layanan_current === "lite") {
        nama_paket.innerHTML = "Paket Lite Web";
        harga_paket.innerHTML = "Mulai dari 150K - 200K IDR <br><span style='font-size: 14px; font-weight: normal; color: #ccc;'>(Harga tergantung dengan panjang Website)</span>";


        // Mengganti warna tombol
        changeColor(lite_btn);
        
        semua_paket[0].innerHTML = "Solusi paling hemat untuk brosur digital standar bagi bisnis yang baru merintis.";
        semua_paket[1].innerHTML = "Menampilkan profil bisnis Anda secara statis (informasi tetap) namun tetap terlihat rapi dan terpercaya.";
        semua_paket[2].innerHTML = "Sangat pas jika Anda hanya ingin memajang foto portofolio tanpa membutuhkan efek animasi yang kompleks.";
        semua_paket[3].innerHTML = "Pilihan standar yang aman untuk sekadar menampilkan info dasar bisnis Anda";
        
        // 4 Baris Kedua: Apa yang akan anda dapatkan? (Indeks 4 - 7)
        semua_paket[4].innerHTML = "Informasi profil, jasa, dan kontak dalam satu alur praktis.";
        semua_paket[5].innerHTML = "Website statis interaktif yang ramah bagi bisnis kecil.";
        semua_paket[6].innerHTML = "Tombol WhatsApp atau email untuk respon pelanggan instan.";
        semua_paket[7].innerHTML = "Optimasi performa kecepatan akses tinggi guna kenyamanan pelanggan";
        
    } else if (layanan_current === "smart") {
        nama_paket.innerHTML = "Paket Smart Web";
        harga_paket.innerHTML = "Mulai dari 300K - 450K IDR <br><span style='font-size: 14px; font-weight: normal; color: #ccc;'>(Harga tergantung dengan panjang Website)</span>";

        // Mengganti warna tombol
        changeColor(smart_btn);
        
        // 4 Baris Pertama (Kenapa paket ini?)
        semua_paket[0].innerHTML = "Website terasa hidup, modern, dan sangat interaktif.";
        semua_paket[1].innerHTML = "Meningkatkan daya tarik produk utama lewat elemen dinamis.";
        semua_paket[2].innerHTML = "Pengalaman pengguna (UX) yang lebih menarik.";
        semua_paket[3].innerHTML = "Website terlihat lebih profesional seperti sistem kartu harga interaktif yang sedang Anda gunakan sekarang.";
        
        // 4 Baris Kedua (Apa yang akan anda dapatkan?)
        semua_paket[4].innerHTML = "Semua fitur Paket Lite page dengan satu halaman praktis & ramah HP.";
        semua_paket[5].innerHTML = "Sentuhan kodingan JavaScript murni untuk elemen interaktif di web.";
        semua_paket[6].innerHTML = "Fitur dinamis (seperti navigasi smooth, filter menu, atau toggle konten).";
        semua_paket[7].innerHTML = "Halaman website yang dinamis dan penyampaian informasi intraktif";

        } else if (layanan_current === "multi") {
    nama_paket.innerHTML = "Paket Multi-Page Web";
    // Harga tetap, tidak pakai rentang agar lebih profesional
    harga_paket.innerHTML = "Mulai dari 350K IDR <br><span style='font-size: 14px; font-weight: normal; color: #ccc;'>(Gratis 3 halaman pertama)</span>";

    // Mengganti warna tombol
    changeColor(multi_btn);
    
    // 4 Baris Pertama (Kenapa paket ini?)
    semua_paket[0].innerHTML = "Solusi tepat untuk memaparkan informasi bisnis dan portofolio secara mendalam.";
    semua_paket[1].innerHTML = "Ideal untuk memisahkan lini layanan agar lebih terorganisir bagi pengunjung.";
    semua_paket[2].innerHTML = "Navigasi lebih fokus dan terstruktur, menghindari scrolling yang melelahkan.";
    semua_paket[3].innerHTML = "Meningkatkan kredibilitas brand dengan struktur informasi yang profesional.";

    semua_paket[4].innerHTML = "Anda akan mendapatkan tiga halaman utama sebagai dasar website bisnis Anda.";
    semua_paket[5].innerHTML = "Anda bisa menambahkan halaman sebanyak yang dibutuhkan sesuai perkembangan bisnis.";
    semua_paket[6].innerHTML = "Tersedia pilihan halaman Lite yang sangat ringan (70K/halaman) atau halaman Smart yang interaktif (120k/halaman).";
    semua_paket[7].innerHTML = "Kami memberikan kebebasan bagi Anda untuk memilih teknologi tiap halaman tambahan sesuai kebutuhan dan anggaran.";    
}
}
// ==========================================
// 4. MENYAMBUNGKAN TOMBOL KE FUNGSI KLIK
// ==========================================
lite_btn.addEventListener("click", function() {
    showLayanan("lite");
});

smart_btn.addEventListener("click", function() {
    showLayanan("smart");
});

multi_btn.addEventListener("click", function() {
    showLayanan("multi");
});


// Menjalankan paket lite secara default saat website pertama kali dimuat
showLayanan("lite");




