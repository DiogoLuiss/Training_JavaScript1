
//[X] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Porém, os dois nomes devem estar em dois objetos separados. 
//Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.



const Objects = {
    people1: {

        Name: "Diogo",
        Age: 18,
        Sex: "Male",
        Height: 1.75,
        blood_type: "O-"
    },

    people2: {
        Name: "Antonio",
        Age: 21,
        Sex: "Male",
        Height: 3.00,
        blood_type: "B-"
    },
    people3: {
        Name: "Ingrid",
        Age: 22,
        Sex: "Female",
        Height: 1.60,
        blood_type: "A+"
    },
    people4: {
        Name: "Marcella",
        Age: 19,
        Sex: "Female",
        Height: 1.60,
        blood_type: "O-"
    },
    people5: {
        Name: "Victor",
        Age: 30,
        Sex: "Male",
        Height: 1.75,
        blood_type: "A-"
    },
}

console.log (Objects.people1.Name == Objects.people2.Name)
console.log (Objects.people1.Height == Objects.people5.Height)


//[X] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Porém, os dois nomes devem estar em um objeto. 
//Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

console.log (Objects.people1.Name != Objects.people2.Name)
console.log (Objects.people1.Height != Objects.people5.Height)

//[X] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100. 

console.log (Math.floor(Math.random() * 100) +1 )

//[X] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão.
//Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.

let num = 42 
let num2 = 5

console.log ( num % num2) 


//[X] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo.
//Ex: 2 e 5. Imprime: false.

let Menor = 5
let Maior = 7

console.log ( Maior < Menor )