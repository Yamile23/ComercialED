
'use client'
 
import Link from 'next/link'
import React from 'react'


export default function Menu() {

  return (
      <div className='Menu'>

      <a href='http://localhost:3000/Admin/FormPublic'><button className="btn btn-success" >Crear Publicacion</button></a>
      <a href='http://localhost:3000/Admin/FormCategory'><button className="btn btn-success">Crear Categoria</button></a>
      <a href='http://localhost:3000/Admin/FormEmpresa'><button className="btn btn-success" >Crear Empresa</button></a>
      <a href='http://localhost:3000/Admin/FormCarrusel'> <button className="btn btn-success">Crear Carrusel</button></a>
      <a href='http://localhost:3000/Admin/ListPublic'><button className="btn btn-success">Lista Publicidad</button></a>
      </div>
  )
}
