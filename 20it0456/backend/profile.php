<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include('conn.php');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$role = $data['role'];
$nic = $data['nic'];

if ($role == 'student') {
$sql = "SELECT * FROM student WHERE role ='$role' AND nic='$nic'";
$result = $mysqli->query($sql);
} 
else {$sql = "SELECT * FROM teacher WHERE role ='$role' AND nic='$nic'";
    $result = $mysqli->query($sql);
    } 

if(mysqli_num_rows($result)){
    $x = $result->fetch_assoc();
    echo json_encode($x);
}else{
    echo "Invalid username password";
}

$mysqli -> close();
?>


