const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 11;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    llenarSelect();
})

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
}) 

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
}) 

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
}) 

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
}) 

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
}) 

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda)
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