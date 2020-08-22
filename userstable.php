<?php
$servername = "localhost";
$username = "root";
$passwd = "";
$database="acounts";

// Create connection
$conn = new mysqli($servername, $username, $passwd,$database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE TABLE users (
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    pssword VARCHAR(50) NOT NULL
    
    )";
   if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>