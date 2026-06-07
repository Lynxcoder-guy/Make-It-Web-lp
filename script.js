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
const harga_paket = document.querySelector("#detail-paket h2"); 
const semua_paket = document.querySelectorAll('[id="Deskripsi-paket"] ul li, [id="deskripsi-paket"] ul li');

//==========================================
// FUNGSI PERUBAHAN WARNA TOMBOL
//==========================================
function backToNormal() {
    lite_btn.style.backgroundImage = "linear-gradient(to right, #1c6ad4, #2483ff)";
    lite_btn.style.backgroundColor = "";
    lite_btn.style.color = "#ffffff";

    smart_btn.style.backgroundImage = "linear-gradient(to right, #1c6ad4, #2483ff)";
    smart_btn.style.backgroundColor = "";
    smart_btn.style.color = "#ffffff";

    multi_btn.style.backgroundImage = "linear-gradient(to right, #1c6ad4, #2483ff)";
    multi_btn.style.backgroundColor = "";
    multi_btn.style.color = "#ffffff";
}

function changeColor(tombol) {
    backToNormal();
    tombol.style.backgroundImage = "none";
    tombol.style.backgroundColor = "#bbff00";
    tombol.style.color = "#1f1f1f";
}

// ==========================================
// 3. FUNGSI UTAMA LOGIKA IF - ELSE IF
// ==========================================
function showLayanan(layanan_current) {
    if (layanan_current === "lite") {
        nama_paket.innerHTML = "Paket Lite Web";
        harga_paket.innerHTML = "Mulai dari 170K IDR <br><span style='font-size: 14px; font-weight: normal; color: #ccc;'>(Biaya bisa bertambah jika custom desain)</span>";
        changeColor(lite_btn);

        semua_paket[0].innerHTML = "Solusi paling hemat untuk brosur digital standar bagi bisnis yang baru merintis.";
        semua_paket[1].innerHTML = "Menampilkan profil bisnis Anda secara statis (informasi tetap) namun tetap terlihat rapi dan terpercaya.";
        semua_paket[2].innerHTML = "Sangat pas jika Anda hanya ingin memajang foto portofolio tanpa membutuhkan efek animasi yang kompleks.";
        semua_paket[3].innerHTML = "Pilihan standar yang aman untuk sekadar menampilkan info dasar bisnis Anda";

        // 4 Baris Kedua (Apa yang akan anda dapatkan?)
        semua_paket[4].innerHTML = "Profil bisnis lengkap yang memuat informasi layanan, keunggulan, serta detail kontak.";
        semua_paket[5].innerHTML = "Tampilan website yang responsive sehingga nyaman diakses dari ponsel maupun komputer.";
        semua_paket[6].innerHTML = "Keperluan website esensial seperti tombol hubungi whatsapp atau email dalam satu halaman statis";
        semua_paket[7].innerHTML = "Website yang bisa disesuaikan dengan budget anda, bisa custom atau menggunakan template tergantung kebutuhan";

} else if (layanan_current === "smart") {
    nama_paket.innerHTML = "Paket Smart Web";
    harga_paket.innerHTML = "Mulai dari 350k IDR <br><span style='font-size: 14px; font-weight: normal; color: #ccc;'>(Biaya bisa bertambah jika custom desain)</span>";
    changeColor(smart_btn);
    semua_paket[0].innerHTML = "Website terasa hidup, modern, dan sangat interaktif.";
    semua_paket[1].innerHTML = "Meningkatkan daya tarik produk utama lewat elemen dinamis dan interaktif.";
    semua_paket[2].innerHTML = "Pengalaman pengguna (UX) yang lebih menarik dan profesional.";
    semua_paket[3].innerHTML = "Website terlihat lebih interaktif seperti sistem kartu harga yang sedang Anda gunakan sekarang.";
    
    // Bagian Apa yang didapatkan:
    semua_paket[4].innerHTML = "Semua fitur Paket Lite dengan satu halaman praktis & responsive di HP.";
    semua_paket[5].innerHTML = "Sentuhan kodingan JavaScript murni untuk performa website yang super ringan.";
    semua_paket[6].innerHTML = "Elemen interaktif modern seperti animasi scroll, jendela modal pop-up, hingga fitur dark mode."; // Mengisi baris yang menggantung
    semua_paket[7].innerHTML = "Website yang bisa disesuaikan dengan budget Anda, bisa custom atau menggunakan template.";
}

    } else if (layanan_current === "multi") {
        nama_paket.innerHTML = "Paket Multi-Page Web";
        harga_paket.innerHTML = "Mulai dari 700K IDR <br><span style='font-size: 14px; font-weight: normal; color: #ccc;'>(Gratis 3 halaman pertama)</span>";
        changeColor(multi_btn);

        semua_paket[0].innerHTML = "Solusi tepat untuk memaparkan informasi bisnis secara mendalam.";
        semua_paket[1].innerHTML = "Me nyampaikan informasi soal bisnis Anda dengan lebih teroganisir.";
        semua_paket[2].innerHTML = "Navigasi lebih fokus dan terstruktur dan tidak membosankan.";
        semua_paket[3].innerHTML = "Meningkatkan kredibilitas brand dengan struktur informasi yang profesional.";

        semua_paket[4].innerHTML = "Anda akan mendapatkan tiga halaman utama sebagai dasar website bisnis Anda.";
        semua_paket[5].innerHTML = "Anda bisa menambahkan halaman sebanyak yang dibutuhkan sesuai perkembangan bisnis.";
        semua_paket[6].innerHTML = "Tersedia pilihan halaman Lite yang sangat ringan 70K/halaman atau halaman Smart yang interaktif 120k/halaman.";
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

// Default saat load
showLayanan("lite");
