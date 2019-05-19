const opciones = {
	idCurso: {
		demand: true,
		alias:'i'
	},
	nombre: {
		demand: true,
		alias: 'n'
	},
	documentoIdentidad: {
		demand: true,
		alias: 'd'
	}
};

const argv = require('yargs')
			.command('inscribir', 'Inscribir curso', opciones)
			.argv

const {cursos, mostrarCursos, inscribirCurso} = require ('./cursos');

if(argv._ == "inscribir"){
    inscribirCurso(argv.idCurso, argv.nombre, argv.documentoIdentidad);
}else{
    mostrarCursos();
}