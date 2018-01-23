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
	nombre: 'Homero',
	apellido: 'Simpson',
	color: 'Amarillo',
	altura: 1.75, 
	foto: 'http://www.ellitoral.com/um/fotos/151769_homer_simpson.jpg',

crearTarjeta: function () {

	console.log('sfsfd');
	//Seleccionamos el body
	var body = document.getElementById('body');
	//crear un div y lo guardmos en la variable card
	var card = document.createElement('div');
	//agregamos la clase card a nuestro div
	card.setAttribute('class', 'card');
	//creamos una imagen y la guardamos en la variable perfil
	var perfil = document.createElement('img');
	//agregamos la ruta de la imagen
	perfil.setAttribute('src', this.foto);
	//añadimos como hijo la imagen en nuestro div
	perfil.setAttribute('id', 'imagen');
  card.appendChild(perfil);
  console.log(card);
    //añadimos como hijo el div en el body
	body.appendChild(card);


	var texto = document.createElement('p');
	var nameText = document.createTextNode('Nombre: ' + this.nombre);
	texto.appendChild(nameText);
	card.appendChild(texto);
	console.log(texto);
	//texto.appendChild(card);

	var texto = document.createElement('p');
	var nameText = document.createTextNode('Apellido: ' + this.apellido);
	texto.appendChild(nameText);
	card.appendChild(texto);
	console.log(texto);

		var texto = document.createElement('p');
	var nameText = document.createTextNode('Color: ' + this.color);
	texto.appendChild(nameText);
	card.appendChild(texto);
	console.log(texto);


		var texto = document.createElement('p');
	var nameText = document.createTextNode('Altura: ' + this.altura);
	texto.appendChild(nameText);
	card.appendChild(texto);
	console.log(texto);
}
};
 var div = document.createElement('div');
  div.appendChild(card);
  div.setAttribute('id', 'texto');
  console.log(div);

//se agrupan las caracteristicas entre comas



//classe cuarta

//los arreglos pueden ser objetos 
var users = [];
{
	name = 'Pedro'
	last_name: 'Manriquez',
	city: 'Temuco'
},{
	name = 'Pedro'
	last_name: 'Manriquez',
	city: 'Temuco'
},{
	name = 'Pedro'
	last_name: 'Manriquez',
	city: 'Temuco'
},{<
	name = 'Pedro'
	last_name: 'Manriquez',
	city: 'Temuco'
},
var tbody = document.getElementById('data')
for(var i = 0;i<users.length;i++){
	var tr = 
}

users.forEach(function(user){
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td1Text = documentcreateTextNode(user.name);
  var td2Text = documentcreateTextNode(user.last_name);
  var td3Text = documentcreateTextNode(user.city);
  td1.appendChild(td1Text);
  td2.appendChild(td2Text);
  td3.appendChild(td3Text);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tbody.appendChild(tr);
});

var numbers = [1,2,3,4,5];
var dobleNumbers = numbers.map(function(num) {
return num * 2;
});
console.log(numbers)
console.log(dobleNumbers)
