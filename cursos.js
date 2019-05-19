const fs = require('fs');

let cursos = [
	{
		id: 1,
		nombre: 'Matematicas',
		duracion: '40 horas',
		valor: 360000
	},
	{
		id: 2,
		nombre: 'Fisica',
		duracion: '40 horas',
		valor: 360000
	},
	{
		id: 3,
		nombre: 'Quimica',
		duracion: '35 horas',
		valor: 315000
	},
	{
		id: 4,
		nombre: 'Biologia',
		duracion: '35 horas',
		valor: 315000
	},
	{
		id: 5,
		nombre: 'Filosofia',
		duracion: '20 horas',
		valor: 180000
	},
];

let buscarCurso = (idCurso) =>{
	return cursos.find(curso => curso.id == idCurso);
};

let toString = (curso)=>{
	return ('\nCodigo: ' + curso.id + 
			'\nNombre: ' + curso.nombre +
			'\nDuracion: ' + curso.duracion +
			'\nValor: ' + curso.valor);			
};

let mostrarCursos = ()=>{
	console.log('Cursos ofertados por educacion continua:');
	cursos.forEach(function(curso, index){
		setTimeout(function(){
			console.log(toString(curso));
		}, 2000*index);
	});
};

let inscribirCurso = (idCurso, nombre, documentoIdentidad)=>{
	let curso = buscarCurso(idCurso);
	if(curso == undefined){
		console.log('\nEl codigo del curso ingresado no exite');
	} else {
		textoArchivo = 'Datos del curso inscrito' + toString(curso) +
						'\nNombre del estudiante: ' + nombre + 
						'\nDocumento de identidad: ' + documentoIdentidad;
		fs.writeFile('Inscripcion.txt', textoArchivo, (err)=>{
			if (err) throw (err);
			console.log('\nSe ha inscrito correctamente el curso');
		});
	}
};

module.exports = {
	cursos,
	mostrarCursos,
	inscribirCurso
}