document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const pelicula = document.getElementById('pelicula').value.trim();
    const puntuacion = document.getElementById('puntuacion').value.trim();
    const comentario = document.getElementById('comentario').value.trim();
    const formCartel = document.getElementById('formAvisos');

    formCartel.innerHTML = ' ';


    function validacion() {

        let errores = [];

        if (pelicula.length === 0) {
            errores.push("Debe completar el campo de Pelicula.")
        }else if (pelicula.length >= 30) {
            errores.push("El campo no puede pasar los 30 caracteres")
        }

        let punt = parseInt(puntuacion)
        if (isNaN(punt) || punt < 1 || punt > 5) {
            errores.push("Eliga una puntuacion correcta")
        }

        if (errores.length > 0) {
            formCartel.innerHTML = "<ul><li>" + errores.join("</li><li>") + "</li>  </ul>";
        } else {
            const frmEnviado = document.createElement('p');
            frmEnviado.textContent = "Pelicula " + pelicula + " ' -  Puntuacion de pelicula: " + puntuacion + " - Comentario sobre pelicula: " + comentario;
            formCartel.appendChild(frmEnviado);
            document.getElementById('formulario').reset();
            frmEnviado.className = "frmExito";
        }
    };
    validacion();

    });