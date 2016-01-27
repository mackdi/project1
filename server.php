<?php
$userName =  $_GET['name'];
$userPassword = $_GET['pass'];

if($userName && $userPassword != null){
echo "Hello " . $userName. "<br>" ;
echo "Your password is: " . $userPassword  ; 
}


?>