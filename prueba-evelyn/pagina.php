<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
<?php
include ("conexion.php");
$con = mysqli_connect($host, $user, $pw) or die ("error de conexion"); 
mysqli_select_db ($con, $db) or die ("problemas al conectar con base datos");

$result="";
   $nombre1=$_POST['Nombre'];
   $usuario1=$_POST['Usuario'];
   $contrasena1=$_POST['Contraseña'];
   $correo_e=$_POST['Correo_e'];

 $query = "SELECT NOMBRE, USUARIO, CONTRASENA, Correo_e FROM usuarios WHERE (NOMBRE='$nombre1' OR USUARIO='$usuario1' OR CONTRASENA='$contrasena1' OR Correo_e='$correo_e')";
   $result = mysqli_query($con, $query);
   $row = mysqli_fetch_row($result);
   if ($row<>0) {

   	mysqli_free_result($result);

   	if ($_POST['Nombre']==$row[0]) {
         echo "El nombre que intenta registrar ya existe.<br/>";
      }
      if ($_POST['Usuario']==$row[1]) {
         echo "El usuario que intenta registrar ya existe.<br/>";
      }
      if ($_POST['Contraseña']==$row[2]) {
         echo "Esta contraseña ya esta en uso.<br/>";
      }
      if ($_POST['Correo_e']==$row[3]) {
         echo "La cuenta de correo electr&#243nico que intenta registrar ya existe.<br/>";
      }
      echo "<a href='Formulario.html'>Pulse aqu&iacute; para reintentar su registro<br/></a>";
      mysqli_close($con);
      die ("Por favor, vuelva a intentar su registro con otros datos.");
      $Semaforo=0;	/* Esta variable ya no funciona	después de la línea anterior. */
   }
   else {
      mysqli_free_result($result);
      $Semaforo="1";
   }

mysqli_query ($con, "INSERT INTO usuarios (NOMBRE, USUARIO, CONTRASENA, Correo_e) VALUES ('$_POST[Nombre]','$_POST[Usuario]','$_POST[Contraseña]','$_POST[Correo_e]')");
echo "Datos insertados: CON EXITO <br>";
?>



</body>
</html>