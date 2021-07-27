const edadMayor = 18;
let nombre = prompt('Ingrese su nombre')
let inputEdad = prompt('Porfavor ingrese su edad')


if(inputEdad < edadMayor){
    alert('No puedes ingresar al sitio '+nombre+' ya que tienes '+inputEdad)
}else{
    alert('Bienvenidx '+nombre)
}