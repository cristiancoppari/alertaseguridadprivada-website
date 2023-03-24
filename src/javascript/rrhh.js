import JustValidate from "just-validate";
import Swal from "sweetalert2";

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
            async function fetchDataFromAPI() {
                // Show the SweetAlert2 modal with a loading message
                const swalInstance = Swal.fire({
                    title: 'Enviando consulta...',
                    html: 'Por favor espere mientras se envía su consulta.',
                    didOpen: () => {
                        Swal.showLoading();
                    },
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: false,
                });

                try {
                    // Create a FormData object
                    const formData = new FormData();

                    // Append the form fields to the FormData object
                    formData.append('name', inputNombreApellido.value);
                    formData.append('email', inputEmail.value);
                    formData.append('phone', inputTelefono.value);
                    formData.append('file', inputCV.files[0]);
                    formData.append('howYouKnowUs', inputComoNosConociste.value)

                    // Fetch data from the API
                    const response = await fetch(`${window.location.protocol}/api/send-email-rrhh`, {
                        method: "POST",
                        body: formData
                    });

                    let timerInterval;
                    // Display a success message in the SweetAlert2 modal
                    Swal.fire({
                        icon: 'success',
                        title: 'Consulta enviada',
                        html: `Su consulta se envió correctamente. <br> <small>Serás redirigido al inicio en <span class"seconds"></span> segundos</small>`,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 5000, // Close the modal after 2 seconds (2000 milliseconds)
                        didOpen: () => {
                            const b = Swal.getHtmlContainer().querySelector('span')
                            timerInterval = setInterval(() => {
                                b.textContent = Math.floor(Swal.getTimerLeft() / 1000)
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then(() => {
                        swalInstance.close();
                        location.href = "/"
                    });
                } catch (error) {
                    // Handle errors
                    console.error('Error fetching data:', error);

                    // Display an error message in the SweetAlert2 modal
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'An error occurred while fetching data.',
                        confirmButtonText: 'Try Again',
                    }).then(() => {
                        // Retry fetching data when the user clicks the "Try Again" button
                        fetchDataFromAPI();
                    });
                }
            }

            // Call the function to fetch data and handle the modal
            fetchDataFromAPI();
        })
})