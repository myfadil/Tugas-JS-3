// 1. Menghitung pangkat 2
function calculateSquare(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof num !== 'number') {
          reject('Input harus berupa angka.');
        } else {
          const result = num * num;
          resolve(result);
        }
      }, 3000);
    });
  }
  
const inputNumber = (inputNumber) =>{
  calculateSquare(inputNumber)
    .then((result) => {
      console.log(`Pangkat dua dari ${inputNumber} adalah ${result}`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

inputNumber(5)

// Menghitung jumlah dari sebuah array angka
function calculateTotal(numbers) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!Array.isArray(numbers)) {
          reject('Input harus berupa array.');
        } else {
          const total = numbers.reduce((sum, num) => sum + num, 0);
          resolve(total);
        }
      }, 4000); // Timeout selama 4 detik
    });
  }
  
  const numberArray = [1, 2, 3, 4, 5];
  calculateTotal(numberArray)
    .then((result) => {
      console.log(`Jumlah total dari array ${numberArray} adalah ${result}`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  