// let Nilai = 90
// let Hasil = Nilai <=70 
//      ? "C"
//     : Nilai <= 85 && Nilai >= 71 
//             ? "B" 
//             : "A"

// console.log(Hasil)
                 
for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0 && i % 3 == 0) { console.log( i,"FizzBuzz");
        } else if (i % 2 == 0) {
            console.log(i, "Fizz");
        } else {
            console.log(i, "Buzz")
    }
}