// Resolver As quatros operações
let x = 15
let y = 20

calcular(x, y)

function calcular(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
}

// A potência de um numero.
let base = 3
let expoente = 4

function potencia(b, e) {
    return base * base * base * base
}

let resul = potencia(base, expoente)
console.log(resul)

// Saber se um número é primo.
let number = 4
function isPrime(number) {
    if (number <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

let res = isPrime(number)

if (res == true) {
    console.log(`${number} é primo!`)
} else {
    console.log(`${number} não é primo!`)
}

let n = 10
for (let i = 1; 1 < n; i++) {
    if (n % i !== 0) {
        console.log(i)
    }
}