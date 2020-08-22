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
<div class="product_image"><div class="img-product"><img class="img-fluid" src="img/png/3.png" alt="Colorlib Template"><i class=" ti-trash icon-remove-cheese"></i></div><div class="text_image"><h3><a href="#">Mens Essential Tee</a><a class="fa-icon fa fa-heart active " href="#"></a><div class="clearflex"></div></h3><div class="pricing"><span class="price-dc">$120.00</span><span class="price-sale">$80.00</span></div></div></div>