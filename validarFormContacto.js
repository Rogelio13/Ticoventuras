var validarForm = function(){ /*valida el form que se le indica con los campos necesarios y sus reglas*/
	$('#formContact').formValidation({
        message: 'This value is not valid',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and can\'t be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    }
                }
            },
			nombre: { /*valida el campo de nombre*/
                message: 'El nombre no es válido',
                validators: {
                    notEmpty: {
                        message: 'El nombre es requerido, no puede ser nulo'
                    },
                    stringLength: {
                        min: 3,
                        max: 35,
                        message: 'El nombre debe ser mayor que 3 y menor que 35 caracteres de largo'
                    },
                    regexp: {
                        regexp: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
                        message: 'El nombre solo puede consistir de letras y espacios en medio'
                    }
                }
            },
			apellido1: { /*valida el campo de primer apellido*/
                message: 'El apellido no es válido',
                validators: {
                    notEmpty: {
                        message: 'El apelido es requerido, no puede ser nulo'
                    },
                    stringLength: {
                        min: 2,
                        max: 35,
                        message: 'El apellido debe ser mayor que 2 y menor que 35 caracteres de largo'
                    },
                    regexp: {
                        regexp: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
                        message: 'El apellido solo puede consistir de letras y espacios en medio'
                    }
                }
            },
			apellido2: { /*valida el campo de segundo apellido*/
                message: 'El apellido no es válido',
                validators: {
                    regexp: {
                        regexp: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
                        message: 'El apellido solo puede consistir de letras y espacios en medio'
                    }
                }
            },
			comentario: { /*valida el campo de comentario*/
                message: 'El comentario no es v&aacute;lido',
                validators: {
                    notEmpty: {
                        message: 'El comentario es requerido, no puede ser nulo'
                    },
                    stringLength: {
                        min: 1,
                        max: 350,
                        message: 'El comentario s&oacute;lo admite 350 caracteres de largo'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'The country is required and can\'t be empty'
                    }
                }
            },
            acceptTerms: {
                validators: {
                    notEmpty: {
                        message: 'You have to accept the terms and policies'
                    }
                }
            }, 
            email: { /*valida el campo de email*/
                validators: {
                    notEmpty: {
                        message: 'La direcci&oacute;n de email es requerida, no puede ser nula'
                    },
                    emailAddress: {
                        message: 'El dato ingresado no corresponde a una direcci&oacute;n de correo v&aacute;lida'
                    }
                }
            },
			emailConf: { /*valida el campo de email de confirmación*/
                validators: {
                    notEmpty: {
                        message: 'El correo de confirmaci&oacute;n es requerido, no puede ser nulo'
                    },
                    identical: {
                        field: 'email',
                        message: 'El email y su email de confirmaci&oacute;n no son el mismo, revisar'
                    }
                }
            },
            website: {
                validators: {
                    uri: {
                        message: 'The input is not a valid URL'
                    }
                }
            },
			tel: { /*valida el campo de teléfono*/
				validators: {
					regexp: {
                        regexp: /^[0-9]{8,8}$/,
                        message: 'El tel&eacute;fono solo puede consistir de n&uacute;meros y de una longitud de 8 d&iacute;gitos'
                    },
					notEmpty: {
                        message: 'El tel&eacute;fono es requerido, no puede ser nulo'
                    }
				}
			},
            phoneNumberUS: {
                validators: {
                    phone: {
                        message: 'The input is not a valid US phone number'
                    }
                }
            },
            phoneNumberUK: {
            	validators: {
            		phone: {
            			message: 'The input is not a valid UK phone number',
            			country: 'GB'
            		}
            	}
            },
            color: {
                validators: {
                    color: {
                        type: ['hex', 'rgb', 'hsl', 'keyword'],
                        message: 'Must be a valid %s color'
                    }
                }
            },
            colorAll: {
                validators: {
                    color: {}
                }
            },
            zipCode: {
                validators: {
                    zipCode: {
                        country: 'US',
                        message: 'The input is not a valid US zip code'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and can\'t be empty'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and can\'t be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            ages: {
                validators: {
                    lessThan: {
                        value: 100,
                        inclusive: true,
                        message: 'The ages has to be less than 100'
                    },
                    greaterThan: {
                        value: 10,
                        inclusive: false,
                        message: 'The ages has to be greater than or equals to 10'
                    }
                }
            },
			formaContacto: { /*valida el campo de forma de contacto*/
                validators: {
                    callback: {
                        message: 'Por favor escoja una o ambas opciones',
                        callback: function(value, validator, $field) {
							// Get the selected options
							var options = validator.getFieldElements('formaContacto').val();
							return (options != null && options.length >= 1 && options.length <= 2);
						}
                    }
                }
            }
        }
    })
    .on('success.form.fv', function(e) { /*si hay éxito en el form se ejecuta lo necesario para limpiar y reiniciar los campos del mismo*/
		// Prevent submit form
        e.preventDefault();

        var $form     = $(e.target),
        validator = $form.data('formValidation');

        // Show the modal
        /*var fullName = [validator.getFieldElements('nombre').val(),
                       validator.getFieldElements('apellido1').val()].join(' ');
        $('#helloModal')
            .find('.welcome').html('Hello ' + fullName).end()
            .modal('show');
		*/
        $form
            .formValidation('disableSubmitButtons', false)  // Enable the submit buttons
            .formValidation('resetForm', true);             // Reset the form
    });
}

var ocultarMsjExito = function(){ /*oculta el mensaje de exito al momento de validar*/
	var div=$('.alert-success');
	div.removeClass('show');
	div.addClass('hidden');
}

var desplegarMsjExito = function(){ /*despliega el mensaje de exito al momento de validar*/
	var div=$('.alert-success');
	div.removeClass('hidden');
	div.addClass('show');
}

var validarSubmit=function(){ /*valida cuando se presiona el boton de enviar*/
	$("#formContact").submit(function (e) {
		verificarErrorValidacion(); /*verifica si hay errores para desplegar o no mensaje de éxito*/
		e.preventDefault();	/*no se actualiza la página*/
	});
}
 
var verificarErrorValidacion = function(){ /*valida si hay errores para desplegar o no mensaje de éxito*/
	var formGroups = $('#formContact .form-group'); /*busca las áreas de inputs*/
	if(formGroups.hasClass("has-error")){ /*si una de ellas tiene error...*/
		ocultarMsjExito(); /*oculta el mensaje de éxito*/
	}
	else{
		desplegarMsjExito(); /*muestra el mensaje de éxito si no hay errores...*/
		$("html, body").animate({ scrollTop: 0 }, "slow"); /*se posiciona al inicio de la página*/
	}
}

var resetForm = function(){ /*limpia los campos y áreas de error o éxito al dar click al botón cancelar del form*/
	$("#formContact #limpiarForm").click(function(){
        $('#formContact')
            .formValidation('disableSubmitButtons', false)  // Enable the submit buttons
            .formValidation('resetForm', true);             // Reset the form
		$("html, body").animate({ scrollTop: 0 }, "slow"); /*se posiciona al inicio de la página*/
    });
}

var iniciar_telefonos=function(){
	
	$("#tel").intlTelInput({
        //allowExtensions: true,
        //autoFormat: false,
        //autoHideDialCode: false,
        //autoPlaceholder: false,
        //defaultCountry: "auto",
        //ipinfoToken: "yolo",
        //nationalMode: false,
        //numberType: "MOBILE",
        //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        //preferredCountries: ['cn', 'jp'],
        utilsScript: "lib/libphonenumber/build/utils.js"
     });
}

function readyValidar( jQuery ) { /*ejecuta los métodos que valida*/
	iniciar_telefonos();
	validarForm();
	validarSubmit();
	resetForm();
};

$( document ).ready( readyValidar ); /*corre el js cuando carga el DOM.*/