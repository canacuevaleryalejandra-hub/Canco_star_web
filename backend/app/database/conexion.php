<?php

global $db;

$db = new \Leaf\Db([
    'host'=>'localhost',
    'dbname'=> 'canco',
    'username'=>'root',
    'password'=>'',
    'port'=>'3306',
    'charset'=>'utf8'
]);