/* Variables */
let cursoAula = parseInt(prompt("Indique cuantos alumnos va a registrar en el registro?"));
let edadAlumnos;
let n;

/* For y Condicionales*/
for(n=1; n<= cursoAula; n++){
    edadAlumnos = parseInt(prompt("Ingrese la edad del alumno?" + n));
       
    if (edadAlumnos <= 4){
        alert("Te corresponde la sala de 4 del jardin");
    }else if (edadAlumnos ==5) {

        alert("Te corresponde ir a la  sala de 5 del jardin");

    }else if(edadAlumnos >=6 ){
        
        alert("Puedes comenzar el primer grado");
    }    
}
/*Mensaje final de salida*/

alert("La cantidad de alumos que se pudieron inscribir fueron: " + cursoAula);
