const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})

function mostrarAutos() {
    autos.forEach(auto => {
        const {marca, modelo, color, precio, puertas, transmision, year} = auto
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            Marca: ${marca} -- 
            Modelo: ${modelo} -- 
            Color: ${color} -- 
            Precio: ${precio} -- 
            Puertas: ${puertas} -- 
            Transmision: ${transmision} -- 
            Año: ${year}
        `;

        resultado.appendChild(autoHTML);
    })
}