
// const compras = ["Vino", "Botella", "Pantalon", "Celular", "lentes"]
// const principal = document.querySelector(".principal")

// const crearCard = (array) => {
//     let acc = ''
//     for (let i = 0; i < array.length; i++) {
//         acc = acc + `  
//         <article class="producto">
//             <h3>${array[i]}</h3>
//             <img src="https://bit.ly/3hluvPA">
//         </article>
    
//     `     
//     }
//     principal.innerHTML = acc
// }

// crearCard (compras)

// const gatos = ["Facu", "Elio", "Europa" , "Daniel", "Chispas"]

// let otrosGato = "Raul" // En este caso la acumuladora siempre va FUERA del for

// for (let i = 0; i < gatos.length; i++) {
//     const element = gatos[i]; 
// otrosGato = otrosGato + `${element}`
// console.log (otrosGato)
// }


// const numeros = [5, 7, 8, 4]
// // Hacer un codigo que recorra el array numeros y muestre en consola la suma de todos ellos. El resultado deberia ser 24.

// let acc =  0 

// for (let i = 0; i < numeros.length; i++) {
//     // console.log (element)
//     acc = acc + numeros[i]
//     console.log (acc)
// }

const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
// Dado el anterior array de nombres, hacer un codigo que recorra todos los nombres y muestre en consola el mensaje

// Ana - Elsa - Olaf - Sven - Hans - (con guiones)

// let acc = ""
// for (let i = 0; i < nombres.length; i++) {
//     const element = nombres[i];
//     acc = acc +" - "+ element
//     console.log (acc)
// }


let acc = ""
for (let i = 0; i < nombres.length; i++) {
    const element = nombres[i];
    acc = acc + `
            <li> ${element} </li>
            `

    console.log (acc)
}