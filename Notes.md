## Notas de los ejercicios del DOM

---

### 1. Primer ejercicio

- En la estructura del codigo me faltó poner una etiqueta **"main"** que envolvieran las 5 seccion.
- Utilizé para el icon **Fontawesone** y el profe utilizó una libreria llamada **hamburger js** que además trae una animación.
- Me falta manejar las animaciones CSS, para darle más interacciones a las paginas que realice.
- Si bien realice bien el evento del menu-burger, faltó modularizarlo.

---

### 2. Segundo ejercicio **"Reloj digital - Alarma Sonora"**

- No era necesario poner las funcione de reloj y alarma en una sola, el profe hizo dos funciones separadas para cada uno, si bien solo se puede exportar una funcion por **default** no se estrictamente necesario poner todo en una funcion
- El profe utilizó **innerHTML** para actualizar el reloj, yo utilize **templete**, una diferencia que noté fue que gasto menos lineas de codigo
- En la parte del audio, el profe no creo en el **HTML** la etiqueta, si no, que atraves de **JS** la creó
- el profe puso algunas cosas que yo no, coloco un **setTimeout** para que la etiqueta audio esperara 2 seg antes de reproducirse
- y uso una propiedad llamada **currentTime = 0** que hace que reset al audio para que vuelva a iniciar desde 0

---

### 3. tercer ejercicio **eventos de teclado**

- en el archivo principal donde se hace las importaciones no era necesario poner los eventos del teclado, ya que, esos no necesitan un click para ejecutarlos.
- como yo tengo los eventos del teclado, hace que consuma mas memoria (hay 3 y el profe solo utiliza 1)
- Me falto una cosa muy importante, la colision de la pelota :)
- puede haberme ahorrado muchos **if** usando un **switch**
- el ejercicio el profe lo resolvio podiendo un **.style transform** (mi primer intento fue ese, pero, en vez de poner transform puse, **left, top, ...**)
- el metodo para detectar las coliciones es **getBoundingClientRect()**

---

### 4. Cuarto ejercicio - Conteo regresivo

- como solo trabajamos con un id, podia haber trabajado con **getElementById()**
- el profe solo paso el formato del de la fecha y internamente lo paso a **new Date()**
- algo adicional que pude haber puesto es que las horas, min y seg aparezca un **"0"** cuando el contador baje de 10. ej "09, 08 ...", se hace con: **"0" ... .slide(-2)**

---

### 5. Quinto ejercicio - boton de scroll

- Se puede dibujar iconos con codigo ascii :)
- **Me falto algo importante y no es a nivel del ejercicio, si no a nivel de animaciones, me falta aprender eso en css (y los frameworks css)**
  -Nota Importante: en el evento click del boton me falto delegar el evento, hay que recordar que delegar el evento es muy importante para que el rendimiento de la pagina no se vea afectado
  -el profe coloco el evento del scroll en el **DOMContentLoaded** no fuera de el como yo

---

### 6. Sexto ejercicio - dark mode

- el profe hizo el cambio de tema con **data-attribute** en el HTML

---

### 7. Septimo ejercicio - localStorage

- me falto que cuando cambie el tema se guarde en localStorage (tecnicamente si lo use, pero, solo que valide si es el navegador esta light o dark)
- Nota: cuando el localStorage esta vacio es **null**

---

### 8. Octavo ejercicio - Responsive design JS

- otra vez ejecute una funcion con 2 elementos en el **index.js** en vez de separarlos como lo hizo el profe
- los codigos embebidos de HTML los paso como parametros
- Hice el ejercicio muy bien :) (me gusto mucho la clase)

---

### 9. Noveno ejercicio - Responsive tester

- me falto validar un poco mas de los inputs del HTML (type="url")
- otra forma de saber quien ha desencadenado un evento es atraves de **e.target === id** (aleternativa a **e.target.matches(id)**)
- atreves del id del form puedes llamar a cualquier input que contengan el form

---

### 10. User agent

- esta tecnica nos sirve mucho para tener un control sobre que dispositivo esta usando el usuario
- nos funciona principalmente para el responsive design
- en el periodo el 2012 a 2016 aprox las empresas utilizaban un metodo el cual consistia en tener varios frontend de su sitio y por medio del user agent hacia que dependiendo en que dispositivo este asi mismo rediriguir al usuario a uno o otro
- Nota: para los visitantes en dispositivos moviles se usaba un subdominio **m.\*com**
- en **recursos** esta una pagina donde se puede ver la historia de distintos sitios web

---

### 11. ejercicio once - desteccion del estado de red

- la funcion no necesita ejecutarse a la carga del documento, yo lo puse :c
- **tip** para simular la desconexion a internet en la parte de aplicacion de la consola "servi worker" esta la op ion de poner offline la pantalla, pero, hay que tener cuidado de no recargar la pagina porque te apareceria el juego del dinosario de google
- el profe creo el elemento desde js volviendolo dinamico, yo lo puse en el html
- nota: la condicion del **n.online** la puse mal, debi ponerla en una sola funcion y esa pasarle esa funcion a los eventos w.addEvent...
- tanto el online como offline se quita el mensaje despues de 2seg

---

### 12. ejercicio 12 - deteccion de camara

- me falto añadir el mensaje de el error en la pantalla del navegador
- lo hice muy bien :)

---

### 13. ejercicio 13 - geolocalizacion

- me falto añadir el mensaje de el error en la pantalla del navegador - mmm
- al metodo **getCurrentPosition()** se le pueden poner mas parametros, exactamente 3, el primero es mensaje de exito, segundo error, y el tercero son las opciones (**{}**), puedes poner tiempo de ejecucion, la presicion, etc...
- me falto poner el zoom de google maps en el enlace

---

### 14. ejercicio 14 - filtro de busqueda

- no necesitaba ingresar el selector que agrupa todas las tarjetas, mas bien era el selector individual en comun de cada tarjeta
- el evento que manejo el profe fue el **keyup** no le veo diferencia con el que use
- una cosa que no entendi fue que usara el metedo dentro el **DOMContentLoaded**
- me pude ahorrar la variable **string** que cree para agrupar las letras, el atributo era **e.target.value**
- me falto convertir a minusculas!!! pense lo habia puesto`
- me falta optimizar, si bien funciona no es muy recomendable poner dos **for**

---

### 15. ejercicio 15 - sorteo digital

- los lenguajes debia ponerlos en el html no en un array en javascript
- en el numero aletorio puse **Math.random() \* (10 - 0) + 0** la multiplicacion estatica me la ahorrar con **Math.random() \* arr.length** para que quede dinamica
- el foreach me lo pude ahorrar, ya que la variable **aletorio** tiene la posicion del ganador, entonces solo era poner array[aletorio]
- NOTA: para extraer el contenido de un **nodelist** es con **variable.textContent**

---

### 16. ejercicio 16 - responsive carousel

- me falto animaciones
- Nota: en los carousel hay algo a tener en cuenta en las imagenes, y es que dependiendo del alto y ancho de la imagen, esta se puede deformar. <br>
  Para solucionar esto se puede usar el siguiente codigo **css** <br>
  esto hara que las imagenes primero hereden el alto y ancho del contenedor padre, luego que la imagen se adapte con respecto al ancho y por ultimo se ubica la imagen centrada en el ancho y position 0 en la altura

```css
 {
  height: inherit;
  width: inherit;
  object-fit: cover;
  object-position: 50% 0%;
}
```

- el profe puso la ubicacion de las imagenes dentro de html, yo lo puse en javascript
- TAREA: poner un auto play al carousel

---

### 17. ejercicio 17 - scrollspy

- el panel que contiene el menu lo duplique :) jajajaj, tenia que convertirlo en movil y deskop ... F
- me falto quitar un poco de padding y font-size al menu deskop
- el profe no le manda parametros a la funcion, la razon es que los manejo con data-attribute y yo lo hice con clases
- me pude ahorrar el **for** del menu atrayendome el solo el **d.querySelector()** que tenga el href igual al id, recuerda que los **href** del menu comparten el mismo nombre de los **id** de las **section**
- la programacion la hice muy bien !! :)
- la propiedad **threshold** que maneja el limite de las visualizaciones se puede manejar tambien como arreglo

```javascript
{
  threshold: [0.5, 0.75]; //min y max :)
}
```

---
