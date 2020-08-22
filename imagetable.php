<?php
$servername = "localhost";
$username = "root";
$password = "";
$database="acounts";

// Create connection
$conn = new mysqli($servername, $username, $password,$database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE TABLE images (
imageid int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
fluidimg VARCHAR(30) NOT NULL,

hoverimg VARCHAR(30) NOT NULL,
    id int UNSIGNED  ,
    FOREIGN KEY (id) REFERENCES users(id)
    
    )";
   if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>