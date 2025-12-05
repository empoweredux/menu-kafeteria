/**
 * Función que maneja el envío del formulario.
 * 1. Previene el envío HTML por defecto.
 * 2. Realiza la validación de campos.
 * 3. Si es válido, construye el mensaje de WhatsApp y redirige.
 */
function enviarPorWhatsapp(event) {
    // 1. Evita que el formulario se envíe de forma tradicional (por defecto)
    event.preventDefault();

    // 2. DEFINE TU NÚMERO DE WHATSAPP
    // IMPORTANTE: Debe incluir el código de país (ej. 52 para México) sin signos (+ o -) ni espacios.
    const NUMERO_WHATSAPP = "525626361100"; // <--- ¡CAMBIA ESTE POR EL NÚMERO REAL DE TU KAFETERÍA!

    // 3. Obtiene los valores de los campos del HTML
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // 4. VALIDACIÓN DE CAMPOS: JavaScript verifica que Nombre y Mensaje no estén vacíos
    if (nombre === "" || mensaje === "") {
        // Muestra una alerta si falta información
        alert("⚠ Por favor, ingresa tu Nombre y tu Mensaje/Pedido para continuar.");
        return; // Detiene la función y no pasa al siguiente paso
    }
    
    // 5. Construcción del mensaje que aparecerá en WhatsApp
    let textoMensaje = `¡Hola, soy ${nombre} y tengo un mensaje desde su app de menú!\n\n`;
    textoMensaje += `*Mi Korreo Electróniko:* ${email || 'No proporcionado'}\n\n`;
    textoMensaje += `*Mensaje/Pedido:*\n${mensaje}`;

    // 6. Codifica el texto para la URL (convierte espacios a %20, etc.)
    const mensajeCodificado = encodeURIComponent(textoMensaje);

    // 7. Construye la URL final de WhatsApp
    const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeCodificado}`;

    // 8. Abre la URL en una nueva pestaña o aplicación
    window.open(urlWhatsApp, "_blank");
    
    // Opcional: Limpiar el formulario después del envío
    document.getElementById("contactoForm").reset();
}