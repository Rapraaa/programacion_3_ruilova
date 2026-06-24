const prompt = require("prompt-sync")();

/*
const usuarioAutenticado = true;
const rolUsuario = "editor";
const seccion = "configuracion";
if (usuarioAutenticado) {
  console.log(`Bienvenido. Rol: ${rolUsuario}`);

  if (rolUsuario === "admin") {
    console.log("Acceso completo concedido.");

    if (seccion === "configuracion") {
      console.log("Cargando panel de configuración del sistema...");
    }
  } else if (rolUsuario === "editor") {
    console.log("Acceso de edición concedido.");

    if (seccion === "configuracion") {
      console.log("⛔ Editores no tienen acceso a configuración del sistema.");
    } else {
      console.log(`Cargando sección: ${seccion}`);
    }
  } else {
    console.log("Rol desconocido. Contacta al administrador.");
  }
} else {
  console.log("Sesión no iniciada. Redirigiendo al login...");
}
// Bienvenido. Rol: editor
// Acceso de edición concedido.
// ⛔ Editores no tienen acceso a configuración del sistema.

const nombre = "Ana";
const email = "ana@correo.com";
const password = "abc";
const MIN_PASS = 8;

if (nombre.trim().length === 0) {
  console.log("❌ El nombre es obligatorio.");
} else {
  console.log(`✅ Nombre válido: ${nombre}`);

  if (!email.includes("@") || !email.includes(".")) {
    console.log("❌ El email no tiene un formato válido.");
  } else {
    console.log(`✅ Email válido: ${email}`);

    if (password.length < MIN_PASS) {
      console.log(
        `❌ La contraseña debe tener al menos ${MIN_PASS} caracteres.`,
      );
      console.log(`   Caracteres actuales: ${password.length}`);
    } else {
      console.log("✅ Contraseña válida. Registro completado.");
    }
  }
}
// ✅ Nombre válido: Ana
// ✅ Email válido: ana@correo.com
// ❌ La contraseña debe tener al menos 8 caracteres.
//    Caracteres actuales:
// 3
//
*/

const totalCompra_i = prompt("Total de la compra: ");
const totalCompra = parseFloat(totalCompra_i);
const esMiembro = prompt("¿Es miembro? (s/n): ");
if (totalCompra > 50) {
  if (esMiembro === "s") {
    console.log("Descuento especial");
  } else {
    console.log("Descuento normal");
  }
} else {
  console.log("No aplica descuento");
}

const edad = prompt("Edad: ");
const estaEstudiando = prompt("¿Estás estudiando? (s/n): ");

if (edad <= 18) {
  if (estaEstudiando === "s") {
    console.log("estudiante activo");
  } else {
    console.log("deberia estar estudiando");
  }
} else {
  console.log("Adulto");
}
