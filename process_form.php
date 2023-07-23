<?php
include("./config.php");

if ($_SERVER["REQUEST_METHOD"] === "POST"  && isset($_FILES['file'])) {

  $name = $_POST['name'];
  $phone_number = $_POST["phoneNumber"];
  $email = $_POST["email"];
  $address = $_POST["address"];
  $pass_type = $_POST["pass-type"];

  $appointee = $_POST["appointee"];
  $entry_time = $_POST["entryTime"];
  $exit_time = $_POST["exitTime"];

  $file_name = $_FILES['file']['name'];
  $file_tmp = $_FILES['file']['tmp_name'];
  $destination_path = './VisitorPicture/' . $file_name;

  move_uploaded_file($file_tmp, $destination_path);

  $query = "INSERT INTO `visitor_details`(`name`,`phone_number`,`email`,`address`,
  `pass_type`,`appointee`,`entry_time`,`exit_time`) VALUES ('$name','$phone_number',
  '$email','$address','$pass_type','$appointee','  $entry_time','$exit_time')";


  if(mysqli_query($conn,$query)){
    echo "DataSaved Succesfully";
  }
  else{
    echo "Registration Failed";
  }
}

?>