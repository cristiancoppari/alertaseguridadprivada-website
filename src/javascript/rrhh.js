import JustValidate from "just-validate";

const rrhhForm = document.querySelector("#rrhhForm");
const inputNombreApellido = document.querySelector("#inputNombreApellido");
const inputEmail = document.querySelector("#inputEmail");
const inputTelefono = document.querySelector("#inputTelefono");
const inputCV = document.querySelector("#inputCV");
const inputComoNosConociste = document.querySelector("#inputComoNosConociste")

window.addEventListener("load", () => {
    console.log("rrhh init")

    const validator = new JustValidate("#rrhhForm", {
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
        .addField("#inputCV", [
            {
                rule: "minFilesCount",
                value: 1,
                errorMessage: "Debés ingresar un archivo."
            },
            {
                rule: "maxFilesCount",
                value: 1,
                errorMessage: "No podés ingresar más de 1 archivo."
            },
            {
                rule: "files",
                value: {
                    files: {
                        extensions: ["pdf", "jpeg", "jpg", "png", "doc", "docx"]
                    }
                },
                errorMessage: "Debés ingresar un archivo .pdf, .jpeg, .webp, .doc, o .docx"
            }
        ])
        .addField("#inputComoNosConociste", [
            {
                rule: "required",
                errorMessage: "Debes seleccionar una opción"
            }
        ])
        .onFail((e) => console.log(e))
        .onSuccess((e) => {
            // Create a FormData object
            const formData = new FormData();

            // Append the form fields to the FormData object
            formData.append('name', inputNombreApellido.value);
            formData.append('email', inputEmail.value);
            formData.append('phone', inputTelefono.value);
            formData.append('file', inputCV.files[0]);
            formData.append('howYouKnowUs', inputComoNosConociste.value)
            console.log(inputComoNosConociste.value)

            console.log(formData)

            fetch(`${window.location.protocol}/api/send-email-rrhh`, {
                method: "POST",
                body: formData
            })
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        location.href = "/"
                    }
                })
                .catch((error) => console.log(error))
        })
})