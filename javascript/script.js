
/* imgs\zzz__tarjeta_PIF.jpg

Clase 11 - Programación modular con  - Crear un archivo script.js. Crear una función que genere un array
de Productos del tipo json y los muestre en la consola. Cada producto debe tener Id, Name, Description, Amount.

Clase 12 - Interactividad con JavaScript - Crear un botón que, al hacer click, agregue un párrafo dentro de la card
del producto, mostrando una descripción ampliada del mismo. La descripción debe obtenerse del campo description del objeto JSON
generado en el Ejercicio 2 de la Clase 11. Este texto se añadirá dinámicamente a la card utilizando JavaScript y manipulación del DOM.

Clase 13 - Carrito de Compras - Implementar un carrito de compras que permita a los usuarios añadir productos desde las cards al carrito,
utilizando localStorage o sessionStorage para almacenar la información.
*/


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: "uno",
            name: "Tentáculos",
            description: "Importante anillo masculino en plata de alto título con pátina elaborado artesanalmente.",
            amount: 45000
        },
        {
            id: "dos",
            name: "Ouroboros",
            description: "Importante anillo masculino en plata de alto título con pátina elaborado artesanalmente.",
            amount: 45000
        },
        {
            id: "tres",
            name: "Mamboretá",
            description: "Broche de uso múltiple elaborado en bronce y acero.",
            amount: 23000
        },
        {
            id: "cuatro",
            name: "Aguilucho",
            description: "Poderoso llavero de presilla en bronce.",
            amount: 14000
        },
        {
            id: "cinco",
            name: "Smaugh",
            description: "Importante pendiente en bronce con finalidad múltiple.",
            amount: 18000
        },
        {
            id: "seis",
            name: "Violinista",
            description: "Llavero de presilla articulado en bronce pavonado.",
            amount: 15000
        },
        {
            id: "siete",
            name: "King Cobra",
            description: "Impactante escultura de uso múltiple en bronce plateado para escritorio o sobremesa.",
            amount: 65000
        }
    ];

    console.log(JSON.stringify(products));
});




function mostrarDescripcion(id) {
    if (id === products.id) {
        return products[id].description;
    }
}

// Switch?


document.querySelector("#uno").value = mostrarDescripcion;

