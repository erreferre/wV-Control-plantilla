//variables Globales
//var servidor_wivivo_login = 'http://srv001.liveshowsync.local';
var servidor_wivivo_login = 'http://192.168.10.155';
var webservice_wivivo_login = servidor_wivivo_login + '/liveshowsync/'; 
var servidor_login = webservice_wivivo_login + 'login.php';

function init() {
document.addEventListener("deviceready", deviceReady, true);
delete init;
};

function checkPreAuth() {
    var form = $("#loginForm");
    if(window.localStorage["username"] !== undefined && window.localStorage["password"] !== undefined) {
        $("#username", form).val(window.localStorage["username"]);
        $("#password", form).val(window.localStorage["password"]);
        handleLogin();
    }
};

function handleLogin() {
    var form = $("#loginForm");    
    //disable the button so we can't resubmit while we wait
    $("#submitButton",form).attr("disabled","disabled");
    var u = $("#username", form).val();
    var p = $("#password", form).val();
    console.log("click");
    if(u !== '' && p!== '') {
        $.post("servidor_login", {username:u,password:p}, function(res) {
            if(res === true) {
                //store
                window.localStorage["username"] = u;
                window.localStorage["password"] = p;             
                $.mobile.changePage("control.html");
            } else {
                navigator.notification.alert("Usuario NON correcto", function() {});
            }
         $("#submitButton").removeAttr("disabled");
        },"json");
    } else {
        //Thanks Igor!
        navigator.notification.alert("Debes introducir usuario e contrasinal", function() {});
        $("#submitButton").removeAttr("disabled");
    }
    return false;
};

function deviceReady() {
	$("#loginForm").on("submit",handleLogin);
}