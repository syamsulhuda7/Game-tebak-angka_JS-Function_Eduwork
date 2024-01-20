alert('Selamat datang di Game Tebak Angka');
alert('game ini terdiri dari 5 ronde, setiap ronde setiap player diwajibkan memilih angka antara 1 sampai 3')

let nilaiP1 = [];
let nilaiP2 = [];

let i = 1;

while (i <= 5) {
    alert(`round ${i} mulai`)
    let p1 = prompt('player 1: masukkan angka antara 1 sampai 3');
    let p2 = prompt('player 2: masukkan angka antara 1 sampai 3');

    function angkaRandom() {
        let angka = Math.random();
        if (angka <= .33) {
            return 1
        } else if (angka >= .66) {
            return 2
        } else {
            return 3
        }
    };

    let nilai = angkaRandom();

    if ((p1 == 1 || p1 == 2 || p1 == 3) && (p2 == 1 || p2 == 2 || p2 == 3)) {
        if (p1 == p2) {
            alert('angka yang dimasukkan tidak boleh sama');
            i--;
        } else if (p1 == nilai) {
            alert('p1 benar');
            nilaiP1.push(i ** 0);
            nilaiP2.push(0);
        } else if (p2 == nilai) {
            alert('p2 benar');
            nilaiP1.push(0);
            nilaiP2.push(i ** 0);
        } else {
            alert('yahh, tidak ada yang benar');
            nilaiP1.push(0);
            nilaiP2.push(0);
        }
    } else {
        alert('maaf, nilai yang kamu masukkan salah');
        i--;
    }

    let jumlahP1 = nilaiP1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let jumlahP2 = nilaiP2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    alert(`Skor Player 1 = ${jumlahP1} \nSkor Player 2 = ${jumlahP2}`);

    if (i == 5) {
        break;
    }

    let stop = confirm(`lanjutkan?`)
    if (stop == false) {
        break;
    }

    i++
}

let totalP1 = nilaiP1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let totalP2 = nilaiP2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let winner = function () {
    if (totalP1>totalP2) {
        return 'Player 1'
    } else if (totalP2>totalP1) {
        return 'Player 2'
    } else {
        return 'Seri'
    }
}

alert(`skor akhir yaitu: \nPlayer 1 = ${totalP1} \nPlayer 2 = ${totalP2} \n... \nPemenangnya adalah ${winner()}`)
