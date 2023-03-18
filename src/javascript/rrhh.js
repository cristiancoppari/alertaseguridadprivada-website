import JustValidate from "just-validate";

const rrhhForm = document.querySelector("#rrhhForm");

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
                errorMessage: "Debés ingresar un archivo .pdf, .jpeg, .jpg, .doc, o .docx"
            }
        ])
        .addField("#inputCotizacion", [
            {
                rule: "required",
                errorMessage: "Debes seleccionar una opción"
            }
        ])
        .onFail((e) => console.log(e))
        .onSuccess((e) => console.log(e))

    rrhhForm.addEventListener("submit", (e) => {
        console.log("form submitted");
        e.preventDefault();
    })
})