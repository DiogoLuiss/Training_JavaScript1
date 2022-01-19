

//[X] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
//Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.

const Array1 = ["João", "Maria"]

console.log(Array1[0] != Array1[0])
console.log(Array1[0] != Array1[1])


//[X] Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.


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

console.log( Objects.people1.Name)