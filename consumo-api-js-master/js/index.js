window.addEventListener('load', obtenerDatos);

function obtenerDatos(){

    const Nasa_api = '9ehEUnYaIdecq1qD4oHfiTQYQHPDQpNFkbx1lzli';
    //const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_api}`;
    const ruta = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-10&api_key=${Nasa_api}`;
    
    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado))
}


function mostrarDatos(resultado){
    let cad = `<div class="container">`
    console.log(resultado)

    for (elemento of resultado.near_earth_objects["2015-09-07"]) {
        
        console.log( this.elemento);

        cad += `
        <div class="tarjeta card">
                <h2>Id: ${elemento.id}</h2>
            <div class="cuerpo contenido-card">
                <h4>Nombre: ${elemento.name}</h4>
                <p>$ Es Peligroso: ${elemento.is_potentially_hazardous_asteroid}</p>
                <p>Diametro: ${elemento.estimated_diameter.meters.estimated_diameter_max} metros</p>
                    
                <a href="#">Leer Màs</a>
            </div>
        </div>`
    }
    cad += `</div>`
    document.getElementById("tarjetas").innerHTML = cad;

}
