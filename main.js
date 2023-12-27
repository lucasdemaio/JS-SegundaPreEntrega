//declaracion de variables e inicializacion
const descuento = 0.80
let pedidoAsado
let totalPedidoAsado = 0
let pedidoVacio
let totalPedidoVacio = 0
let pedidoCerdo
let totalPedidoCerdo = 0
let pedidoChorizo
let totalPedidoChorizo = 0
let pedidoAchuras
let totalPedidoAchuras = 0
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const año = fechaActual.getFullYear();
const fechaFormateada = `${dia}/${mes}/${año}`;

//Arreglo para reserva de productos
let reserva = [];

// Definición de la lista de productos con sus propiedades
const productos = [
    { id: 1, nombre: "asado", precio: 4000 },
    { id: 2, nombre: "vacio", precio: 5000 },
    { id: 3, nombre: "cerdo", precio: 3000 },
    { id: 4, nombre: "chorizo", precio: 2500 },
    { id: 5, nombre: "achuras", precio: 4500 },
  ];

// Función que calcula el total de la compra
function suma(valor1, valor2, valor3, valor4, valor5) {
  return (
    valor1 * productos[0].precio +
    valor2 * productos[1].precio +
    valor3 * productos[2].precio +
    valor4 * productos[3].precio +
    valor5 * productos[4].precio
  );
}

// Funcion para mostrar productos
function formatProducto(producto) {
  return `Nombre: ${producto.nombre}, Precio x kg: $${producto.precio}`;
}

// Crea una cadena de texto con la información de todos los productos
const productosString = productos.map(formatProducto).join('\n');

//Funcion utilizada para realizar los pedidos
function validar(v){
  questPedido = `Cuantos kg de ${v} desea comprar?` 
  pedido = Number(prompt(questPedido));
  while (isNaN(pedido)) {
    alert("Debe ingresar los kg en numeros")
    pedido = Number(prompt(questPedido))
  }
};

// Función que aplica un descuento al total
function promocion(total){
  return(total*descuento);
};

// Bucle principal para realizar pedidos
let entrada = prompt(`Productos disponibles:\n\n${productosString} \n\nEscriba el nombre del producto desea comprar O Ingrese FIN para finalizar`).toLowerCase()

while (entrada != "fin") {
    switch (entrada) {
        case "asado":
          pedidoAsado = validar("asado");
          totalPedidoAsado = totalPedidoAsado + pedido
          alert(`Ha elegido comprar ${totalPedidoAsado}kg de Asado`);    
          break;

        case "vacio":
          pedidoAsado = validar("vacio");
          totalPedidoVacio = totalPedidoVacio + pedido
          alert(`Ha elegido comprar ${totalPedidoVacio}kg de Vacio`);    
          break;  

        case "cerdo":
          pedidoCerdo = validar("cerdo");
          totalPedidoCerdo = totalPedidoCerdo + pedido
          alert(`Ha elegido comprar ${totalPedidoCerdo}kg de Cerdo`);    
          break;

        case "chorizo":
          pedidoChorizo = validar("chorizo");
          totalPedidoChorizo = totalPedidoChorizo + pedido
          alert(`Ha elegido comprar ${totalPedidoChorizo}kg de Chorizo`);    
          break;
        
        case "achuras":
          pedidoAchuras = validar("achuras");
          totalPedidoAchuras = totalPedidoAchuras + pedido
          alert(`Ha elegido comprar ${totalPedidoAchuras}kg de Achuras`);    
          break;

        // Mensaje por defecto si la entrada no coincide con ningún producto
        default:
            alert("Debe escribir algunos de los productos listado")
    }
    entrada = prompt("Escriba que producto desea agregar o modificar: \n Asado, Vacio, Cerdo, Chorizo, Achuras. \n \n O Ingrese FIN para finalizar").toLowerCase();
};

// Cálculo del total de la compra
let total = suma(totalPedidoAsado, totalPedidoVacio, totalPedidoChorizo, totalPedidoCerdo, totalPedidoAchuras);


// Verificación de descuento y resumen de la compra
if (total > 15000){    
  let totalConDescuento = promocion(total);
  alert(`Su resumen de compra del dia ${fechaFormateada} es :
  \nAsado ${totalPedidoAsado}kg \nVacio ${totalPedidoVacio}kg \nCerdo ${totalPedidoCerdo}kg \nChorizo ${totalPedidoChorizo}kg \nAchuras ${totalPedidoAchuras}kg
  \n\nEl total es de $${total}, \ncon descuento por superar los $15000 es de $${totalConDescuento}`);
} 
else if (total === 0) {
  alert("No ha realizado ninguna compra")
} 
else{
  alert(`Su resumen de compra del dia ${fechaFormateada} es :
  \nAsado ${totalPedidoAsado}kg \nVacio ${totalPedidoVacio}kg \nCerdo ${totalPedidoCerdo}kg \nChorizo ${totalPedidoChorizo}kg \nAchuras ${totalPedidoAchuras}kg
  \n\nEl total a pagar es de $${total}`)
};

// Se inicia programa de reserva de productos
let reservaProd = prompt(`En caso de querer reservar algún producto que no estaba en el menu anterior, ingrese qué producto desea (Ejemplo: Pollo). O ingrese SALIR para finalizar`).toLowerCase();

// Bucle que permite al usuario realizar múltiples reservas hasta que ingrese "SALIR"
while (reservaProd !== "salir") {
  let reservaKg = Number(prompt("¿Cuántos Kg desea comprar?"));
  let reservaNombre = prompt("¿Cuál es su nombre?");
  let reservaTel = prompt("¿Cuál es su teléfono para comunicarnos con usted?");
  
  // Se agrega la reserva actual al arreglo "reserva" como un objeto
  reserva.push({ Producto: reservaProd, Cantidad: reservaKg, Nombre: reservaNombre, Tel: reservaTel });
  
  // Se vuelve a preguntar al usuario si desea reservar otro producto o salir
  reservaProd = prompt(`¿Desea reservar otro producto? En caso negativo, ingrese SALIR`).toLowerCase();
};

// Se verifica si se realizaron reservas
if (reserva.length > 0) {
  // Se construye un mensaje de resumen de reservas
  let mensaje = "Nos contacteremos con usted a la brevedad, su resumen de reserva:\n";
  for (let i = 0; i < reserva.length; i++) {
    mensaje += `
      Producto: ${reserva[i].Producto}
      Cantidad Kg: ${reserva[i].Cantidad}
      Nombre Cliente: ${reserva[i].Nombre}
      Teléfono Contacto: ${reserva[i].Tel}
    \n`;
  }
  // Se muestra el mensaje de resumen mediante una alerta
  alert(mensaje);
} else {
  // Si no se realizaron reservas, se informa al usuario
  alert("No ha solicitado reservar ningún producto");
}

// Búsqueda de productos por nombre
let entrada2 = prompt("MENU DE BUSQUEDA POR NOMBRE DE PRODUCTO\n\nEscriba que producto desea buscar:").toLowerCase();
const producto = productos.find((item) => item.nombre === entrada2)

if (producto) {
  alert(`Resultado de su busqueda\n
    Id: ${producto.id}
    Nombre: ${producto.nombre}
    Precio: ${producto.precio}
  `);
} else {
  alert("Producto no comercializado")
}

// Filtrado de productos por precio mínimo
let precio = Number(prompt("MENU DE FILTRADO DE PRODUCTOS POR PRECIO\n\nIngrese el precio mínimo dispuesto a pagar"));
let filtrados = productos.filter((item) => item.precio >= precio);

if (filtrados && filtrados.length > 0) {
  filtrados.forEach((item) => {
    alert(`Resultado de su filtro\n
      Id: ${item.id}
      Nombre: ${item.nombre}
      Precio: ${item.precio}
    `);
  });
} else {
  alert("No existen productos que tenga como minimo ese precio")
};
