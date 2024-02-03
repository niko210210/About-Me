document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan animasi welcome
    var welcomeText = document.querySelector('.welcome-text');
    welcomeText.classList.add('animate-fadeIn');

    // Menampilkan biodata setelah beberapa detik
    setTimeout(function () {
        welcomeText.classList.add('animate-fadeOut'); // Menambahkan efek fade-out pada selamat datang
        showBiodata();
    }, 1000); // Mengatur waktu delay, di sini 3000ms (3 detik)
});

function showBiodata() {
    var biodataContainer = document.getElementById('biodataContainer');
    biodataContainer.style.display = 'block'; // Menampilkan elemen biodata
    biodataContainer.classList.add('animate-fadeIn'); // Menambahkan efek fade-in pada biodata
}

function goBack() {
    window.history.back();
}