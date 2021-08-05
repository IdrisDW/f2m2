///El objetivo del reto es, retornar 3 arrays en 3 diferentes constantes, cada array contendrá los alumnos que son de su grupo
// (A, B o C) y únicamente los que fueron aprobados (Calificación mayor o igual a 6), al finalizar se debe de hacer un push a 
//cada array con un objeto que contenga la propiedad promedio 
//y se encuentre el promedio de los alumnos que aprobaron dependiendo de cada grupo.

const estudiantes = [
    { nombre: 'Pedro', calif: 5, grupo: 'A' },
    { nombre: 'Pablo', calif: 8, grupo: 'B' },
    { nombre: 'Alexis', calif: 2, grupo: 'A' },
    { nombre: 'Oscar', calif: 4, grupo: 'C' },
    { nombre: 'Arturo', calif: 7, grupo: 'C' },
    { nombre: 'Juan', calif: 5, grupo: 'A' },
    { nombre: 'José', calif: 6, grupo: 'B' },
    { nombre: 'Cesar', calif: 5, grupo: 'A' },
    { nombre: 'Rodolfo', calif: 7, grupo: 'C' },
    { nombre: 'Arturo', calif: 9, grupo: 'C' },
    { nombre: 'Diego', calif: 8, grupo: 'A' },
    { nombre: 'Esteban', calif: 6, grupo: 'B' },
    { nombre: 'Julio', calif: 6, grupo: 'A' },
    { nombre: 'Ciro', calif: 7, grupo: 'C' }
];

return grupoA; // Estudiantes grupo A aprobados [ { nombre: 'Diego', calif: 8, grupo: 'A' }, ..., {Promedio: ** } ]
return grupoB; // Estudiantes grupo B aprobados [ { nombre: 'Pablo', calif: 8, grupo: 'B' }, ..., {Promedio: ** } ]
return grupoC; // Estudiantes grupo C aprobados [ { nombre: 'Arturo', calif: 7, grupo: 'C' }, ..., {Promedio: ** } ]