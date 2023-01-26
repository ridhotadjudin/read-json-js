const getSquareRoot = (x) => {
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    } else {
      return Math.sqrt(x);
    }
  }
  
  console.log(getSquareRoot(4)); // 2
  console.log(getSquareRoot(-4)); // contoh bilangan negatif
  console.log(getSquareRoot(3)); // contoh bilangan ganjil