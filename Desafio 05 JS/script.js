

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber
const subt = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
let resDiv = firstNumber % secondNumber 

const parImpar = resDiv == 0 

const dif = firstNumber == secondNumber


alert(`A soma dos dois números é: ${sum}.`)
alert(`A Subtração dos dois números é: ${subt}. `)
alert(`A Multiplicação dos dois números é: ${multi}.`)
alert(`A Divisão dos dois números é: ${div}. `)
alert(`O Resto da Divisão dos dois número é: ${resDiv}.`)



if (parImpar) {
    alert( `A soma dos Números é par: ${sum}`)
} else {
    alert(`A soma dos Números é impar: ${sum}`)
}


if (dif) {
    alert(`Os Números digitado  São Iguais. `)

} else {
    alert(`Os Números digitados São Diferentes.`)
}




