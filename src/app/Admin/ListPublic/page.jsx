'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";

export default function ListPublic() {
    const [Lista, setLista] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch('http://localhost:3000/api/publicaciones', { cache: 'no-store' })
            const data = await res.json() 
            setLista(data)
            debugger;
        };
        getTodos();
    }, []);
  return (
    <div>
        <h2>Lista de Publicaciones</h2>
     <table class="table">
      <thead class="table-light">   
        <tr>
          <th>#ID</th>
          <th>TItulo</th>
          <th>Detalle</th>
          <th>Enlace</th>
          <th>Arte</th>
          <th>Creacion</th>
          <th>Finalizacion</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
      {Lista.map((tasks) => (
        <tr>
          <td>{tasks.id}</td>
          <td>{tasks.titulo}</td>
          <td>{tasks.detalle}</td>
          <td>{tasks.link}</td>
          <td><Image src={tasks.arte} width={130} height={130}/></td>
          <td>{tasks.createIn}</td>
          <td>{tasks.finalpublic}</td>
          <td><a href={'http://localhost:3000/Admin/FormPublic/'+tasks.id}><button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></button></a></td>
          <td><button type="button" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button></td>
        </tr>
        ))}
      </tbody>
    </table>
      
      
    </div>
  )
}
