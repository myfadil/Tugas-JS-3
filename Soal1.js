const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(Error('Hari ini bukan hari kerja'));
      }
    }, 3000);
  });
};

// then(), catch()
// then = menangkap dan menampilkan dataDay di promise jika kondisi sukses (resolve)
// catch = menangkap dan menampilkan dataDay di promise jika kondisi gagal (reject)
const cekHasil = (day) => {
  cekHariKerja(day)
    .then((res) => {
      console.log(`${res} adalah hari kerja`);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
cekHasil('sabtu');
cekHasil('senin');

// try catch
// try = mengecek dan menampilkan code javascript yang mungkin terjadi error
// catch = mengecek error yang terjadi di blok try
const cekTry = (day) => {
  try {
    const result = cekHariKerja(day);
    console.log(`${result} adalah hari kerja`);
  } catch (err) {
    console.log(err.message);
  }
}
cekTry('minggu');
cekTry('rabu');