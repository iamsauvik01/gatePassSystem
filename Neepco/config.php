<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "neepco";


    $conn = mysqli_connect($servername, $username, $password, $database);

    if($conn){
        // echo "Connection Succesfull";
    }
    else{
        echo "Coonection Failed. Stack:". mysqli_connect_error();
    }

?>