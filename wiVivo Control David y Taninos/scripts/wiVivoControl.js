// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

//variables Globales
//var servidor_wivivo = 'http://srv001.liveshowsync.local';
var servidor_wivivo = 'http://192.168.10.155';
var webservice_wivivo = servidor_wivivo + '/liveshowsync/'; 
var servidor_color1 = webservice_wivivo + 'actualiza_color1.php';
var servidor_color2 = webservice_wivivo + 'actualiza_color2.php';
var servidor_intermitencia = webservice_wivivo + 'actualiza_intermitencia.php';
var servidor_activa_loto = webservice_wivivo + 'activa_loto.php';
var servidor_desact_loto = webservice_wivivo + 'desactiva_loto.php';
var servidor_activa_pedo = webservice_wivivo + 'activa_pedo.php';
var servidor_desact_pedo = webservice_wivivo + 'desactiva_pedo.php';
var servidor_activa_aplauso = webservice_wivivo + 'activa_aplauso.php';
var servidor_desact_aplauso = webservice_wivivo + 'desactiva_aplauso.php';
var servidor_sube = webservice_wivivo + 'sube.php';
var servidor_thumb = webservice_wivivo + 'creaThumbImagen.php';

var nombreFoto = null;
//var repeticion;
//var colores;
//var indice;
//var colorseleccionado;

// PhoneGap is ready
function onDeviceReady() {
    //navigator.splashscreen.hide();
    window.plugins.powerManagement.acquire();
    //PONER menubutton CUANDO SEA LA VERSION RELEASE
    document.addEventListener("menubutton", exitAppPopup, false);
    document.addEventListener("backbutton", atrasApp, false);
    leeConfiguracion();
}

function leeConfiguracion() {
    $.getJSON(servidor_lee)
    	.fail(function(jqxhr, textStatus, error){
    		navigator.notification.alert("Proba de novo, ou sae da App (pulsando o botón menú do teu móbil), conéctate á WiFi e volve a lanza-la App","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
    	});
}

function ponColor1Amarillo(){
    $.get(servidor_color1, {color:"ffcc00"})
    	.done(function(){
        	navigator.notification.alert("seleccionado AMARILLO","COLOR1","COLOR1");   
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
		});
}

function ponColor1Azul(){
    $.get(servidor_color1, {color:"00ffff"})
    	.done(function(){
    		navigator.notification.alert("seleccionado AZUL","COLOR1","COLOR1");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor1Fucsia(){
    $.get(servidor_color1, {color:"8e149a"})
    	.done(function(){
		    navigator.notification.alert("seleccionado FUCSIA","COLOR1","COLOR1");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor1Naranja(){
    $.get(servidor_color1, {color:"f77331"})
    	.done(function(){
		    navigator.notification.alert("seleccionado NARANJA","COLOR1","COLOR1");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor1Rojo(){
    $.get(servidor_color1, {color:"ff0000"})
    	.done(function(){
		    navigator.notification.alert("seleccionado ROJO","COLOR1","COLOR1");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor1Verde(){
    $.get(servidor_color1, {color:"40ff00"})
    	.done(function(){
		    navigator.notification.alert("seleccionado VERDE","COLOR1","COLOR1");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor1Blanco(){
    $.get(servidor_color1, {color:"ffffff"})
    	.done(function(){
		    navigator.notification.alert("seleccionado BLANCO","COLOR1","COLOR1");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor1Negro(){
    $.get(servidor_color1, {color:"000000"})
    	.done(function(){
		    navigator.notification.alert("seleccionado NEGRO","COLOR1","COLOR1");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor2Amarillo(){
    $.get(servidor_color2, {color:"ffcc00"})
    	.done(function(){
		    navigator.notification.alert("seleccionado AMARILLO","COLOR2","COLOR2");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor2Azul(){
    $.get(servidor_color2, {color:"00ffff"})
    	.done(function(){
		    navigator.notification.alert("seleccionado AZUL","COLOR2","COLOR2");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor2Fucsia(){
    $.get(servidor_color2, {color:"8e149a"})
    	.done(function(){
		    navigator.notification.alert("seleccionado FUCSIA","COLOR2","COLOR2");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor2Naranja(){
    $.get(servidor_color2, {color:"f77331"})
    	.done(function(){
		    navigator.notification.alert("seleccionado NARANJA","COLOR2","COLOR2");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor2Rojo(){
    $.get(servidor_color2, {color:"ff0000"})
    	.done(function(){
		    navigator.notification.alert("seleccionado ROJO","COLOR2","COLOR2");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor2Verde(){
    $.get(servidor_color2, {color:"40ff00"})
    	.done(function(){
		    navigator.notification.alert("seleccionado VERDE","COLOR2","COLOR2");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor2Blanco(){
    $.get(servidor_color2, {color:"ffffff"})
    	.done(function(){
		    navigator.notification.alert("seleccionado BLANCO","COLOR2","COLOR2");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function ponColor2Negro(){
    $.get(servidor_color2, {color:"000000"})
    	.done(function(){
		    navigator.notification.alert("seleccionado NEGRO","COLOR2","COLOR2");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function intermitenciaNula(){
    $.get(servidor_intermitencia, {intermitencia:"0"})
    	.done(function(){
		    navigator.notification.alert("seleccionado INTERMITENCIA NULA","INTERMITENCIA","INTERMITENCIA");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function intermitenciaBaja(){
    $.get(servidor_intermitencia, {intermitencia:"1"})
    	.done(function(){
		    navigator.notification.alert("seleccionado INTERMITENCIA BAJA","INTERMITENCIA","INTERMITENCIA");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function intermitenciaAlta(){
    $.get(servidor_intermitencia, {intermitencia:"2"})
    	.done(function(){
		    navigator.notification.alert("seleccionado INTERMITENCIA ALTA","INTERMITENCIA","INTERMITENCIA");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function activaLoto(){
    $.get(servidor_activa_loto)
    	.done(function(){
		    navigator.notification.alert("ACTIVADA","LOTO","LOTO");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
    //setTimeout(desactivaLoto,15000);
}

function desactivaLoto(){
    $.get(servidor_desact_loto)
    	.done(function(){
		    navigator.notification.alert("DESACTIVADA","LOTO","LOTO");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

function activaPedo(){
    $.get(servidor_activa_pedo);
    setTimeout(desactivaPedo,15000);
}
function desactivaPedo(){
    $.get(servidor_desact_pedo);
}

function activaAplauso(){
    $.get(servidor_activa_aplauso)
    	.done(function(){
		    navigator.notification.alert("ACTIVADO","APLAUSO","APLAUSO");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
    setTimeout(desactivaAplauso,60000);
}

function desactivaAplauso(){
    $.get(servidor_desact_aplauso)
    	.done(function(){
		    navigator.notification.alert("DESACTIVADO","APLAUSO","APLAUSO");
        })
    	.fail(function(){
            navigator.notification.alert("Proba de novo, non dei executado a acción","ERRO DE COMUNICACION","ERRO DE COMUNICACION");
        });
}

//Fotos con "capture"
function captureImage() {
    // Launch device camera application, 
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
}

function captureSuccess(mediaFiles) {
    var i, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
	    var smallImage = document.getElementById('smallImage');
        smallImage.style.display = 'block';
        // Show the captured photo.
        smallImage.src = mediaFiles[i].fullPath;
        var rutafoto = document.getElementById("rutafoto");
    	rutafoto.innerHTML = '<p>quédache a foto eiquí: ' + mediaFiles[i].fullPath + '</p>';
	    var rutasubida = document.getElementById("rutasubida");
		rutasubida.innerHTML = '<p>espera uns segundos a que sexa subida...</p>';
        uploadPhoto(mediaFiles[i]);
    }       
}

// Called if something bad happens.
function captureError(error) {
    navigator.notification.alert("Volve a saca-la foto", "ERRO EN CAPTURA", "ERROR EN CAPTURA");
    //navigator.notification.alert(msg, null, 'Uh oh!');
}

//SUBE FOTO
function uploadPhoto(mediaFile) {
	var options = new FileUploadOptions();
	options.fileKey = "file";        
    options.fileName = makeId() + ".jpg";
    nombreFoto = options.fileName;
    options.mimeType = "image/jpeg";
	options.chunkedMode = false;
	options.headers = {Connection: "close"};
    path = mediaFile.fullPath;
    var params = {};
    params.value1 = "Show David&Taninos";
    params.value2 = "davytan";
    options.params = params;
    var ft = new FileTransfer();
    ft.upload(path, servidor_sube, uploadSuccess, uploadError, options, true);
}

function uploadSuccess(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
    rutasubida = document.getElementById("rutasubida");
	//rutasubida.innerHTML = '<p>foto subida OK!<br/>' + r.responseCode + '<br/>' + r.response + '<br/>' + r.bytesSent + '</p>'
	rutasubida.innerHTML = '<p>FOTO SUBIDA OK!</p>';
    //comprimimos foto subida
    $.get(servidor_thumb, {imagen:nombreFoto});
}

function uploadError(error) {
    //alert("Saca outra foto. Houbo un erro: Code = " + error.code + ", source = " + error.source + ", target = " + error.target);
    navigator.notification.alert("Saca a foto de novo. Houbo un erro", "ERRO NA SUBIDA", " ERRO NA SUBIDA");
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}

//nombre de imagen aleatorio
function makeId(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function exitAppPopup() {
    navigator.notification.confirm(
        'visita www.aerowi.es se queres saber como fixemos esta app'
        , function(button) {
              if (button === 2) {
                  window.plugins.powerManagement.release();
                  navigator.app.exitApp();
              } 
          }
        , '¿Sair do Show?'
        , 'Pois non, Pois si'
    );  
    return false;
}
    
function atrasApp(){
	    location.href='index.html';
}
