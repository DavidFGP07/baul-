// 1. Desarrolle una función que reciba un estudiante y retorne los nombres de los cursos del estudiante.
function Punto1(estudiante) {
  return estudiante.cursos?.map(curso => curso.nombre) || [];
}

// 2. Desarrolle una función que reciba un estudiante y retorne la nota maxima lograda por el estudiante.
function Punto2(estudiante) {
  return estudiante.cursos?.reduce((max, curso) => curso.nota > max ? curso.nota : max, -Infinity) ?? null;
}

// 3. Desarrolle una función que reciba un estudiante y retorne si el estudiante mide mas de 1,65m.
function Punto3(estudiante) {
  return estudiante.altura > 1.65;
}

// 4. Desarrolle una función que reciba un estudiante y retorne el nombre completo del estudiante.
function Punto4(estudiante) {
  return `${estudiante.nombre} ${estudiante.apellido}`;
}

// 5. Desarrolle una función que reciba dos estudiantes y retorne la diferencia de altura entre los estudiantes.
function Punto5(est1, est2) {
  return Math.abs(est1.altura - est2.altura);
}

// 6. Desarrolle una función que reciba un estudiante y retorne el estudiante con el campo 'nombreCompleto' agregado.
function Punto6(estudiante) {
  return {
    ...estudiante,
    nombreCompleto: `${estudiante.nombre} ${estudiante.apellido}`
  };
}
