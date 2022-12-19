
let i = 0;
function funcPlus() {
    document.getElementById("hasil").value = i += 1;
}
function funcMines() {
    if ((i === 0)) {
        document.getElementById("hasil").value = 0;
        alert('Maaf Nominal Tidak Tersedia')
    } else {
        document.getElementById("hasil").value = i -= 1;
    }
}
function funcBuy() {
    if (i <= 0) {
        alert(`Maaf anda tidak dapat memesan`)
    } else {
        alert(`Pesanan Diterima, Silahkan Tunggu`)
    }
}



let n = 0;
function funcPlus1() {
    document.getElementById("hasil1").value = n += 1;
}
function funcMines1() {
    if ((n === 0)) {
        document.getElementById("hasil1").value = 0;
        alert('Maaf Nominal Tidak Tersedia')
    } else {
        document.getElementById("hasil1").value = n -= 1;
    }
}
function funcBuy1() {
    if (n <= 0) {
        alert(`Maaf anda tidak dapat memesan`)
    } else {
        alert(`Pesanan Diterima, Silahkan Tunggu`)
    }
}



let d = 0;
function funcPlus2() {
    document.getElementById("hasil2").value = d += 1;
}
function funcMines2() {
    if ((d === 0)) {
        document.getElementById("hasil2").value = 0;
        alert('Maaf Nominal Tidak Tersedia')
    } else {
        document.getElementById("hasil2").value = d -= 1;
    }
}
function funcBuy2() {
    if (d <= 0) {
        alert(`Maaf anda tidak dapat memesan`)
    } else {
        alert(`Pesanan Diterima, Silahkan Tunggu`)
    }
}







// function funcPlus() {
//     hasil.innerHTML = no++
// }

// kurang.onclick = function () {
//     hasil.innerHTML = no--;
// }

// buy.onclick = function () {
//     if (no < 0) {
//         alert(`Maaf anda tidak dapat memesan`)
//     } else if (no = 0) {
//         alert(`Silahkan masukkan pesanan`)
//     } else {
//         alert(`Silahkan tunggu pesanan `)
//     }

// }

// const tambah1 = document.getElementById('tambah1');
// const kurang1 = document.getElementById('kurang1');
// const hasil1 = document.getElementById('hasil1');
// const buy1 = document.getElementById('buy1');

// let no1 = 0;


// tambah1.onclick = function () {
//     hasil1.innerHTML = no1++;
// }
// kurang1.onclick = function () {
//     hasil1.innerHTML = no1--;
// }

// buy1.onclick = function () {
//     if (no1 <= 0) {
//         alert(`Maaf anda tidak dapat memesan`)
//     } else if (no1 = 0) {
//         alert(`Silahkan masukkan pesanan`)
//     } else {
//         alert(`Silahkan tunggu pesanan `)
//     }

// }


// const tambah2 = document.getElementById('tambah2');
// const kurang2 = document.getElementById('kurang2');
// const hasil2 = document.getElementById('hasil2');
// const buy2 = document.getElementById('buy2');

// let no2 = 0;


// tambah2.onclick = function () {
//     hasil2.innerHTML = no2++;
// }
// kurang2.onclick = function () {
//     hasil2.innerHTML = no2--;
// }

// buy2.onclick = function () {
//     if (no2 <= 0) {
//         alert(`Maaf anda tidak dapat memesan`)
//     } else if (no2 = 0) {
//         alert(`Silahkan masukkan pesanan`)
//     } else {
//         alert(`Silahkan tunggu pesanan `)
//     }

// }