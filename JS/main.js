//var saludo = 'Hola mundo'
//saludo = saludo +'Devlabs';
 //saludo += 'Devlabs'; es lo mismo
//window.alert(saludo);
//var flag = window.confirm('¿Quieres seguir en la pagina?');
//if (flag ===true) {
 //console.log('Estoy dentro del if');
 //var name = window.prompt('¿Cual es tu nombre?')
 //var age = window.prompt ('¿Cual es tu edad')
 //age = parseInt(age)
 //if (age>=18){
 	//window.alert(name + 'es MAYOR de edad')

//}  else {
//window.alert(name+'es MENOR de edad')

	//location.href = 'https://google.cl'

//}
//document.write(saludo)

//clase2!!!!!!!!!!!!!

// var array = [1,2,3]
// array[0];
// //arreglo, usara memoria,
// var largo = array.lenght; //no es necesario delimitarlo
// array.push (4);
// //aarreglos de arreglos = matriz
// array.splice(1);
// function saludar(){
// window.alert('Hola mundo');
// }
// function saludar(name){
// 	 window.alert ('Hola' + name)
// }
//encierran un bloque de codigo
//Sobrecargar
//funtion obtenerSaludo(name){
//	return 'Hola' + name;
//}
//saludar();
//saludar ('Pedro');
//var hola = obtenerSaludo('Pedro');
//saludar(hola);

//Funciones lamda:
//for (var index = 0; index < array.lenght; index++){
//	window.alert(array[index])
//}
//for (var arr in array) {
//	window.alert(array[arr])
//}
//array.forEach(funtion(data) {
//	window.alert(data)
//});

//var saludo = 'Hola mundo';
//window.alert (saludo);

var person = {
	name: 'Peter',
	apellido: 'Simpson',
	color: 'Yellow',
	altura: 1.75, 
	foto: 'img'

	saludar: function () {
	//la funcion encierra un bloque de codigo
	//this alucion a si mismo
	window.alert('Hola' + this.nombre)	
	}
}; 
//se agrupan las caracteristicas entre comas
homero.saludar();

crearTarjeta: function () {
	//Seleccionamos el body
	var body = document.getElementById('body');
	//crear un div y lo guardmos en la variable card
	var card = document.creteElement('div')
	//agregamos la clase card a nuestro div
	card.setAttribute('class', 'card')
	//creamos una imgagen y la guardamos en la variable perfil
	var perfil = document.createElement('img');
	//agregamos la ruta de la imagen
	perfil.setAttribute('src', this.foto);
	//añadimos como hijo la imagen en nuestro div
  card.appendChild(perfil);
  //añadimos como hijo el div en el body
	body.appendChild(card);

}
