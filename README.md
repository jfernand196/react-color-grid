
Preguntas
# 1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
R:/
 1. La planeación del sprint (sprint planning): Marca el inicio de un sprint, El resultado de esta reunión es el sprint backlog, la    lista  de todos los items con sus tareas asociadas, esta reunión puede tomar de una a dos horas. 

 2. El scrum diario (daily scrum): Conocida como el stand-up meeting (la reunion de pie), es una reunión muy corta, generalmente al inicio del día, en que cada participante cuenta qué items ha completado, en cuál está trabajando y si ha tenido alguna dificultad.

 3. El tiempo de historia (story time); Es una reunión que generalmente se programa a la mitad de la semana con el fin de discutir y mejorar las historias de usuario de futuros sprints.

 4. La revisión del sprint (sprint review): Es la reunión que marca el final del sprint. Se revisan los items que se terminaron y los que no se terminaron.

 5. La retrospectiva (retrospective): Esta es una reunión interna del equipo, generalmente después de la revisión del sprint en donde se identifican uno o dos cambios estratégicos para el siguiente sprint.

# 2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
R:/
- WIREFRAMES: Es un boceto donde se representa visualmente, de una forma muy sencilla y esquemática la estructura de una página web. El objetivo de estos es definir el contenido y la posición de los diversos bloques de la pagina web. 

Herramienta: Figma.com

# 3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
R:/
- CONST: se utiliza para declarar una constante que no se puede reasignar.
- LET: se utiliza para declarar una variable que puede ser reasignada, pero solo vivirá(Funcionara) en el bloque donde fue declarada.
- VAR: Es una variable que si puede cambiar su valor y su scope es local.

Ejemplos:
--------------------------------------------------------------
- VAR:
--------------------------------------------------------------
var i = "global";
function foo() {
    i = "local";
    console.log(i); // local
}
foo();
console.log(i); // local
---------------------------------------------------------------
var i = "global";
function foo() {
    var i = "local"; // Otra variable local solo para esta función
    console.log(i); // local
}
foo();
console.log(i); // global
---------------------------------------------------------------
- CONST:
---------------------------------------------------------------
const i = 0;
i = 1; // TypeError: Assignment to constant variable
---------------------------------------------------------------
- LET:
----------------------------------------------------------------
function foo() {
    let i = 0;
    if(true) {
        let i = 1; // Sería otra variable i solo para el bloque if
        console.log(i); // 1
    }
    console.log(i); // 0
}
foo();
--------------------------------------------------------------------

# 4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
R:/
- git checkout rama-1
- git checkout -b rama-1
- git branch rama-1
# 5. Explicar la diferencia entre git merge y git rebase.
R:/ 
Teniendo como ejemplo 2 ramas: una ppal (main) y otra secundaria:

- Git merge al ser aplicado, mantiene a salvo la historia de la rama secundaria, ya que crea un nuevo commit que une ambas ramas sin “eliminarlas”, creando un nuevo punto de continuación que tiene 2 historias por detrás.

- Git rebase al ser aplicado, NO mantiene a salvo la historia de la rama secundaria, sino que “re-escribe” la historia de la rama principal integrando los commits de la rama secundaria en la rama principal, no crea un commit de unión adicional, sino que cambia el puntero (HEAD) al último commit que ubica.

# 6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
R:/
- Pull Request (PR): Le permiten informar a otros sobre los cambios que ha enviado a una rama en un repositorio en GitHub. Una vez que se abre una solicitud de PR, puede discutir y revisar los posibles cambios con los colaboradores y agregar confirmaciones de seguimiento antes de que sus cambios se fusionen en la rama base.

- Git Pull: Utilizado para actualizar la versión local de un repositorio desde otro remoto.

# 7. ¿Qué es el Virtual DOM?
R:/
El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

# 8. CSS con Flexbox
R:/ 
```.c-section__title {
  color: white;
  display: flex;
  background-color: black;
  font-size: 50px;
  font-weight:lighter;
  height: 90px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  }
.c-services {
  width: 100%;
  background: white;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 2px;
}
.c-services__item:hover{
    background-color: whitesmoke;
    box-shadow: 0px 5px 4px 0.5px rgb(224, 221, 221);
}
h3 {
  padding-left: 40px;
}
p {
  padding-left: 10px;
}
.c-services__item {
  background: whitesmoke;
  color: #fff;
  flex: none;
  width: calc((100% - 20px) / 2);
  margin-bottom: 10px;

  list-style: none;
  color: black;
  font-size: 20px;
  font-weight: lighter;
}
