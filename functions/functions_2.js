//function expression
//function anonimous

//parâmetros (parameters)
const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

sum(2, 3) // arguments - argumentos
sum(6, 7)
sum(34675, 785.2)

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

//uma explicação ainda mais didática

function fazerSuco(fruta1, fruta2) {
return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

//callback function

function sayMyName(name){
console.log('antes de executar a função callback')

name()

console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

/* function() constructor

    * expressão new
    *criar um novo objeto
    *this keyword

*/

/* function person(name){
    this.name = name
}

const geovane = new person("geovane")
const nathalia = new person("nathalia")

console.log(geovane)
console,log(nathalia)

*/

//Manipulando strings e números

//transformando string em número e número em string:

let string = "123"
console.log(number(string))
let number = 321
console.log(string(number))

