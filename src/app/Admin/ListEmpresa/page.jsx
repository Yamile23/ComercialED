'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { format } from "date-fns";
import swal from "sweetalert";
import { redirect, useRouter } from 'next/navigation';

export default function ListEmpresa() {
    const [Lista, setLista] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch('http://localhost:3000/api/empresas', { cache: 'no-store' })
            const data = await res.json()
            setLista(data)
            //debugger;
        };
        getTodos();
    }, []);
    const Alerta = () => {
        swal({
            title: "Eliminado"
        });
    }

    function Delete(idpubli) {
        //debugger
        try {
            const getList = async () => {
                const res = await fetch('/api/empresas/' + idpubli, {
                    method: 'DELETE',
                })
                const data = await res.json()
            }
            getList();
            // Alerta()
            window.location.reload();

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div class="relative overflow-x-auto">
            <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Lista de Empresas</h1>
            <br></br>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">#ID</th>
                        <th scope="col" class="px-6 py-3">Nombre</th>
                        <th scope="col" class="px-6 py-3">Link</th>
                        <th scope="col" class="px-6 py-3">Logo</th>
                        <th scope="col" class="px-6 py-3">Editar</th>
                        <th scope="col" class="px-6 py-3">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {Lista.map((tasks) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{tasks.id}</td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{tasks.nombre}</td>
                            <td id='linkExten' scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{tasks.link}</td>
                            <td class="px-6 py-4"><Image src={tasks.logo} width={130} height={130} /></td>
                            <td class="px-6 py-4"><a href={'http://localhost:3000/Admin/FormPublic/' + tasks.id}><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg></button></a></td>
                            <td class="px-6 py-4"><button onClick={() => { Delete(tasks.id) }} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}