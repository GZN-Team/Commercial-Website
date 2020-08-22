<?php
$firstimage = "";
$secondimage = "";
$scan=0;
$servername = "localhost";
$username = "root";
$password = "";
$database="acounts";
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $firstimage=$_POST["firstimage"];
    $secondimage=$_POST["secondimage"];  
    $scan=$_POST["scan"];  
} 

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if($scan==1){
$sql = "INSERT INTO images (fluidimg, hoverimg)
VALUES ('$firstimage', '$secondimage')";
}
else{
$sql = "DELETE FROM images  WHERE fluidimg = '{$firstimage}'";
    
}
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
