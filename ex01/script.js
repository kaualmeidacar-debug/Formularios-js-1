//captura formulario

const formEx01 = document.getElementById("formEx01");

formEx01.addEventListener("submit", function (evento) {

    evento.preventDefault();

    // Captura inputs do html  
    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");

    // Testar nome
    if (nome.value.trim() == "") {
        //invalido
        nome.classList.add("is-invalid");
        nome.classList.remove("is-valid");
    }
     else {
        //valido
        nome.classList.add("is-valid");
        nome.classList.remove("is-invalid");
    }

        // Testa cpf
        if (cpf.value.trim() == "") {
            // invalido
            cpf.classList.add("is-invalid");
            cpf.classList.remove("is-valid");
        } 
        else {
            //valido
            cpf.classList.add("is-valid");
            cpf.classList.remove("is-invalid");
        }
        console.log("Nome: " + nome.value);
        console.log("Cpf: " + cpf.value);



});