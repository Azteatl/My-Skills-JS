'use strict';
const d = document;
const c = console;
const w = window;
//---Usar Métodos de Strings y concatenar con Templates ---
// toUpperCase, toLowerCase() e includes()

const NAME = "JvAn RaMYrez Lozano";

// c.log();


c.log(NAME.toLowerCase());
c.log(NAME.toUpperCase());
c.log(NAME.includes('nono'));




//--- Métodos para Numbers ---
//pasrseInt(), toFixed() y parseFloat()

const NUMBER = 787.94716287146727698427;


c.log(parseInt(NUMBER));
c.log(parseFloat(NUMBER));
c.log(NUMBER.toFixed(3));


//--- Establecer Funciones Declaradas y Expresadas---

function decla(){
    c.log('FUNCION DECLARADA OK');
}
let expre = () => c.log('FUNCION EXPRESADA OK');

decla();
expre();

//--- declara Arrays de las 2 formas
// Usa length, push() y pop()


const arr1 = new Array(0,1,2,3,4),
    arr2 = [5,6,7,8,9];

    c.log(`ARRAYS OK: ${arr1} y ${arr2}`);



//--- Crea un objeto y accede a sus valores con . o []---

const PERRO = {
    raza: "pastor aleman",
    pelo: "largo",
    peso: 80,
    nombre : "boby",
    temperamento: 'tranquilo',
    ladrar (){
        console.log("wof!!! soy 1 objeto perro")
    },
    agresivo: false,
    trucos: ["saludar","muertito","patita","girar","ladrar","atacar","bailar","olfatear","cazar", "lamer"]
}



c.log(PERRO);
c.log(PERRO['peso']);
c.log(PERRO['trucos'][6]);
c.log(PERRO.ladrar());




//--- IF/Else IF/ Else---

let pq = 7;
if (pq > 100) {
    c.log('na');
} else {
    c.log('IF ELSE OK');
}



//--- Operador Ternario---
// (condicion)?true:false;


let edad = 101,
    comprobador = (edad <= 100) ?' estas joven': 'TERNARIO OK';

    c.log(`OPERADOR TERNARIO: ${comprobador}`)



//---Switch-case---

let comida = 9;
switch (comida) {
    case 0:
    c.log('desayuno');
        break;
    case 1:
    c.log('comida');
        break;

    default:
        c.log('SWITCH CASE OK');
        break;
}


//---While---

let n = 0,
    m = 0;
while (n < 3) {
    n ++;
    c.log(`WHILE OK: ${m += n}`);
}




//--- For / For in/ For of ---


for(let i = 0; i < 3; i ++) c.log(`FOR NORMAL OK: ${i}`);
for(let puppy in PERRO) c.log(`FOR IN OK...${puppy} : ${PERRO[puppy]}`);
for(const canario of arr1) c.log(`FOR OF OK ...${canario}`);

//--- try/catch/finally ---


try {
    function er(oiu){
        c.log(suvhu);
    }
    throw new Error('TRY CATCH FINALLY OK')
} catch (err) {
    console.error(err);
}finally{
    c.log('FINALLY OK');
}




//--- Destructuración ---


let datos = ['sopa', 'vivienda', 'mango'],
    [we,wer,wes] = datos;
    c.log(`DESTRUCTURACION OK: ${we}, ${wer}, ${wes}`);


// --- Objetos Literales ---

let cabellera = "cabellera larga",
    botas = true,
    chamba = 'nanai de chamba',
    conciertos = 12354798,
    amor = "amor nanai",
    nombre = "Ivan PESE",
    vejez = 32,
    olor = "olor jediondo";



let yoko = {
    vejez,
    olor,
    merol(){
        c.log('AL FORO SOL PAPU');
    }
}

c.log(yoko);
c.log(yoko['vejez']);
c.log(yoko['olor']);
c.log(yoko.merol());





//---Parametro REST & SPREAD ---


function rest(a,b,...c){
    let res = a * b;

    c.forEach(numad => {
        res += numad ;
    });

    return res;
}

let spread = [ ...arr1, ...arr2];

c.log(`REST OK: ${rest(88,888,888,888,8)}`);
c.log(`SPREAD: ${spread}`);





//--- Arrow functions ---
// Usar 1 sola linea, paso de parametros y {}


let flecha = () => c.log('ARROW BASICA');
let flechap = yo => c.log('ARROW BASICA ' + yo);
let flechar = (a,b,c) => a * b * c;
let flechaml = () => {
    c.log('ARROW BASICA ML');
    c.log('ARROW BASICA ML');
    c.log('ARROW BASICA ML');
    c.log('ARROW BASICA ML');
    c.log('ARROW BASICA ML');
}
flecha();
flechap('zprdpn');
flechaml();
c.log(`flechar: ${flechar(99,99,99)}`);



//--- Prototipos ---
//---Usa Funcion constructora para que objetos hereden de ella---
//Usar clases y herencia entre clases


function Animal(n,g){
    this.n = n;
    this.g = g;
}

Animal.prototype.noise = () => c.log('MAKING GENERICS NOISES');

let pato = new Animal('my name is deisy', 'im a female ducky XD');

c.log(pato);
c.log(pato['n']);
c.log(pato['g']);
c.log(pato.noise());

function puppy(n,g,s){
    this.super = Animal;
    this.super(n,g);
    this.s = s;
}

puppy.prototype = new Animal();
puppy.prototype.constructor = puppy;

puppy.prototype.noise = () => c.log('IM MAKING LADRIDOS OF BENJAMIN IN ENGLISH');

let benji = new puppy('my name is benji', 'im a male puppy', ' my size is very pocket');

c.log(benji);
c.log(benji['n']);
c.log(benji['g']);
c.log(benji['s']);
c.log(benji.noise());

class Human{
    constructor(n,g){
        this.n = n;
        this.g = g;
    }
    hi(){
        c.log('SOY 1 HUMANO MUY SALUDADOR');
    }
}

let van = new Human('me llamo Alter ego', 'soy el más narcicista de todos');

c.log(van);
c.log(van['n']);
c.log(van['g']);
c.log(van.hi());

class Mujer extends Human{
    constructor(n,g,r){
        super(n,g);
        this.r = r ;
    }
        hi()
    {
        c.log('TE SALUDA 1 MUJER MUY BONITA');
    }
}

let andrea = new Mujer('me llamo Andrea', 'soy femenina', 'soy de raza mexicana');

c.log(andrea);
c.log(andrea['n']);
c.log(andrea['g']);
c.log(andrea['r']);
c.log(andrea.hi());



//--- Metodos estáticos, setter y getter:






// Expresiones Regulares:


let TER = 'me llamo juancho',
    ER = /juan/g;

    c.log(`BOOLEAN REGEX: ${ER.test(TER)}`);



//--- Funciones Anónimas Autoejecutables:

( () => c.log('FAA basica') )();

(( () => c.log('FAA basica crockford') )());

+function (){
    c.log('FAA UNARIA');
}();

!function (){
    c.log('FAA ACEBOOKERA');
}();




//--- Practicar importación y exportación :
// import {} from "./file.js" 





//---setTimeout() & SetInterval()---


setTimeout(() => {
    c.log('SET TIME OUT OK');
}, 2000);

setInterval(() => {
    c.log(`SON LAS: ${new Date().toLocaleTimeString()}`);
}, 60000);



//---Callbacks--------

function ulala(yo){
    c.log(`TODO CHIDO ${yo}`);
}
function CB(cb){
    let res = prompt('PALA CB WE: ');
    cb(res);
}
CB(ulala);



//---Promesas---


let prome = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve('...ERES UN BUEN PROMETEDOR')
    }, 3000);
});

prome
    .then( msj => c.log(`EXITO COMO SIEMPRE...${msj}`))
    .then( () => c.log('MENSAJES SUCESIVOS DE LA PROMESA CUMPLIDA'))
    .then( () => c.log('MENSAJES SUCESIVOS DE LA PROMESA CUMPLIDA'))
    .then( () => c.log('MENSAJES SUCESIVOS DE LA PROMESA CUMPLIDA'))
    .catch( (err,reason) => c.log(`OCURRIO EL SIG ${err} POR LA SIG ${reason}`))



//---Funciones Asíncronas---
//---async & await

function retra(){
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('ASINCRONIA CUMPLIDA OK')
        }, 4000);
    })
}

async function AS(){
    c.log('LLAMANDO A LA ASINCRONIA, ESPERE...');
    let res = await retra();
    c.log(res);
}

AS();


//---Symbols---

const sysy = Symbol(),
    ppsy = {
        [sysy] : 'simbolo de pepe ok'
    };
    c.log(ppsy);
    c.log(ppsy[sysy]);


//---sets---


let unic = new Set([0,1,0,1,0,1,4,1,0,1,4,1,0,1,4,7]);
c.log(unic);


//--- Maps ---
// Declara con () y con ([]) Usa set() y get(), size, has(), delete()


let dora = new Map([
    ['nombre','la exploradora'],
    ['hobby','programar mapas en JS']
]);

c.log(dora);
c.log(dora.size);
c.log(dora.has('peto'));
c.log(dora.get('nombre'));
c.log(dora.get('hobby'));
c.log(dora.delete('hobby'));
c.log(dora.size);



//--- Iterables & Iteradores ---


/* const i = [1,2,3];
const i2 = i[Symbol.iterator]();

console.log(i);
console.log(i2.next()); */




//--- Generadores ---

function* iterable(){
    yield 1 ;
    c.log('coco');
    yield 7 ;
    c.log('coco');
    yield 2 ;
    c.log('coco');
    yield 3 ;
    c.log('coco');
    yield 4 ;
    c.log('coco');
    yield 5 ;
    c.log('coco');
    yield 6 ;
    c.log('coco');
}
const iterador = iterable();

c.log(iterador.next());
c.log(iterador.next());
c.log(iterador.next());

// for(const katana of iterador) c.log(katana);


///--- Proxies ---


const oprox = {
    nombre : '',
    hobby : ''
},
admin = {
    Set(obj,prop,val){
        obj[prop] = val ;
    }
},
ana = new Proxy(oprox, admin);

ana.nombre = 'ana la banana';
ana.hobby = 'programar proxys en JS';

c.log(ana);
c.log(ana.nombre);
c.log(ana.hobby);

//Propiedades Dinámicas de los Objetos:

let user = {},
    apis = ['hoy', 'asi', 'se', 'ponen', 'propiedades', 'dinamicas', 'en objetos'];

apis.forEach((apis,index) => user[`Clave ${index}`] = apis);

c.log(user);



// --- JSON ---
const yeison = {
    datos: {
        nombre: "Arkimedes",
        apellidos : "de Asgardh Midgardh",
        direccion : "Avenida de la manzana",
        soltero : true,
        novia : "nanai bro"
    },
    mascotas: false,
    licencia : null,
    casa : true,
    edad : 68,
    instrumentos : [
         ["bajo eléctrico"],
        ["baquetas"]
    ],
    libros : {
        juridico : "Derecho",
        ajedrez : "tácticas de ajedrez",
        recetas : "cocina",
        paranormal : "ufo",
        piramidologia : "varios"
    },
    frases: {
        lunes: "Ni las gallinas ponen",
        martes : "Imagina, Piensa y Crea lo que desees",
        miercoles : "Hoy tuve hipo, jeje",
        jueves : "Ya es juebebes",
        viernes : "Beviernes de conbebencia emocional",
        sabado : "sabadrink con los compas",
        domingo : "Dominguirri de carnita asada con la novia"
    }
}

c.log(JSON.stringify(yeison['frases']));


// c.log();




// -- Nom.Pto para acceder a elementos del DOM

c.log(d.title);
c.log(d.head);
c.log(d.body);
c.log(d.documentElement);


// --- Captura elementos del DOM con querySelector()/All
// y getElementById(). Ya sean id, clases, todos, selector
// descendiente, acceder como array a elem especifico.


const $body = d.querySelector("body"),
    $html = d.querySelector("html"),
    $lazul = d.getElementById("azul"),
    $lrojo = d.getElementById("rojo");


// --- Atributos y DataAttributes ---
// Acceder con Nom.Pto y getAttributte()
// Modifica valores de atributos del DOM con Nom.Pto & con
// setAttribute() & removeAttribute()
// Usar dataset() en una $variable:
// Mandar llamar atributos con nomenclatura delmpto (.style), getComputedStyle() y getPropertyValue()
// Establecer nvas propiedades con style.setProperty() y nom.pto(style.width = "10px")
// Crear y aplicar Custom Properties


c.log($html.lang);
c.log($html.lang = 'es');
$html.setAttribute('lang', 'es-MX');
c.log($html.getAttribute('lang'));
c.log($html.removeAttribute('lang'));
$body.dataset.like = 'DALE-LIKE-PUTO';
c.log($body.style);
c.log($body.style.fontSize);
c.log(getComputedStyle($body).getPropertyValue('background-Color'));
$body.style.backgroundColor = 'black';
$body.style.setProperty('Color', 'white');
let main = getComputedStyle($lrojo).getPropertyValue('--main-color');
c.log(main);
$lrojo.style.setProperty('background-Color', main);




// Usar className y classList/contains()/add()/remove()/replace()/toggle()

c.log($body.className);
c.log($body.classList);
c.log($body.classList.contains('bebe'));
c.log($body.classList.add('bebe'));
c.log($body.classList.add('cheve'));
c.log($body.classList.add('tequila'));
c.log($body.classList.add('coca'));
c.log($body.classList.add('sopa'));
c.log($body.classList.contains('bebe'));
c.log($body.classList.replace('coca', 'coco'));
c.log($body.classList.toggle('TOGGLE'));
c.log($body.classList.toggle('TOGGLE'));
c.log($body.classList.toggle('TOGGLE'));
c.log($body.classList.remove('bebe'));




//  innerHTML, textContent y outerHTML.


let te = 'NO DIGAS',
    ti = 'MENTIRAS CRUELES';

$lrojo.textContent = te;
$lazul.innerHTML = ti;
$lazul.outerHTML = ti;




// Recorrer DOM con children/children[2]/parentElement/firstElementChild/lastElementChild/previousElementSibling/nextElementSibling/closest("body")


c.log($lrojo.children);
c.log($lrojo.parentElement);
c.log($lrojo.lastElementChild);
c.log($lrojo.firstChild);
c.log($lrojo.previousElementSibling);
c.log($lrojo.nextElementSibling);
c.log($body.closest('body'));





// Crear elementos y Fragmentos con createElement(), createDocumentFragment() y appendChild().


let ul = d.getElementById('fragmentitos'),
    fragment = d.createDocumentFragment(),
    api = ['hoy', 'practicamos', 'js', 'con', 'chingos', 'de', 'gusto...'];

    api.forEach(api => {
        let li = d.createElement('li');
        li.innerHTML = api ;
        fragment.appendChild(li);
    });

ul.appendChild(fragment);


// Usar etiqueta Template y crear contenido html dinámico con JS.

    // Instanciar la tabla con el tbody existente
    // y la fila con el template
    var t = document.querySelector('#productrow'),
        td = t.content.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff oogiee boogiee";  
    // Clonar la nueva fila e insertarla en la tabla
    var tb = document.querySelector("tbody");
    var clone = document.importNode(t.content, true);
    tb.appendChild(clone);  
    // Crear una nueva fila
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans";  
    // Clonar la nueva fila e insertarla en la tabla
    var clone2 = document.importNode(t.content, true);
    tb.appendChild(clone2);
 

    // EJEMPLO SENCILLO No.2 DE TEMPLATES:
    let pau = d.querySelector('#template');
    let divi = d.getElementById("app");
    let clone99 = d.importNode(pau.content, true);
    clone99.querySelector('h2').innerHTML = 'Hola vato estamos usando Template';

    divi.appendChild(clone99);




// Modificar elementos "Cool Style" con método insertAdjacentElement()/insertAdjacentHTML()/insertAdjacentText() con posiciones: beforebegin/afterbegin/beforeend y afterend.


let parr = d.createElement('p');
parr.textContent = 'IAElement OK';

$lrojo.insertAdjacentElement('beforebegin', parr);
$lazul.insertAdjacentHTML('beforeend', '<h2>IAHTML OK H2</h2>');
$lazul.insertAdjacentText('afterend', 'IATXT OKIDOKI');




//Usa manejadores de eventos (EventHandler) online, semánticos y multieventos, con paso de parámetros y remueve eventos.


function web(){
    c.log('EVENTO INLINE JS');
}
function seman(){
    c.log('EVENT HANDLER UNICO EN JS');
}
function seman2(){
    c.log('SEGUNDO Y MULTIPLE EVENT HANDLER EN JS');
}
function semanp(yo){
    c.log('EVENTO HANDLER CON PASO DE PARAMETROS EN JS ' + yo);
}

$lazul.onclick = seman;
$lazul.addEventListener('click', seman2);
$lazul.addEventListener('click', () => semanp('the terrible chosen one'));
$lazul.addEventListener('click', e => {
    c.log(e);
    c.log(e.type);
    c.log(e.target);
});




// Flujo de eventos en fase de burbuja y fase de captura.

// $la.addEventListener("click", saludo, true);









//Delega eventos:

// d.addEventListener("click", e => {
//     console.log(`Click en ${e.target}`);
// });







// BOM. Usa sus propiedades y objetos que cuelgan de window, así como sus métodos open(), close() y print(). 







// Usa los objetos location, history y navigator.

// console.log(location);
// console.log(history);
// console.log(navigator);






/*---------- AJAX XMLHTTPRequest ---------------*/

/* (() => {
    const xhr = new XMLHttpRequest(),
        $xhr = d.querySelector("#fragmentitos"),
        $fragment = d.createDocumentFragment();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;
        c.log(xhr);    
        
        if (xhr.status >= 200 && xhr.status < 300) {
            c.log("Hemos tenido éxito con la petición AJAX");
            c.log(xhr.responseText);
            let json= JSON.parse(xhr.responseText);
            c.log(json);

            json.forEach( el => {
                const $li = d.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);

        }else{
            c.log("Ocurrió un error con la petición AJAX...");
            let message = xhr.statusText || "Ha ocurrido un Error...";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/");
    xhr.send();
})(); */
    // xhr.open("GET", "carpeta/nombreArchivo.json");

//----------------------------  AJAX FETCH -------------------------------

/* (() => {
    const $fetch = d.querySelector("#fragmentitos"),
        $fragment = d.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.ok ? res.json() : Promise.reject(res ))
    .then((json) => {
        c.log(json);
        json.forEach( el => {
            const $li = d.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch((err) => {
        c.log(err);
        let message = err.statusText || "Ha ocurrido un Error...";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    }).finally (() => 
    c.log('texto del finally'));
})();   */


// --------------- FeTCH ASYNC/ AWAIT------------------------------

/* (() => {
    const $fetchAsync = d.querySelector("#fragmentitos"),
        $fragment = d.createDocumentFragment();

    async function Data(){
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users/"),
            json = await res.json();

            c.log(res, json);

            if (!res.ok) throw {status: res.status, statusText: res.statusText};

            json.forEach( el => {
                const $li = d.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
                $fragment.appendChild($li);
            });
        $fetchAsync.appendChild($fragment);
        } catch (err) {
            c.log(err);
            let message = err.statusText || "Ha ocurrido un Error...";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        }finally{
            c.log('"bloque finally del ajax asynchronous');
        }
    } Data();
})(); */