function validate() {
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;
    if (mail == "user@mail" && password == "123") {
        alert("Bienvenido");
        window.location = "home.html";
        return false;
    } else {
        alert("Usuario o Contraseña incorrectos");

        return false;
    }
}