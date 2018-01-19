



var text ='>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni illum incidunt dolores, sit ab accusantium tempore nihil repudiandae illo fugiat distinctio possimus earum rem in libero officia, ut mollitia iusto.';


var div = document.createElement('div');
div.setAttribute('class', 'container')
var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Titulo de la pagina');
h1.setAttribute('class', 'tittle');
h1.appendChild(h1Text);

var p = document.createElement('p');
var pText = document.createTextNode(text);
p.setAttribute('class', 'paragraph');
p.appendChild(pText);
div.appendChild(h1);
var button = document.createElement('button')
var buttonText = documente.createTextNOde('Click')
button.setAttribute('class', 'btn');
button.onclick
div.appendChild(p);

document.getElementsByTagName('body')[0].appendChild(div);

//Evento = registro del usuario
