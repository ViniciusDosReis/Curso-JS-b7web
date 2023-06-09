// filter --------------------------------------------------------
let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra', 'Uva']

let bigFruits = fruits.filter((item) => {
    return item.length > 4
})

console.log(bigFruits)

// every --------------------------------------------------------
let every = fruits.every((value) => {
    return value.length > 3
})

if (every) {
    console.log('Todos as frutas são maiores que 3')
} else {
    console.log('Nem todas as frutas são maiores que 3')
}

// some --------------------------------------------------------
let algo = fruits.some((index) => {
    return index.length > 3
})

if (algo) {
    console.log('Existe alguma fruta maior que 3')
} else {
    console.log('Não exite uma fruta maior que 3')
}

// includes
if (fruits.includes('Uva')) {
    console.log('A fruta selecionada foi encontrada')
} else {
    console.log('A fruta selecionada não foi encontrada')
}