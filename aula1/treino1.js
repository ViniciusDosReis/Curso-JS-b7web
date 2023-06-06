let x = 40
let y = 10
let pct = calcPct(x, y)
console.log(`${pct}% de ${x} é ${y}`)

function calcPct(a , b) {
    let pct = (b / a) * 100
    return pct
}