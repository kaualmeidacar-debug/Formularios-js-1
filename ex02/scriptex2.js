
const formEx02 = document.getElementById("formEx02");

formEx02.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const cliente = document.getElementById("cliente");
    const pizza = document.getElementById("pizza");
    const tamanho = document.getElementById("tamanho");
    const bebida = document.getElementById("bebida");


    // cliente
    if (cliente.value.trim() == "") {
        //invalido
        cliente.classList.add("is-invalid");
        cliente.classList.remove("is-valid");
    } else {
        //valido
        cliente.classList.add("is-valid");
        cliente.classList.remove("is-invalid");
    }

    //pizza
    if (pizza.value.trim() == "") {
        //invalido
        pizza.classList.add("is-invalid");
        pizza.classList.remove("is-valid");
    } else {
        //valido
        pizza.classList.add("is-valid");
        pizza.classList.remove("is-invalid");
    }

    //tamanho
    if (tamanho.value.trim() == "") {
        //invalido
        tamanho.classList.add("is-invalid");
        tamanho.classList.remove("is-valid");
    } else {
        //valido
        tamanho.classList.add("is-valid");
        tamanho.classList.remove("is-invalid");
    }

    if (bebida.value.trim() == "") {
        //invalido 
        bebida.classList.add("is-invalid");
        bebida.classList.remove("is-valid");
    } else {
        //valido
        bebida.classList.add("is-valid");
        bebida.classList.remove("is-invalid");
    }








    console.log("cliente: " + cliente.value);
    console.log("pizza: " + pizza.value);
    console.log("tamanho: " + tamanho.value);
    console.log("bebida: " + bebida.value);
});