<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $tipo_evento = $_POST['tipo_evento'];
    $fecha = $_POST['fecha'];
    $hora_inicio = $_POST['hora_inicio'];
    $hora_fin = $_POST['hora_fin'];
    $lugar = $_POST['lugar'];
    $mapa = $_POST['mapa'];
    $vestimenta = $_POST['vestimenta'];
    $ceremonia = $_POST['ceremonia'];
    $nombres_festejados = $_POST['nombres_festejados'];
    $frase = $_POST['frase'];
    $musica = $_POST['musica'];
    $itinerario = $_POST['itinerario'];
    $historia = $_POST['historia'];
    $mesa_regalos = $_POST['mesa_regalos'];
    $rsvp = $_POST['rsvp'];
    $indicaciones = $_POST['indicaciones'];
    $tematica = $_POST['tematica'];
    $colores = $_POST['colores'];
    $redes = $_POST['redes'];

    // Dirección de correo a la que se enviará el formulario
    $to = "gerardo.egb@gmail.com"; // Cambia esto por tu correo

    // Asunto del correo
    $subject = "Nuevo formulario de invitación";

    // Cuerpo del correo con los datos del formulario
    $message = "
    <h2>Datos del Cliente:</h2>
    <p><strong>Nombre:</strong> $nombre</p>
    <p><strong>Correo:</strong> $correo</p>
    <p><strong>Teléfono:</strong> $telefono</p>

    <h2>Información del Evento:</h2>
    <p><strong>Tipo de Evento:</strong> $tipo_evento</p>
    <p><strong>Fecha:</strong> $fecha</p>
    <p><strong>Hora de Inicio:</strong> $hora_inicio</p>
    <p><strong>Hora de Fin:</strong> $hora_fin</p>
    <p><strong>Lugar:</strong> $lugar</p>
    <p><strong>Link de Google Maps:</strong> $mapa</p>
    <p><strong>Código de Vestimenta:</strong> $vestimenta</p>
    <p><strong>Tipo de Ceremonia:</strong> $ceremonia</p>

    <h2>Datos de los Festejados:</h2>
    <p><strong>Nombres:</strong> $nombres_festejados</p>
    <p><strong>Frase Especial:</strong> $frase</p>
    <p><strong>Música de Fondo:</strong> $musica</p>

    <h2>Información Adicional:</h2>
    <p><strong>Itinerario:</strong> $itinerario</p>
    <p><strong>Historia:</strong> $historia</p>
    <p><strong>Mesa de Regalos:</strong> $mesa_regalos</p>
    <p><strong>RSVP:</strong> $rsvp</p>
    <p><strong>Indicaciones Especiales:</strong> $indicaciones</p>

    <h2>Estilo de la Invitación:</h2>
    <p><strong>Temática:</strong> $tematica</p>
    <p><strong>Colores:</strong> $colores</p>
    <p><strong>Redes Sociales:</strong> $redes</p>
    ";

    // Cabeceras del correo
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: gerardo.egb@gmail.com" . "\r\n"; // Cambia esto por tu dirección de correo
    
    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo "Formulario enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el formulario.";
    }
}
?>
