let comensales, cantCafe, cantCafeCortado, cantCafeJarrito,
cantCafeJarritoCortado, cantCafeConLeche, cantAguaSgas, cantAguaCgas,
cantCocaCola, cantCocaColaL, cantSprite, cantSpriteL, cantFanta, cantTonica,
cantMediaLunas, cantTostado, cantChipa, cantTarta, cantBrownie, cantCeliacos,
cantPromo1, cantPromo2, cantPromo3, cantPromo4;
let contenedorTicket = document.getElementById("contenedor-ticket");
let contieneComandas = [];

function generateSelect(id , productos) {
    select = document.getElementById(id);
    for(i = 1; i <= productos; i++){
        option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }
}

generateSelect('comensales' , 48);
generateSelect('cantCafe' , 99);
generateSelect('cantCafeCortado' , 99);
generateSelect('cantCafeJarrito' , 99);
generateSelect('cantCafeJarritoCortado' , 99);
generateSelect('cantCafeConLeche' , 99);
generateSelect('cantAguaSgas' , 99);
generateSelect('cantAguaCgas' , 99);
generateSelect('cantCocaCola' , 99);
generateSelect('cantCocaColaL' , 99);
generateSelect('cantSprite' , 99);
generateSelect('cantSpriteL' , 99);
generateSelect('cantFanta' , 99);
generateSelect('cantTonica' , 99);
generateSelect('cantMediaLunas' , 99);
generateSelect('cantTostado' , 99);
generateSelect('cantChipa' , 99);
generateSelect('cantTarta' , 99);
generateSelect('cantBrownie', 99);
generateSelect('cantCeliacos' , 99);
generateSelect('cantPromo1' , 99);
generateSelect('cantPromo2' , 99);
generateSelect('cantPromo3' , 99);
generateSelect('cantPromo4' , 99);

function validar(evt) {
    evt.preventDefault();
    comensales = document.getElementById("comensales").value;
    cantCafe = document.getElementById("cantCafe").value;
    cantCafeCortado = document.getElementById("cantCafeCortado").value;
    cantCafeJarrito = document.getElementById("cantCafeJarrito").value;
    cantCafeJarritoCortado = document.getElementById("cantCafeJarritoCortado").value;
    cantCafeConLeche = document.getElementById("cantCafeConLeche").value;
    cantAguaSgas = document.getElementById("cantAguaSgas").value;
    cantAguaCgas = document.getElementById("cantAguaCgas").value;
    cantCocaCola = document.getElementById("cantCocaCola").value;
    cantCocaColaL = document.getElementById("cantCocaColaL").value;
    cantSprite = document.getElementById("cantSprite").value;
    cantSpriteL = document.getElementById("cantSpriteL").value;
    cantFanta = document.getElementById("cantFanta").value;
    cantTonica = document.getElementById("cantTonica").value;
    cantMediaLunas = document.getElementById("cantMediaLunas").value;
    cantTostado = document.getElementById("cantTostado").value;
    cantChipa = document.getElementById("cantChipa").value;
    cantTarta = document.getElementById("cantTarta").value;
    cantBrownie = document.getElementById("cantBrownie").value;
    cantCeliacos = document.getElementById("cantCeliacos").value;
    cantPromo1 = document.getElementById("cantPromo1").value;
    cantPromo2 = document.getElementById("cantPromo2").value;
    cantPromo3 = document.getElementById("cantPromo3").value;
    cantPromo4 = document.getElementById("cantPromo4").value;

    const comanda = new ProcesaComanda(comensales, cantCafe, cantCafeCortado, cantCafeJarrito,
        cantCafeJarritoCortado, cantCafeConLeche, cantAguaSgas, cantAguaCgas,
        cantCocaCola, cantCocaColaL, cantSprite, cantSpriteL, cantFanta, cantTonica,
        cantMediaLunas, cantTostado, cantChipa, cantTarta, cantBrownie, cantCeliacos,
        cantPromo1, cantPromo2, cantPromo3, cantPromo4);

    contieneComandas.push(comanda);
    localStorage.setItem('contieneComandasLS', JSON.stringify(contieneComandas));

    let total=0;

    for (const propiedad in comanda) {
        if (comanda[propiedad] != 0 && propiedad.includes('total')) {
            total = comanda[propiedad] + total;
            document.getElementById('total').innerHTML = 'Total: $' + total ;
        }
        if (comanda[propiedad] != 0 && !propiedad.includes('total')) {
            contenedorTicket.style.display = "block";
            let propiedades = propiedad;
            let comandaPropiedad = comanda[propiedad];
        
            let consumos = document.createElement("h3");
            consumos.innerHTML = `${propiedades}: ${comandaPropiedad}`;
            let ticket = document.getElementById("ticket")
            ticket.append(consumos);
        }
    }

    clearForm("comanda");
    function clearForm(id) {
        document.getElementById(id).reset();
    }
}

document.getElementById("comanda").addEventListener("submit", validar);

const btnLimpiaTicket = document.getElementById('limpia-ticket');
const descripcionTicket = document.getElementsByTagName('h3');

btnLimpiaTicket.onclick = function limpiaTicket() {
    document.getElementById('total').innerHTML = '';
    document.getElementById("ticket").innerHTML= '';
    contenedorTicket.style.display = "none";
}

const buscador = document.getElementById("formulario-busqueda");  
buscador.addEventListener('submit', (e) => {
    e.preventDefault();
    let contieneComandasBase = localStorage.getItem('contieneComandasLS');
    contieneComandasBase = JSON.parse(contieneComandasBase);

    const productoBuscado = document.getElementById("busquedaproductos").value;

    let result = contieneComandasBase.reduce((acc, obj) => {
        return acc + Number(obj[productoBuscado])
    }, 0)

    console.log(result)
    document.getElementById('resultado').innerHTML = result ;
})






  

