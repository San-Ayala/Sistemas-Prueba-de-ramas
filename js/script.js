console.log("Script cargado correctamente");

// ===========
// HEADER
// ===========

const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// ==================
// MENÚ RESPONSIVE
// ==================

const menu = document.getElementById("menu");
const boton = document.getElementById("menuToggle");

if (menu && boton) {

    boton.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}

// ===========
// REGISTRO
// ===========

const registroForm = document.getElementById("registroForm");

if (registroForm) {

    registroForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value;
        const confirmar = document.getElementById("confirmar").value;

        if (password !== confirmar) {

            alert("Las contraseñas no coinciden.");
            return;

        }

        const usuario = {

            nombre: nombre,
            correo: correo,
            password: password

        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("✅ Cuenta creada correctamente.");

        window.location.href = "login.html";

    });

}

// =======
// LOGIN
// =======

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const correo = document.getElementById("loginCorreo").value.trim();
        const password = document.getElementById("loginPassword").value;

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (!usuario) {

            alert("Primero debes registrarte.");

            return;

        }

        if (correo === usuario.correo && password === usuario.password) {

            alert("✅ Inicio de sesión correcto.");

            window.location.href = "descarga.html";

        } else {

            alert("❌ Correo o contraseña incorrectos.");

        }

    });

}

// =============================
// SIMULAR DESCARGA
// =============================

const barra = document.getElementById("progreso");

if (barra) {

    let progreso = 0;

    const porcentaje = document.getElementById("porcentaje");
    const mensaje = document.getElementById("mensaje");

    const intervalo = setInterval(() => {

        progreso++;

        barra.style.width = progreso + "%";
        porcentaje.textContent = progreso + "%";

        if (progreso >= 100) {

            clearInterval(intervalo);

            mensaje.textContent = "La descarga comenzará automáticamente.";

            setTimeout(() => {

                const enlace = document.createElement("a");

                enlace.href = "descarga/Safety.zip";
                enlace.download = "Safety.zip";

                document.body.appendChild(enlace);
                enlace.click();
                document.body.removeChild(enlace);

            }, 1000);

        }

    }, 30);

}