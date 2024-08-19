// Inicializamos un objeto para almacenar la lista de compras
let listaDeCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: [],
    otros: []
};

// Función para manejar el envío del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtenemos los valores del formulario
    const alimento = document.getElementById('alimento').value;
    const categoria = document.getElementById('categoria').value;

    // Agregamos el alimento a la categoría correspondiente
    if (listaDeCompras.hasOwnProperty(categoria)) {
        listaDeCompras[categoria].push(alimento);
        alert(`${alimento} agregado a la categoría ${categoria}.`);
    }

    // Limpiamos el formulario
    document.getElementById('formulario').reset();
});

// Función para finalizar la lista y mostrarla
document.getElementById('finalizar').addEventListener('click', function() {
    mostrarLista();
});

// Función para mostrar la lista de compras
function mostrarLista() {
    const listaElement = document.getElementById('lista');
    listaElement.innerHTML = ''; // Limpiamos el contenido anterior
    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            listaElement.innerHTML += `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaDeCompras[categoria].join(", ")}\n`;
        }
    }
    document.getElementById('resultado').style.display = 'block'; // Mostramos el resultado
}