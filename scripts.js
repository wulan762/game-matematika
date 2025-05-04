function submitQuiz() {
    let jawaban1 = document.querySelector('input[name="soal1"]:checked');
    let jawaban2 = document.querySelector('input[name="soal2"]:checked');
    let jawaban3 = document.querySelector('input[name="soal3"]:checked');
    let jawaban4 = document.querySelector('input[name="soal4"]:checked');
    let jawaban5 = document.querySelector('input[name="soal5"]:checked');
    let jawaban6 = document.querySelector('input[name="soal6"]:checked');
    let jawaban7 = document.querySelector('input[name="soal7"]:checked');
    let jawaban8 = document.querySelector('input[name="soal8"]:checked');
    let jawaban9 = document.querySelector('input[name="soal9"]:checked');
    let jawaban10= document.querySelector('input[name="soal10"]:checked');
    let jawaban11= document.querySelector('input[name="soal11"]:checked');
    let jawaban12= document.querySelector('input[name="soal12"]:checked');



    if (jawaban1 && jawaban2 && jawaban3 && jawaban4 && jawaban5 && jawaban6 && jawaban7 && jawaban8 && jawaban9 && jawaban10 && jawaban11 && jawaban12) {

        // Periksa jawaban satu per satu
        const kunciJawaban = {
            soal1: "6750",
            soal2: "10.000",
            soal3: "35",
            soal4: "24",
            soal5: "60",
            soal6: "500.000 cm2",
            soal7: "0,6 m2",
            soal8: "07.30",
            soal9: "Rp2.600,00",
            soal10: "Rp3.300,00",
            soal11: "40%",
            soal12: "25%"
        };

        const jawabanUser = {
            soal1: jawaban1.value,
            soal2: jawaban2.value,
            soal3: jawaban3.value,
            soal4: jawaban4.value,
            soal5: jawaban5.value,
            soal6: jawaban6.value,
            soal7: jawaban7.value,
            soal8: jawaban8.value,
            soal9: jawaban9.value,
            soal10: jawaban10.value,
            soal11: jawaban11.value,
            soal12: jawaban12.value
        };

        let jumlahBenar = 0;
        let jumlahSalah = 0;
        let hasilEvaluasi = {};

        for (let key in kunciJawaban) {
            if (jawabanUser[key] === kunciJawaban[key]) {
                hasilEvaluasi[key] = "✅benar";
                jumlahBenar++;
            } else {
                hasilEvaluasi[key] = "❌salah";
                jumlahSalah++;
            }
        }

        hasilEvaluasi["jumlahBenar"] = jumlahBenar;
        hasilEvaluasi["jumlahSalah"] = jumlahSalah;

        localStorage.setItem("hasilLatihan", JSON.stringify(hasilEvaluasi));
        window.location.href = 'evaluasi.html';

    } else {
        alert("Silakan pilih jawaban untuk semua soal!");
    }
}
