const miAleatorio = () => {
  const numeros = {}
  for (let i = 0; i < 100000; i++) {
    const num = Math.floor((Math.random() * 6) + 1)
    if (!numeros[num]) {
      numeros[num] = 1
    } else {
      numeros[num]++
    }
  }
  console.log(numeros)
}

miAleatorio()
