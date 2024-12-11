<?php
include 'db_connect.php'; // Include database connection

$sql = "SELECT name, email, phone, address FROM users"; // Adjust the query to your table and column names
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. " - Email: " . $row["email"]. " - Phone: " . $row["phone"]. " - Address: " . $row["address"]. "<br>";
    }
} else {
    echo "No records found";
}
?>
