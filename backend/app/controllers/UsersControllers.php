<?php
namespace App\Controllers;

class UsersControllers{

    protected $db;

    // Columnas que se pueden mostrar de un usuario. La contraseña NUNCA se devuelve.
    const COLUMNAS_PUBLICAS = 'id, nombre, correo, fecha_nacimiento, id_roles';

    public function __construct(){
        global $db;
        $this->db= $db;
    }


 public function GetUsers(){

     // Solo las columnas públicas: antes se devolvía "*", incluida la contraseña
     $usuarios = $this->db->select('usuarios', self::COLUMNAS_PUBLICAS)->all();

    return response()->json([
    'success'=> true,
    'status'=>200,
    'data'=>$usuarios
]);
}


public function CreateUser() {
$request = new \Leaf\Http\Request;

$nombre = $request->get("nombre");
$correo = $request->get("correo");
$contraseña = $request->get("contraseña");
$fecha_nacimiento = $request->get("fecha_nacimiento");

// La contraseña se guarda encriptada (password_hash), nunca tal cual.
// El resultado mide 60 caracteres: la columna "contraseña" debe ser de al menos 60
// (ver database/2026-10-25-contrasena-255.sql).
$guardar = $this->db->insert('usuarios')->params([
    'nombre' => $nombre,
    'correo' =>$correo,
    'contraseña' => password_hash($contraseña, PASSWORD_DEFAULT),
    'fecha_nacimiento' =>$fecha_nacimiento,

])->execute();

if($guardar){
    return response()->json([
        "success"=> true,
        "status"=> 200,
        "message"=>"Registro Creado!",
    ]);
}


return response()->json([
        "success"=> false,
        "status"=> 500,
        "message"=>"Error :p",

    ]);

}

}
