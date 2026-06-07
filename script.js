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
const detail_paket = document.getElementById("detail-paket")
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
        harga_paket.innerHTML = "Mulai dari 170K IDR <br><span style='font-size: 14px; font-weight: normal; color: #ccc;'>(Biaya belum termasuk domain)</span>";
        changeColor(lite_btn);

        semua_paket[0].innerHTML = "Informasi mengenai bisnis anda dalam satu alur website";
        semua_paket[1].innerHTML = "Informasi krusial seperti kontak, email, atau informasi lainnya.";
        semua_paket[2].innerHTML = "Fitur esensial seperti adaptasi layar pengguna (Laptop/hp) sehingga terlihat profesional";
        semua_paket[3].innerHTML = "Dekorasi website simple seperti icons atau foto";

        semua_paket[4].innerHTML = "Tambahan desain custom branding: <strong>+70K.</strong>";
        semua_paket[5].innerHTML = "Jika panjang website lebih dari 3 poin utama: <strong>+25K/poin.</strong>";
        semua_paket[6].innerHTML = "Revisi lebih dari satu kali: <strong>+15K/revisi tambahan.</strong>";
        semua_paket[7].innerHTML = "Jika Anda membutuhkan update konten saat webiste sudah jadi: <strong>+25K/update.</strong>";

} else if (layanan_current === "smart") {
    nama_paket.innerHTML = "Paket Smart Web";
    harga_paket.innerHTML = "Mulai dari 350k IDR <br><span style='font-size: 14px; font-weight: normal; color: #ccc;'>(Biaya belum termasuk domain)</span>";
    changeColor(smart_btn);
    semua_paket[0].innerHTML = "Infronmasi mengenai bisnis Anda dalam satu alur webisite interaktif (seperti tombol harga yang sedang anda gunakan)";
    semua_paket[1].innerHTML = "Informasi mendalam seperti beberapa layanan/produk, pilihan variasi, dan semua informasi dari Paket Lite.";
    semua_paket[2].innerHTML = "Fitur kompleks seperti sistem navigasi dinamis, layout presisi, dan penyampaian informasi yang efektif.";
    semua_paket[3].innerHTML = "Dekorasi webisie simple seperti icons dan gambar.";
    
    // Bagian Apa yang didapatkan:
    semua_paket[4].innerHTML = "Jika Anda membutuhkan menambahkan fitur dan desain custom: <strong>+120K.</strong>";
    semua_paket[5].innerHTML = "Jika panjang website lebih dari 3 poin utama: <strong>+50K/poin.</strong>";
    semua_paket[6].innerHTML = "Revisi lebih dari 2 kali: <strong>+20K/revisi tambahan</strong>"; // Mengisi baris yang menggantung
    semua_paket[7].innerHTML = "Jika Anda membutuhkan update fitur atau konten: <strong>+50K-80K maks/update.</strong>";

    } else if (layanan_current === "multi") {
        nama_paket.innerHTML = "Paket Multi-Page Web";
        harga_paket.innerHTML = "Mulai dari 700K IDR <br><span style='font-size: 14px; font-weight: normal; color: #ccc;'>(Biaya belum termasuk domain)</span>";
        changeColor(multi_btn);

        semua_paket[0].innerHTML = "Website dengan 3 halaman berbeda untuk penyampaian info bisnis mendalam.";
        semua_paket[1].innerHTML = "Info detail seperti daftar layanan/produk, detail harga, dan semua informasi dari paket-paket sebelumnya.";
        semua_paket[2].innerHTML = "Fitur bisa diatur sesuai kebutuhan bisa yang statis atau dinamis tergantung dana dan kebutuhan anda";
        semua_paket[3].innerHTML = "Dekorasi website custom sudah termasuk tanpa biaya tambahan untuk tampilan personal bisni Anda dan revisi 5 kali";

        semua_paket[4].innerHTML = "Jika butuh panjang halaman lebih dari 3 poin/halaman: <strong>+100K/poin.</strong> ";
        semua_paket[5].innerHTML = "Tambahan halaman website STATIS lebih dari 3 halaman: <strong>+100K/halaman.</strong>";
        semua_paket[6].innerHTML = "Tambahan halaman website DINAMIS lebih dari 1 halaman: <strong>+200K/halaman";
        semua_paket[7].innerHTML = "Jika Anda ingin update fitur atau halaman saat website sudah beroperasi: <strong>+50K/update</strong> ";    
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
