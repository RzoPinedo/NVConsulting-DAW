function mostrar_menu() {
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

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

//Insertar Menu
$("#menu").load("menu.html", function (e) {
    CrearBuscador();
});

//Insertar Footer
$("#footer").load("footer.html", function (e) {
});