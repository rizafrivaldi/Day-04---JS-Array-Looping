// Operasi Dasar pada Array
let laptop = ["LENOVO", "MSI", "ASUS"];
console.log(laptop[0]);
console.log(laptop[1]);

// Tambah elemen di akhir
laptop.push("ACER");
console.log(laptop);

// Hapus elemen terakhir
laptop.pop();
console.log(laptop);

// Tambah di awal
laptop.unshift("AXIOO");
console.log(laptop);

// Hapus di awal
laptop.shift();
console.log(laptop);

// Panjang array
console.log(laptop.length);

// Looping - foor loop (klasik)
let angka = [10, 20, 30, 40];
for (let i = 0; i < angka.length; i++) {
  console.log("index ke-" + i + "=" + angka[i]);
}

// looping - for of (lebih sederhana)
for (let item of angka) {
  console.log(item);
}

// looping - forEach (fungsi bawaan array)
angka.forEach(function (item, index) {
  console.log("index:", index, "isi", item);
});

// Method Array lanjutan

// map -> hasil array baru
let kali2 = angka.map((x) => x * 2);
console.log(kali2);

/*
// filter -> ambil elemen sesuai kondisi
let genap = angka.filter((x) => x % 2 === 0);
console.log(genap); */

// reduce -> hitung total
let total = angka.reduce((acc, cur) => acc + cur, 0);
console.log(total);

/* Latihan
Buat array berisi nama 5 temanmu → tampilkan semuanya dengan forEach.
Buat array angka [1..20] → tampilkan hanya angka genap.
Buat array harga barang → hitung total belanja dengan reduce.

Mini Project Sederhana
Daftar Belanja
Input barang → simpan ke array.
Tampilkan daftar barang di halaman pakai looping.
Tombol "Hapus" untuk menghapus barang dari array. */

let teman = ["Rivaldi", "Ayim", "Aji", "Martin", "Andika"];
teman.forEach((nama, i) => {
  console.log(`${i + 1}. ${nama}`);
});

let nomor = Array.from({ length: 20 }, (_, i) => i + 1);
let genap = nomor.filter((num) => num % 2 === 0);
console.log("nomor genap:", genap);

let harga = [5000, 14000, 8000, 20000];
let jumlah = harga.reduce((acc, val) => acc + val, 0);
console.log("Jumlah belanja:", total);

let daftar = [];
const input = document.getElementById("barangInput");
const tambahBtn = document.getElementById("tambahBtn");
const daftarBarang = document.getElementById("daftarBarang");

// fungsi untuk render daftar barang
function renderDaftar() {
  daftarBarang.innerHTML = ""; // kosong dulu
  daftar.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item + " ";

    // tombol hapus
    let hapusBtn = document.createElement("button");
    hapusBtn.textContent = "hapus";
    hapusBtn.style.marginLeft = "10px";
    hapusBtn.addEventListener("click", function () {
      daftar.splice(index, 1); //hapus item dari arrary
      renderDaftar();
    });

    li.appendChild(hapusBtn);
    daftarBarang.appendChild(li);
  });
}

// event tombol tambah
tambahBtn.addEventListener("click", function () {
  let barang = input.value.trim();
  if (barang !== "") {
    daftar.push(barang); //tambah ke array
    input.value = ""; //reset input
    renderDaftar();
  }
});
