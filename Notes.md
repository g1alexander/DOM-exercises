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

### 7. Septimo ejercicio - localStorage

- me falto que cuando cambie el tema se guarde en localStorage (tecnicamente si lo use, pero, solo que valide si es el navegador esta light o dark)
- Nota: cuando el localStorage esta vacio es **null**

### 8. Octavo ejercicio - Responsive design JS

- otra vez ejecute una funcion con 2 elementos en el **index.js** en vez de separarlos como lo hizo el profe
- los codigos embebidos de HTML los paso como parametros
- Hice el ejercicio muy bien :) (me gusto mucho la clase)

### 9. Noveno ejercicio - Responsive tester

- me falto validar un poco mas de los inputs del HTML (type="url")
- otra forma de saber quien ha desencadenado un evento es atraves de **e.target === id** (aleternativa a **e.target.matches(id)**)
- atreves del id del form puedes llamar a cualquier input que contengan el form
