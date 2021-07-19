const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 11;

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    llenarSelect();
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

function llenarSelect() {
    for( let i=max; i>=min; i-- ) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i;
        year.appendChild(opt)
    }
}