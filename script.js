// =========================================
// CONFIGURACIÓN
// =========================================

// Cambia esta contraseña por la que quieran usar.
const CLAVE = "teamo";

// =========================================
// ELEMENTOS
// =========================================

const loginForm = document.getElementById("login-form");

const passwordInput = document.getElementById("password");

const errorMessage = document.getElementById("error-message");

const loginScreen = document.getElementById("login-screen");

const mainContent = document.getElementById("main-content");


// =========================================
// LOGIN
// =========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const password = passwordInput.value.trim();


    if (password === CLAVE) {

        // Ocultar pantalla de contraseña
        loginScreen.classList.add("hidden");

        // Mostrar página
        mainContent.classList.remove("hidden");

        // Volver al principio de la página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        // Mostrar error
        errorMessage.classList.add("show");

        // Limpiar campo
        passwordInput.value = "";

        // Pequeña vibración visual
        passwordInput.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 300
            }
        );

    }

});


// =========================================
// QUITAR ERROR AL ESCRIBIR
// =========================================

passwordInput.addEventListener("input", function () {

    errorMessage.classList.remove("show");

});