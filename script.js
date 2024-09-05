document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que el formulario se envíe

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "ANDREA"  && password === "AMOR") {
        message.style.color = "green";
        message.textContent = "¡Felicidades! Te ganaste mi corazón.";
    } else {
        message.style.color = "red";
        message.textContent = "Error: Usuario o contraseña incorrectos";
    }
});
