// string
let nome: string = 'João'
function retornaMeuNome(): string {
    // return minhaIdade
    return nome
}

// console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}

// digaOi()

function multiplicar(numA: any, numB: any): number {
    return numA * numB
}

function soma(numA: number, numB: number): number {
    return numA + numB
}


// console.log(soma(2, 2))
// console.log(multiplicar(4.7, 9))

// tipo função
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(5, 6))