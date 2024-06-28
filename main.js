const Oshilist = [
    "Gracia",
    "Feni",
    "Gita",
    "Christy",
    "Eli",
    "Freya",
    "Jessi",
     "Muthe",
    "Olla",
     "Zee",
     "Adel",
     "Fiony",
     "Lulu",
     "Oniel",
     "Flora",
     "Kathrina",
     "Marsha",
     "Indah",
     "Ella",
     "Callie",
     "Amanda",
     "Indira",
     "Lyn",
     "Raisha",
     "Lia",
     "Alya",
     "Anindya",
     "Cathy",
     "Chelsea",
     "Cynthia",
     "Daisy",
     "Danella",
     "Elin",
     "Gendis",
     "Gracie",
     "Greesel",
     "Michie",
     "Aralie",
     "Delynn",
     "Erine",
     "Fritzy",
     "Kimmy",
     "Lana",
     "Levi",
     "Lily",
     "Moreen",
     "Nachia",
     "Nala",
     "Nayla",
     "Oline",
     "Regie",
     "Ribka",
     "Trisha",
];

function pilihOshi(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = ""; //Menghapus Hasil
    if (nama) {
        const randomIndex = Math.floor(Math.random() * Oshilist.length);
        const OshiTerpilih = Oshilist[randomIndex];
        resultDiv.textContent = `Oshi  ${nama} Adalah ${OshiTerpilih}.`;

        //Menghapus Hasil Setelah 5 Detik
        setTimeout(() => {
            resultDiv.textContent = "";
        }, 60000);
    }else {
        resultDiv.textContent = "Nama Tidak Boleh Kosong.";
    }
}

//Menambah Event Listener ke form
document.getElementById("NameForm").addEventListener("submit", pilihOshi);
