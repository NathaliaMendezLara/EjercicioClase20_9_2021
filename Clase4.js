
//solicitar nombre

let nombre = prompt("Hola, ingresa tu nombre:");
alert("Para corroborar tu nombre es " + nombre);

//Suma de una compra de golosinas

let gomitas = vermenu();
let dinero = 0;
if(opcion!=10)
{
    vender(opcion);
}
else
{
    alert("Muchas gracias por su compra");
}

function vermenu()
{
    return prompt(`Seleccione una opcion:
    1- Fresas (3 Uyu)
    2- Gusanito acido (1 Uyu)
    3- Bananitas (2 Uyu)
    4- Fin`);

}

function vender(opcion)
{
    switch (opcion)
    {
        case"1":
        {
            pedirdinero(3)
            break;
        }
        case"2":
        {
            pedirdinero(1)
            break;
        }
        case"3":
        {
            pedirdinero(2)
            break;
        }
        default:
            {
                alert("opcion invalida")
                break;
            }
    }
}

//solciitar dinero

function solicitarDinero(numMin)
{
    while(dineroIngresado<numMin)
    {
    let dinero = Number(prompt("Ingrese un monto"));
    if(dinero!==1 && dinero!==5 && dinero!==10)
    {
        alert("monto invalido")
    }
    else
    {
        dimeroIngresado+=dinero;
    }
    }
    let cambio= dineroIngresado-numMin;
    alert("Su  cambio es:" + cambio);
    alert("Gracias");

}