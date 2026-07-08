// Memastikan script berjalan setelah seluruh HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. Logika Navigasi Tombol (Routing)
    // ==========================================
    const navigationButtons = document.querySelectorAll("[data-url]");

    navigationButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Mengambil nilai dari atribut data-url
            const targetUrl = this.getAttribute("data-url");
            
            // Berpindah halaman jika url tersedia
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });

    // ==========================================
    // 2. Logika Penanda Halaman Aktif di Navbar
    // ==========================================
    
    // Ambil nama file dari URL saat ini (contoh: "profile.html")
    let currentFileName = window.location.pathname.split("/").pop();
    
    // Jika nama file kosong (biasanya saat pertama kali buka web/root), asumsikan "index.html"
    if (currentFileName === "") {
        currentFileName = "index.html";
    }

    // Hanya cari tombol yang ada di dalam navbar
    const navButtons = document.querySelectorAll(".nav .btn");

    navButtons.forEach(button => {
        // Jika isi data-url pada tombol sama dengan URL halaman saat ini
        if (button.getAttribute("data-url") === currentFileName) {
            // Tambahkan class 'active'
            button.classList.add("active");
        }
    });

    // ==========================================
    // 3. Logika Hamburger Menu (Mobile Responsive)
    // ==========================================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            // Toggle (tambah/hapus) class active-menu untuk membuka/menutup menu
            navMenu.classList.toggle("active-menu");
        });
    }

});