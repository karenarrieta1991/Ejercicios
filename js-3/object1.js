const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
  }
  
  console.log(pedro.edad)
  pedro.estatura = 1.8
  delete pedro.activo
  
  const keys = Object.keys(pedro)
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    console.log(keys[i] + ":" , pedro[key])
  }

  function saluda(nombre){

    let saludo = "Hola me llamo" + nombre;
    return saludo;

}

console.log(saluda(" Pedro Peréz"))