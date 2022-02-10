interface Humano {
    nome: string,
    idade?: number
    saudar(sobrenome: string):void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá', pessoa.nome)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Pedro'
}

const pedro: Humano = {
    nome: 'Áquila',
    idade: 30,
    saudar(sobrenome: string){
        console.log("Olá, " + this.nome + " " + sobrenome)
    }
}

saudarComOla(pedro)
mudarNome(pedro)
saudarComOla(pedro)

pedro.saudar('Tavares')

class Cliente implements Humano{
    nome: string = ''
    saudar(sobrenome: string): void {
        console.log("Olá, " + this.nome + " " + sobrenome)
    }
}

const joao = new Cliente()
joao.nome = "João"

saudarComOla(joao)

interface FuncaoCalculo{
    (a: number, b: number): number
}


let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number{
    return Math.pow(base, exp)
}

console.log(potencia(3, 2))