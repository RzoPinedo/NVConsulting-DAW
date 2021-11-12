//document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}








                            //Buscador de contenido


//Ejecutando funciones
// document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
// document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}


//Creando filtrado de busqueda


const field = document.getElementById('inputSearch');
    const ac = new Autocomplete(field, {
        maximumItems: 5,
        treshold: 1,
        onSelectItem: ({label, value}) => {
         switch (value) {
            case "1":
                location.href = "cursos.html";
                break;
            case "2":
                location.href = "nosotros.html";
                break;				
            case "3":
                location.href = "Contacto.html";
                break;
			case "4":
               
                break;
            default:
                break;
        }
        }
    });

    ac.setData([
        {
            "label": "Cursos",
            "value": "1"
        }, {
            "label": "Nosotros",
            "value": "2"
        },
        {
            "label": "Contacto",
            "value": "3"
        },
		{
            "label": "Ayuda",
            "value": "4"
        }
		]);
