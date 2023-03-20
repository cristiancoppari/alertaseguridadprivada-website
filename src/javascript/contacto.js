import JustValidate from "just-validate";

const contactoForm = document.querySelector("#contactoForm");
const inputNombreApellido = document.querySelector("#inputNombreApellido");
const inputEmail = document.querySelector("#inputEmail");
const inputTelefono = document.querySelector("#inputTelefono");
const inputMensaje = document.querySelector("#inputMensaje");

window.addEventListener("load", () => {
    console.log("contacto init")

    const validator = new JustValidate("#contactoForm", {
        errorFieldCssClass: ["is-invalid"]
    });

    validator
        .addField("#inputNombreApellido", [
            {
                rule: "required",
                errorMessage: "Este campo es requerido",
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "El campo debe tener por lo menos 3 caracteres.",
            },
        ])
        .addField("#inputEmail", [
            {
                rule: "required",
                errorMessage: "Este campo es requerido",
            },
            {
                rule: "customRegexp",
                value: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/,
                errorMessage: "Ingresa un email válido."
            }
        ])
        .addField("#inputTelefono", [
            {
                rule: "required",
                errorMessage: "Este campo es requerido."
            },
            {
                rule: "minLength",
                value: 1,
                errorMessage: "Este campo no puede estar vacío.",
            },
            {
                rule: "maxLength",
                value: 10,
                errorMessage: "Este campo no puede tener mas de 10 caracteres.",
            },
        ])
        .addField("#inputCotizacion", [
            {
                rule: "required",
                errorMessage: "Debes seleccionar una opción"
            }
        ])
        .addField("#inputMensaje", [
            {
                rule: "required",
                errorMessage: "Este campo no puede estar vacío"
            }
        ])
        .onFail((e) => {
            console.log("validation fail")
        })
        .onSuccess((e) => {
            console.log("validation pass")

            fetch("https://alertas-stage.herokuapp.com/api/send-email-contacto", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: inputNombreApellido.value,
                    email: inputEmail.value,
                    phone: inputTelefono.value,
                    message: inputMensaje.value
                })
            })
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        console.log("200")
                    }
                })
                .catch((error) => console.log(error))
        })
})