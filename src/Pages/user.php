<?php
  if($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the email and password are correct
    if($email == 'user@example.com' && $password == 'password123') {
      // Redirect the user to the homepage or dashboard
      header("Location: dashboard.php");
      exit();
    } else {
      // Display an error message
      echo "Incorrect email or password.";
    }
  }
?>
