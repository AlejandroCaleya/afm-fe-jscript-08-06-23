let NombreError = (EmailError = TelfError = true);

function mostrarError(id, txt) {
	document.getElementById(id).innerHTML = txt;
}

function validarNombre() {
	var nombre = document.formulario.nombre.value;
	if (nombre === "") {
		mostrarError("errorNombre", "ERROR: Campo vacio");
	} else {
		mostrarError("errorNombre", "");

		var regex = /^[a-zA-Z\s]+$/;
		if (regex.test(nombre) === false) {
			mostrarError("errorNombre", "ERROR: Formato inválido");
		} else {
			mostrarError("errorNombre", "");
			NombreError = false;
		}
	}
}

function validarEmail() {
	var email = document.formulario.email.value;
	if (email === "") {
		document.getElementById("errorEmail").innerHTML = "ERROR: email  vacio";
	} else {
		document.getElementById("errorEmail").innerHTML = "";
		var regex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;
		if (regex.test(email) === false) {
			mostrarError("errorEmail", "ERROR: Formato email inválido");
		} else {
			mostrarError("errorEmail", "");
			EmailError = false;
		}
	}
}

function validarTelf() {
	var telf = document.formulario.telf.value;
	if (email === "") {
		mostrarError("errorTelf", "ERROR: Telf  vacio");
	} else {
		mostrarError("errorTelf", "");
		var regex = /^[6789]\d{8}/;
		// if (regex.test(telf) === false)
		//     mostrarError("errorTelf","ERROR: Formato email inválido")
		// else
		//     mostrarError("errorTelf","");

		!regex.test(telf)
			? mostrarError("errorTelf", "ERROR: Formato email inválido")
			: mostrarError("errorTelf", "");

		TelfError = false;
	}
}

function validation() {
	if (!NombreError && !EmailError && !TelfError) return true;
	else {
		validarNombre();
		validarEmail();
		validarTelf();
		return false;
	}
}
