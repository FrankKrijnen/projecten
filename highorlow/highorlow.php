<?php
require'connect.php';

error_reporting(E_ALL);
ini_set('display_error', 1);


// $message = "wrong answer";
// echo "<script type='text/javascript'>alert('$message');</script>";

$naam = $_POST['naam'];
$score = $_POST['score'];

$sql = "INSERT INTO score (speler, punten) VALUES ('$naam', $score)";
    $conn->exec($sql);

$sql_2 = "SELECT * FROM score ORDER BY score.punten DESC";
    $result = $conn->query($sql_2);
echo $result;


?>