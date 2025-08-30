<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Juego de Rompecabezas</title>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/estilo.css?v=3"> <!-- Versión incrementada para evitar caché -->
    </head>
    <body>
        <div class="container">
            <div>
                <h2>Rompecabezas 4x4</h2>
                <p>Haz clic en un número adyacente al espacio vacío para moverlo</p>
                <p id="time">Tiempo restante: 09:56</p>
                <div id="puzzle" class="puzzle"></div>
                <p id="mensaje"></p>
                <button onclick="reiniciar()">Reiniciar</button>
            </div>
            <div class="referencia">
                <img src="Image/KOBE.jpeg" alt="Imagen de referencia">
            </div>
        </div>
        <script src="js/script.js"></script>
    </body>
</html>