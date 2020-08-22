<?php
$firstimage = "";
$secondimage = "";
$scan=0;
$servername = "localhost";
$username = "root";
$password = "";
$database="acounts";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT fluidimg, hoverimg FROM images where imageid=6";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $img=array();
    $s=0;
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $img[$s]= $row["fluidimg"];
        $s++;
        $img[$s]=$row["hoverimg"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
