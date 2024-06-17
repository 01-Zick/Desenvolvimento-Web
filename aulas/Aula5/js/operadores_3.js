var numero1 = 5
var numero2 = 10
var numero3 = '10' //String

var ehMaior = numero1 > numero2 // false
var ehMenor = numero1 < numero2 // true
var ehIgual = numero1 == numero2 // false
var ehMaiorOuIgual = numero1 >= numero2 // false
var ehMenorOuIgual = numero1 <= numero2 // true
var ehDiferente = numero1 != numero2 // true

var saoIguais = numero2 == numero3 // true (verifica valor)
var saoIdenticos = numero2 === numero3 // false (verifica tipo e valor)

alert(ehMaior) // false
alert(ehMenor) // true
alert(ehIgual) // false
alert(ehMaiorOuIgual) // false
alert(ehMenorOuIgual) // true
alert(ehDiferente) // true
alert(saoIguais) // true
alert(saoIdenticos) // false