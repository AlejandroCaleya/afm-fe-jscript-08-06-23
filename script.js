const LETRAS = [
	"T",
	"R",
	"W",
	"A",
	"G",
	"M",
	"Y",
	"F",
	"P",
	"D",
	"X",
	"B",
	"N",
	"J",
	"Z",
	"S",
	"Q",
	"V",
	"H",
	"L",
	"C",
	"K",
	"E",
	"T",
];

let NombreError = (EmailError = TelfError = GRPDError = dninieError = true);

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

function validarGRPD() {
	let grpd = document.formulario.grpd.checked;
	console.log(grpd);
	if (grpd) {
		mostrarError("errorGRPD", "");
		GRPDError = false;
	} else {
		mostrarError("errorGRPD", "ERROR: GRPD debe estar seleccinado");
	}
}

function validarDniNie() {
	let DniNie = "";
	DniNie = document.formulario.dninie.value;
	var regex = /^[XYZ]?\d{8}[A-Z]$/;
	if (regex.test(DniNie) === false) {
		mostrarError("errordninie", "ERROR: Formato DNI/NIE inválido");
	} else {
		let letra = DniNie[DniNie.length - 1];
		regex = /\d+/g;
		dni = parseInt(DniNie.match(regex));
		if (LETRAS[dni % 23] != letra) {
			mostrarError("errordninie", "ERROR: Letra no correcta");
		} else {
			mostrarError("errordninie", "");
			dninieError = false;
		}
	}
}

function validation() {
	if (!NombreError && !EmailError && !TelfError && !GRPDError) return true;
	else {
		validarNombre();
		validarEmail();
		validarTelf();
		validarGRPD();
		validarDniNie();
		return false;
	}
}
