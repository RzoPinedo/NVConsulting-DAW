//Creando filtrado de busqueda
function CrearBuscador() {
    const field = document.getElementById('inputSearch');
    const ac = new Autocomplete(field, {
        maximumItems: 5,
        treshold: 1,
        onSelectItem: ({ label, value }) => {
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
                    location.href = "index.html";
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
}
