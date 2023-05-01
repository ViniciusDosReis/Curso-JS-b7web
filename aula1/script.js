/* 
function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

let idade = 11
let verificação = maiorDeIdade(idade)

if (verificação) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
} 
*/

/*
function calcularImovel(metragem, quartos) {
    let m2 = 3000
    if (quartos == 1) {
        let preco = 3000
        return preco
    } else if (quartos == 2) {
        let preco = m2 * 1.2
        return preco
    } else if (quartos == 3) {
        let preco = m2 * 1.5
        return preco
    }
}
*/

function calcularImovel(metragem, quartos) {
    let m2 = 3000
    switch (preco) {
        case 1: 
            default: 
                preco = metragem * m2
                return preco
        break
        case 2: 
            preco = metragem * m2
        break
        case 3:

        break
    }
}

let metragem = 123
let quartos = 1
let preco = calcularImovel(metragem, quartos)
console.log(`A casa custa R$ ${preco}`)