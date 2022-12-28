// Inisialisasi variabel untuk menyimpan data tabel
let data = [
  { provinsi: "Aceh", no_urut: 10 },
  { provinsi: "Sumatera Utara", no_urut: 9 },
  { provinsi: "Sumatera Barat", no_urut: 15 },
  { provinsi: "Riau", no_urut: 16 },
  { provinsi: "Sumatera Selatan", no_urut: 14 },
  { provinsi: "Bengkulu", no_urut: 20 },
  { provinsi: "Lampung", no_urut: 2 },
  { provinsi: "Kep Bangka Belitung", no_urut: 18 },
  { provinsi: "Kepulauan Riau", no_urut: 19 },
  { provinsi: "DKI Jakarta", no_urut: 13 },
  { provinsi: "Jawa Barat - A", no_urut: 3 },
  { provinsi: "Jawa Barat - B", no_urut: 4 },
  { provinsi: "Jawa Barat - C", no_urut: 1 },
  { provinsi: "Banten", no_urut: 1 },
  { provinsi: "Jawa Tengah - A", no_urut: 21 },
  { provinsi: "Jawa Tengah - B", no_urut: 22 },
  { provinsi: "DI Yogyakarta", no_urut: 23 },
  { provinsi: "Jawa Timur - A", no_urut: 7 },
  { provinsi: "Jawa Timur - B", no_urut: 8 },
  { provinsi: "Bali", no_urut: 11 },
  { provinsi: "Nusa Tenggara Timur", no_urut: 11 },
  { provinsi: "Nusa Tenggara Barat", no_urut: 12 },
  { provinsi: "Kalimantan Barat", no_urut: 24 },
  { provinsi: "Kalimantan Tengah", no_urut: 25 },
  { provinsi: "Kalimantan Selatan", no_urut: 26 },
  { provinsi: "Kalimantan Timur", no_urut: 27 },
  { provinsi: "Kalimantan Utara", no_urut: 28 },
  { provinsi: "Sulawesi Utara", no_urut: 5 },
  { provinsi: "Sulawesi Tengah", no_urut: 5 },
  { provinsi: "Sulawesi Selatan", no_urut: 6 },
  { provinsi: "Sulawesi Tenggara", no_urut: 29 },
  { provinsi: "Gorontalo", no_urut: 30 },
  { provinsi: "Sulawesi Barat", no_urut: 31 },
  { provinsi: "Maluku", no_urut: 32 },
  { provinsi: "Maluku Utara", no_urut: 32 },
  { provinsi: "Papua Barat", no_urut: 33 },
  { provinsi: "Papua", no_urut: 33 },
];

// Tambahkan event listener pada form search untuk menangani perubahan pencarian
document.getElementById("search").addEventListener("input", function () {
  // Tampilkan data yang sesuai dengan pencarian
  currentPage = 1;
  displayData();
});
document.getElementById("search").setAttribute("disabled", true);

// Inisialisasi variabel untuk menyimpan data yang akan ditampilkan
let displayedData = [];

// Inisialisasi variabel untuk menyimpan nomor halaman yang sedang ditampilkan
let currentPage = 1;

// Fungsi untuk mengubah background salah satu atau beberapa data pada tabel
function changeBackground(provinsi, background) {
  // Cari data yang sesuai dengan nama provinsi yang diberikan
  let data = displayedData.find((item) => item.provinsi == provinsi);
  if (data) {
    // Ambil indeks data yang ditemukan
    let index = displayedData.indexOf(data);
    // Ubah background kolom "No Urut" data yang ditemukan sesuai dengan yang diberikan
    let table = document.getElementById("provinsi-table");
    let row = table.rows[index + 1];
    let cell = row.cells[1];
    cell.classList.add(background);

    // Tambahkan teks "Tersedia" pada kolom "No Urut"
    cell.innerHTML = data.no_urut + " ✅";
  }
}

// Fungsi untuk menampilkan data tabel
function displayData() {
  // Bersihkan tabel
  let table = document.getElementById("provinsi-table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Tampilkan data yang sesuai dengan pencarian
  let searchTerm = document.getElementById("search").value.toLowerCase();
  displayedData = data.filter((item) =>
    item.provinsi.toLowerCase().includes(searchTerm)
  );

  // Tampilkan 5 data saja di halaman yang sedang ditampilkan
  let startIndex = (currentPage - 1) * 5;
  let endIndex = startIndex + 5;
  for (let i = startIndex; i < endIndex; i++) {
    if (displayedData[i]) {
      let row = table.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      cell1.innerHTML = displayedData[i].provinsi;
      cell2.innerHTML = displayedData[i].no_urut;
    }
  }

  // Nonaktifkan tombol "Prev" jika sedang di halaman pertama
  if (currentPage == 1) {
    document.getElementById("prev-btn").disabled = true;
  } else {
    document.getElementById("prev-btn").disabled = false;
  }

  // Nonaktifkan tombol "Next" jika sedang di halaman terakhir
  if (currentPage * 5 >= displayedData.length) {
    document.getElementById("next-btn").disabled = true;
  } else {
    document.getElementById("next-btn").disabled = false;
  }
}

// Fungsi untuk menampilkan halaman selanjutnya
function nextPage() {
  currentPage++;
  displayData();
  // Data provinsi yang tersedia
  changeBackground("Aceh", "background-gradient");
  changeBackground("Sumatera Utara", "background-gradient");
  changeBackground("Sumatera Barat", "background-gradient");
  changeBackground("Sumatera Selatan", "background-gradient");
  changeBackground("Lampung", "background-gradient");
  changeBackground("DKI Jakarta", "background-gradient");
  changeBackground("Jawa Barat - A", "background-gradient");
  changeBackground("Jawa Barat - B", "background-gradient");
  changeBackground("Jawa Barat - C", "background-gradient");
  changeBackground("Banten", "background-gradient");
  changeBackground("Jawa Timur - A", "background-gradient");
  changeBackground("Jawa Timur - B", "background-gradient");
  changeBackground("Bali", "background-gradient");
  changeBackground("Nusa Tenggara Timur", "background-gradient");
  changeBackground("Nusa Tenggara Barat", "background-gradient");
  changeBackground("Sulawesi Utara", "background-gradient");
  changeBackground("Sulawesi Tengah", "background-gradient");
  changeBackground("Sulawesi Selatan", "background-gradient");
}

// Fungsi untuk menampilkan halaman sebelumnya
function prevPage() {
  currentPage--;
  displayData();
  changeBackground("Aceh", "background-gradient");
  changeBackground("Sumatera Utara", "background-gradient");
  changeBackground("Sumatera Barat", "background-gradient");
  changeBackground("Sumatera Selatan", "background-gradient");
  changeBackground("Lampung", "background-gradient");
  changeBackground("DKI Jakarta", "background-gradient");
  changeBackground("Jawa Barat - A", "background-gradient");
  changeBackground("Jawa Barat - B", "background-gradient");
  changeBackground("Jawa Barat - C", "background-gradient");
  changeBackground("Banten", "background-gradient");
  changeBackground("Jawa Timur - A", "background-gradient");
  changeBackground("Jawa Timur - B", "background-gradient");
  changeBackground("Bali", "background-gradient");
  changeBackground("Nusa Tenggara Timur", "background-gradient");
  changeBackground("Nusa Tenggara Barat", "background-gradient");
  changeBackground("Sulawesi Utara", "background-gradient");
  changeBackground("Sulawesi Tengah", "background-gradient");
  changeBackground("Sulawesi Selatan", "background-gradient");
}

// Tampilkan data saat halaman pertama kali dimuat
displayData();

// Ubah warna pada No Urut yang tersedia
changeBackground("Aceh", "background-gradient");
changeBackground("Sumatera Utara", "background-gradient");
changeBackground("Sumatera Barat", "background-gradient");
changeBackground("Sumatera Selatan", "background-gradient");
changeBackground("Lampung", "background-gradient");
changeBackground("DKI Jakarta", "background-gradient");
changeBackground("Jawa Barat - A", "background-gradient");
changeBackground("Jawa Barat - B", "background-gradient");
changeBackground("Jawa Barat - C", "background-gradient");
changeBackground("Banten", "background-gradient");
changeBackground("Jawa Timur - A", "background-gradient");
changeBackground("Jawa Timur - B", "background-gradient");
changeBackground("Bali", "background-gradient");
changeBackground("Nusa Tenggara Timur", "background-gradient");
changeBackground("Nusa Tenggara Barat", "background-gradient");
changeBackground("Sulawesi Utara", "background-gradient");
changeBackground("Sulawesi Tengah", "background-gradient");
changeBackground("Sulawesi Selatan", "background-gradient");
