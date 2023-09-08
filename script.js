// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon'); // Mengambil elemen dengan ID 'menu-icon' dan menyimpannya dalam variabel 'menuIcon'.
let navbar = document.querySelector('.navbar'); // Mengambil elemen dengan kelas 'navbar' dan menyimpannya dalam variabel 'navbar'.

menuIcon.onclick = () => { // Menambahkan event listener untuk menghandle klik pada 'menuIcon'.
    menuIcon.classList.toggle('bx-x'); // Ketika ikon menu di-klik, toggle kelas 'bx-x' pada 'menuIcon'.
    navbar.classList.toggle('active'); // Toggle kelas 'active' pada 'navbar'.
}

// scroll sections
let sections = document.querySelectorAll('section'); // Mengambil semua elemen 'section' dan menyimpannya dalam variabel 'sections'.
let navLinks = document.querySelectorAll('header nav a'); // Mengambil semua elemen 'a' di dalam 'nav' pada 'header' dan menyimpannya dalam variabel 'navLinks'.

window.onscroll = () => { // Menambahkan event listener saat melakukan scroll pada window.
    sections.forEach(sec => { // Melakukan iterasi pada setiap elemen 'section' dengan forEach.
        let top = window.scrollY; // Mendapatkan posisi vertikal saat scroll dari atas window.
        let offset = sec.offsetTop - 100; // Mendapatkan posisi offset dari 'sec' dikurangi 100px.
        let height = sec.offsetHeight; // Mendapatkan tinggi dari 'sec'.
        let id = sec.getAttribute('id'); // Mendapatkan atribut 'id' dari 'sec'.

        if (top >= offset && top < offset + height) { // Mengecek apakah posisi scroll berada dalam rentang 'sec'.
            // Menandai link navbar yang aktif
            navLinks.forEach(links => {
                links.classList.remove('active'); // Menghapus kelas 'active' dari semua elemen 'navLinks'.
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Menambahkan kelas 'active' pada link yang sesuai dengan 'id'.
            });

            // Menandai section untuk animasi saat scroll
            sec.classList.add('show-animate'); // Menambahkan kelas 'show-animate' pada 'sec'.
        } else {
            sec.classList.remove('show-animate'); // Menghapus kelas 'show-animate' dari 'sec' jika tidak dalam rentang yang aktif.
        }
    });
    // Header menjadi sticky saat scroll
    let header = document.querySelector('header'); // Mengambil elemen 'header'.

    header.classList.toggle('sticky', window.scrollY > 100); // Menambah atau menghapus kelas 'sticky' pada 'header' saat posisi scroll melebihi 100px.

    // Menghapus ikon toggle dan navbar ketika link navbar di-klik (scroll)
    menuIcon.classList.remove('bx-x'); // Menghapus kelas 'bx-x' dari 'menuIcon'.
    navbar.classList.remove('active'); // Menghapus kelas 'active' dari 'navbar'.
}

// Animasi footer saat scroll
let footer = document.querySelector('footer'); // Mengambil elemen 'footer'.

footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
// Menambah atau menghapus kelas 'show-animate' pada 'footer' saat posisi scroll mencapai akhir halaman.
