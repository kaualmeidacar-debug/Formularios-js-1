const formEx04 = document.getElementById("formEx04");

formEx04.addEventListener("submit", function(evento){
evento.preventDefault();
const Taçai = document.getElementById("Taçai");
const Scalda = document.getElementById("Scalda");
const Afruta = document.getElementById("Afruta");
const complemento = document.getElementById("complemento");

//Taçai
if(Taçai.value.trim() == ""){
    //invalido
    Taçai.classList.add("is-invalid")
    Taçai.classList.remove("is-valid")
}else{
    //valido
    Taçai.classList.add("is-valid")
    Taçai.classList.remove("is-invalid")
}

//Scalda
if(Scalda.value.trim() == ""){
    //invalido
    Scalda.classList.add("is-invalid")
    Scalda.classList.remove("is-valid")
}else{
    //valido
    Scalda.classList.add("is-valid")
    Scalda.classList.remove("is-invalid")
}

//Afruta
if(Afruta.value.trim() == ""){
    //invalido
    Afruta.classList.add("is-invalid")
    Afruta.classList.remove("is-valid")
}else{
    //valido
    Afruta.classList.add("is-valid")
    Afruta.classList.remove("is-invalid")
}

//Complemento
if(complemento.value.trim() == ""){
    //invalido
    complemento.classList.add("is-invalid")
    complemento.classList.remove("is-valid")
}else{
    //valido
    complemento.classList.add("is-valid")
    complemento.classList.remove("is-invalid")
}

    console.log("Taçai: " + Taçai.value);
    console.log("Scalda: " + Scalda.value);
    console.log("Afruta: " + Afruta.value);
    console.log("complemento: " + complemento.value);

});