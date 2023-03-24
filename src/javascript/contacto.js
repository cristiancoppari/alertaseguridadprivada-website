import JustValidate from "just-validate";
import Swal from "sweetalert2";

// const contactoForm = document.querySelector("#contactoForm");
const inputNombreApellido = document.querySelector("#inputNombreApellido");
const inputEmail = document.querySelector("#inputEmail");
const inputTelefono = document.querySelector("#inputTelefono");
const inputMensaje = document.querySelector("#inputMensaje");
const inputCompania = document.querySelector("#inputCompania");
const inputLocalidad = document.querySelector("#inputLocalidad");

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
        // .addField("#inputCompania", [
        //     {
        //         rule: "required",
        //         errorMessage: "Este campo es requerido"
        //     },
        //     {
        //         rule: "minLength",
        //         value: 3,
        //         errorMessage: "Este campo tiene que tener como mínimo 3 caracteres."
        //     }
        // ])
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
        .addField("#inputLocalidad", [
            {
                rule: "required",
                errorMessage: "Este campo es requerido."
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Este campo no puede tener menos de 3 caracteres."
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
                    // Fetch data from the API
                    const response = await fetch(`${window.location.protocol}/api/send-email-contacto/`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: inputNombreApellido.value,
                            email: inputEmail.value,
                            phone: inputTelefono.value,
                            message: inputMensaje.value,
                            company: inputCompania.value,
                            state: inputLocalidad.value
                        })
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