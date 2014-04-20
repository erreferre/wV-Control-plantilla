// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

//variables Globales
var servidor_wivivo = 'http://srv001.liveshowsync.local';
//var servidor_wivivo = 'http://192.168.10.155';
var webservice_wivivo = servidor_wivivo + '/liveshowsync/';

var servidor_comandos = webservice_wivivo + 'comandos.php'; 
var servidor_color1 = webservice_wivivo + 'actualiza_color1.php';
var servidor_color2 = webservice_wivivo + 'actualiza_color2.php';
var servidor_intermitencia = webservice_wivivo + 'actualiza_intermitencia.php';
var servidor_activa_loto = webservice_wivivo + 'activa_loto.php';
var servidor_desactiva_loto = webservice_wivivo + 'desactiva_loto.php';
var servidor_activa_guapo = webservice_wivivo + 'activa_guapo.php';
var servidor_desactiva_guapo = webservice_wivivo + 'desactiva_guapo.php';
var servidor_activa_pedo = webservice_wivivo + 'activa_pedo.php';
var servidor_desactiva_pedo = webservice_wivivo + 'desactiva_pedo.php';
var servidor_activa_aplauso = webservice_wivivo + 'activa_aplauso.php';
var servidor_desactiva_aplauso = webservice_wivivo + 'desactiva_aplauso.php';
var servidor_activa_selfie1 = webservice_wivivo + 'activa_selfie1.php';
var servidor_desactiva_selfie1 = webservice_wivivo + 'desactiva_selfie.php';
var servidor_activa_selfie2 = webservice_wivivo + 'activa_selfie2.php';
var servidor_desactiva_selfie2 = webservice_wivivo + 'desactiva_selfie.php';

var servidor_lee = webservice_wivivo + 'lee.php';
var servidor_sube = webservice_wivivo + 'sube.php';
var servidor_thumb = webservice_wivivo + 'creaThumbImagen.php';

var servidor_activa_show = webservice_wivivo + 'activa_show.php';
var servidor_activa_showempezado = webservice_wivivo + 'activa_showempezado.php';
var servidor_desactiva_show = webservice_wivivo + 'desactiva_show.php';
var servidor_desactiva_showempezado = webservice_wivivo + 'desactiva_showempezado.php';
var servidor_actualiza_tiempo = webservice_wivivo + 'actualiza_tiempo.php';
var servidor_activa_alertas = webservice_wivivo + 'activa_alertas.php';
var servidor_desactiva_alertas = webservice_wivivo + 'desactiva_alertas.php';

var nombreFoto = null;

//temporizadores
var activaShowEmpezadosetTimeout = null;
var desactivaLotosetTimeout = null;
var desactivaGuaposetTimeout = null;
var desactivaAplausosetTimeout = null;
var desactivaPedosetTimeout = null;

// PhoneGap is ready
function onDeviceReady() {
    //navigator.splashscreen.hide();
    window.plugins.powerManagement.acquire();
    //PONER menubutton CUANDO SEA LA VERSION RELEASE
    document.addEventListener("menubutton", exitAppPopup, false);
    document.addEventListener("backbutton", atrasApp, false);
    //document.addEventListener("backbutton", exitAppPopup, false);
    leeConfiguracion();
}

function leeConfiguracion() {
    $.getJSON(servidor_lee)
    	.fail(function(jqxhr, textStatus, error){
    		navigator.notification.alert("Proba de novo, ou sae da App (pulsando o botón menú do teu móbil), conéctate á WiFi e volve a lanza-la App",function(){},"ERRO DE COMUNICACION","OK");
    	});
}

//ALERTAS
function alertaColor(color,i){
    navigator.notification.alert(color,function(){},"COLOR"+i,"OK");
}
function alertaComando(mensaje,titulo){
    navigator.notification.alert(mensaje,function(){},titulo,"OK");
}
function falloConexion(){
	navigator.notification.alert("Proba de novo, non dei executado a acción",function(){},"ERRO DE COMUNICACION","OK");    
}

//COLORES
//function ponColor(color,i){
//    var tmp1="000000";
//    var tmp2 = i;
//    alert(color);
//    switch (color){
//        case amarillo: tmp1="ffcc00";break;
//        case azul: tmp1="00ffff";break;
//        case fucsia: tmp1="8e149a";break;
//        case naranja: tmp1="f77331";break;
//        case rojo: tmp1="ff0000";break;
//        case verde: tmp1="40ff00";break;
//        case blanco: tmp1="ffffff";break;
//        case negro: tmp1="000000";
//    }
//    $.get(servidor_comandos, {columna:tmp2,valor:tmp1})
//    	.done(function(){alertaColor(color,i);})
//    	.fail(function(){falloConexion();});
//}
function ponColor1Rojo(){
    $.get(servidor_color1, {color:"ff0000"})
    	.done(function(){alertaColor('ROJO',1);})
    	.fail(function(){falloConexion();});
}
function ponColor1Blanco(){
    $.get(servidor_color1, {color:"ffffff"})
    	.done(function(){alertaColor('BLANCO',1);})
    	.fail(function(){falloConexion();});
}
function ponColor1Negro(){
    $.get(servidor_color1, {color:"000000"})
    	.done(function(){alertaColor('NEGRO',1);})
    	.fail(function(){falloConexion();});
}
function ponColor2Rojo(){
    $.get(servidor_color2, {color:"ff0000"})
    	.done(function(){alertaColor('ROJO',2);})
    	.fail(function(){falloConexion();});
}
function ponColor2Blanco(){
    $.get(servidor_color2, {color:"ffffff"})
    	.done(function(){alertaColor('BLANCO',2);})
    	.fail(function(){falloConexion();});
}
function ponColor2Negro(){
    $.get(servidor_color2, {color:"000000"})
    	.done(function(){alertaColor('NEGRO',2);})
    	.fail(function(){falloConexion();});
}

//INTERMITENCIA
function intermitenciaNula(){
    $.get(servidor_intermitencia, {intermitencia:"0"})
    	.done(function(){alertaComando("NULA","INTERMITENCIA");})
    	.fail(function(){falloConexion();});
}

//function intermitenciaBaja(){
//    $.get(servidor_intermitencia, {intermitencia:"1"})
//    	.done(function(){alertaComando("BAJA","INTERMITENCIA");})
//    	.fail(function(){falloConexion();});
//}

function intermitenciaAlta(){
    $.get(servidor_intermitencia, {intermitencia:"2"})
    	.done(function(){alertaComando("ALTA","INTERMITENCIA");})
    	.fail(function(){falloConexion();});
}

//COMANDOS
function activaShow(){
    navigator.notification.confirm(
        'se premes SI, comeza todo!'
        , function(data) {
            if (data === 2) {
                $.get(servidor_activa_show)
    			.done(function(){
		    		alertaComando("ESPECTÁCULO ARRINCADO!!","SHOW");
					activaShowEmpezadosetTimeout = setTimeout(activaShowEmpezado,300000);
        		})
    			.fail(function(){
            		falloConexion();
		        });
              }
          }
        , '¿COMEZA-LO SHOW?'
        , 'non, SI'
    );  
    return false;
}
function activaShowEmpezado(){
    $.get(servidor_activa_showempezado)
    	.done(function(){})
    	.fail(function(){falloConexion();});
}
function desactivaShowEmpezado(){
    $.get(servidor_desactiva_showempezado)
    	.done(function(){})
    	.fail(function(){falloConexion();});
    if (activaShowEmpezadosetTimeout !== null) {
        clearTimeout(activaShowEmpezadosetTimeout);
        activaShowEmpezadosetTimeout = null;
    }
}
function desactivaShow(){
    navigator.notification.confirm(
        'se premes SI, PARARÁS TODO!'
        , function(data) {
            if (data === 2) {
                $.get(servidor_desactiva_show)
    			.done(function(){
		    		alertaComando("ESPECTÁCULO PARADO!!","SHOW");
					desactivaShowEmpezado();
        		})
    			.fail(function(){
            		falloConexion();
		        });
              }
          }
        , '¿PARA-LO SHOW?'
        , 'non, SI'
    );  
    return false;
}

//LOTO
//function activaLoto(){
//    $.get(servidor_activa_loto)
//    	.done(function(){alertaComando("ACTIVADA","LOTO");})
//    	.fail(function(){falloConexion();});
//    desactivaLotosetTimeout = setTimeout(desactivaLoto,300000);
//}
//function desactivaLoto(){
//    $.get(servidor_desact_loto)
//    	.done(function(){alertaComando("DESACTIVADA","LOTO");})
//    	.fail(function(){falloConexion();});
//	if (desactivaLotosetTimeout !== null) {
//        clearTimeout(desactivaLotosetTimeout);
//        desactivaLotosetTimeout = null;
//    }
//}

function activaGuapo(){
    $.get(servidor_activa_guapo)
    .done(function(){
        alertaComando("ACTIVADO","GUAPO");
        desactivaGuaposetTimeout = setTimeout(desactivaGuapo,120000);
	})
    .fail(function(){falloConexion();});
}
function desactivaGuapo(){
    $.get(servidor_desactiva_guapo)
    .done(function(){
        if (desactivaGuaposetTimeout !== null) {
        	clearTimeout(desactivaGuaposetTimeout);
        	desactivaGuaposetTimeout = null;
    	}
        alertaComando("DESACTIVADO","GUAPO");
    })
    .fail(function(){falloConexion();});
}

function activaAplauso(){
    $.get(servidor_activa_aplauso)
    .done(function(){
        alertaComando("ACTIVADO","APLAUSO");
        desactivaAplausosetTimeout = setTimeout(desactivaAplauso,120000);
	})
    .fail(function(){falloConexion();});
}
function desactivaAplauso(){
    $.get(servidor_desactiva_aplauso)
    .done(function(){
        if (desactivaAplausosetTimeout !== null) {
        	clearTimeout(desactivaAplausosetTimeout);
        	desactivaAplausosetTimeout = null;
    	}
        alertaComando("DESACTIVADO","APLAUSO");
    })
    .fail(function(){falloConexion();});
}

function activaPedo(){
    $.get(servidor_activa_pedo)
    .done(function(){
        alertaComando("ACTIVADO","PEDO");
        desactivaPedosetTimeout = setTimeout(desactivaPedo,120000);
	})
    .fail(function(){falloConexion();});
}
function desactivaPedo(){
    $.get(servidor_desactiva_pedo)
    .done(function(){
        if (desactivaPedosetTimeout !== null) {
        	clearTimeout(desactivaPedosetTimeout);
        	desactivaPedosetTimeout = null;
    	}
        alertaComando("DESACTIVADO","PEDO");
    })
    .fail(function(){falloConexion();});
}

function activaSelfie1(){
    $.get(servidor_activa_selfie1)
    .done(function(){alertaComando("ACTIVADO","SELFIE1");})
    .fail(function(){falloConexion();});
}
function desactivaSelfie1(){
    $.get(servidor_desactiva_selfie1)
    .done(function(){alertaComando("DESACTIVADO","SELFIE1");})
    .fail(function(){falloConexion();});
}

function activaSelfie2(){
    $.get(servidor_activa_selfie2)
    .done(function(){alertaComando("ACTIVADO","SELFIE2");})
    .fail(function(){falloConexion();});
}
function desactivaSelfie2(){
    $.get(servidor_desactiva_selfie2)
    .done(function(){alertaComando("DESACTIVADO","SELFIE2");})
    .fail(function(){falloConexion();});
}


//ADMIN
//function actualizaTGlobal(){
//	var form = $("#ft_global");   
//    var tiempo = $("#t_global", form).val();
//    tiempo = tiempo + '000';
//    var col = 'startConsultaServidorsetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Global: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
//function defectoTGlobal(){
//    var tiempo = 10000;
//    var col = 'startConsultaServidorsetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Global: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
//function actualizaTSelfie(){
//    var form = $("#ft_global");   
//    var tiempo = $("#t_global", form).val();
//    tiempo = tiempo + '000';    
//    var col = 'startSelfiesetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Selfie: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
//function defectoTSelfie(){
//    var tiempo = 20000;
//    var col = 'startSelfiesetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Selfie: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
//function actualizaTLoto(){
//    var form = $("#ft_global");   
//    var tiempo = $("#t_global", form).val();
//    tiempo = tiempo + '000';
//    var col = 'startLotosetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Loto: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
//function defectoTLoto(){
//    var tiempo = 20000;
//    var col = 'startLotosetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Loto: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
//function actualizaTColorines(){
//    var form = $("#ft_global");   
//    var tiempo = $("#t_global", form).val();
//    tiempo = tiempo + '000';
//    var col = 'startColorinessetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Colorines: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
//function defectoTColorines(){
//    var tiempo = 20000;
//    var col = 'startColorinessetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Colorines: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
//function actualizaTIntermitencia(){
//    var form = $("#ft_global");   
//    var tiempo = $("#t_global", form).val();
//    var col = 'startIntermitenciasetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Intermitencia: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
//function defectoTIntermitencia(){
//    var tiempo = 200;
//    var col = 'startIntermitenciasetTimeout';
//    $.get(servidor_actualiza_tiempo, {columna:col,valor:tiempo})
//    	.done(function(){
//            alertaComando("T. Loto: "+tiempo,"TEMPORIZADOR");
//        })
//    	.fail(function(){
//            falloConexion();
//        });
//}
function activaAlertas(){
    $.get(servidor_activa_alertas)
    	.done(function(){alertaComando("ACTIVADAS","ALERTAS");})
    	.fail(function(){falloConexion();});
}
function desactivaAlertas(){
    $.get(servidor_desactiva_alertas)
    	.done(function(){alertaComando("DESACTIVADAS","ALERTAS");  })
    	.fail(function(){falloConexion();});    
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
    navigator.notification.alert("Volve a saca-la foto", function(){},"ERRO EN CAPTURA", "OK");
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
    //console.log("Code = " + r.responseCode);
    //console.log("Response = " + r.response);
    //console.log("Sent = " + r.bytesSent);
    rutasubida = document.getElementById("rutasubida");
	//rutasubida.innerHTML = '<p>foto subida OK!<br/>' + r.responseCode + '<br/>' + r.response + '<br/>' + r.bytesSent + '</p>'
    //comprimimos foto subida
    $.get(servidor_thumb, {imagen:nombreFoto});
    //acabamos
	rutasubida.innerHTML = '<p>FOTO SUBIDA OK!</p>';
}

function uploadError(error) {
    //alert("Saca outra foto. Houbo un erro: Code = " + error.code + ", source = " + error.source + ", target = " + error.target);
    navigator.notification.alert("Saca a foto de novo. Houbo un erro",function(){}, "ERRO NA SUBIDA", "OK");
    //console.log("upload error source " + error.source);
    //console.log("upload error target " + error.target);
}

//nombre de imagen aleatorio
function makeId(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 3; i++ )
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

function irSelfie(){
    location.href='control.html#tabstrip-selfie';
}    
function atrasApp(){
	location.href='control.html#tabstrip-fogar';
}
