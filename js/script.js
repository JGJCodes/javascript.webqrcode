var qrcode = new QRCode(document.getElementById("codigoqr"),{
		width: 400,
		height: 400
	});

function generarQR(){
	
	var texto=document.getElementById('generadorTexto');
	
	if (!texto.value) {
		alert("Por favor ingresa un texto");
		texto.focus();
		return;
	}
	
	qrcode.makeCode(texto.value);
}



function leerQR(){
	
	var scanner = new Instascan.Scanner({ video: document.getElementById('webcam') });
      
	  Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          alert('No se han encontrado alguna camara.');
        }
      }).catch(function (e) {
          alert(e);
      });
	  
	  scanner.addListener('scan', function (content) {
        var texto=document.getElementById('lectorTexto');
		texto.innerHTML = respuesta;
      });
}

