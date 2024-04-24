'use client'

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { format } from "date-fns";
import swal from "sweetalert";
import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function FormPublic() {

  const parmas = useParams();

  const [titulo, setTitulo] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const [link, setlink] = useState([]);
  const [createIn, setInicio] = useState(new Date());
  const [finalpublic, setFinalizacion] = useState(new Date());
  const [tipo, setTipo] = useState([]);
  const [id_category, setCateogria] = useState(0);
  const [id_empresa, setEmpresa] = useState(0);

  const [file, setFile] = useState();
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");

  const [ListaCateogria, setListaCateogria] = useState([]);
  const [ListaEmpresa, setListaEmpresa] = useState([]);


  var router = useRouter();


  useEffect(() => {
    const getTodos = async () => {
      getCategoria();
      getEmpresa();
      if (parmas.id) {
        const response = await fetch('/api/publicaciones/' + parmas.id)
        const data = await response.json()
        setTitulo(data.titulo)
        setDetalle(data.detalle)
        setlink(data.link)
        setInicio(Date.parse(data.createIn))
        setFinalizacion(Date.parse(data.finalpublic))
        setTipo(data.tipo)
        setCateogria(data.id_category)
        setEmpresa(data.id_empresa)
        setFile(data.arte)
        //setFile2(data.catalogo)
        //setFile3(data.galeria)
      }
    };
    getTodos();
  }, []);

  async function getEmpresa() {
    const res = await fetch('http://localhost:3000/api/empresas', { cache: 'no-store' })
    const data = await res.json()
    setListaEmpresa(data)
  }

  async function getCategoria() {
    const res = await fetch('http://localhost:3000/api/tasks', { cache: 'no-store' })
    const data = await res.json()
    setListaCateogria(data)
  }

  async function Upload(filet) {
    if (!filet) return
    const form = new FormData()
    form.set('file', filet)
    try {
      const res = await fetch('/api/upload', {
        method: "POST",
        body: form,
      });
      if (res.ok) {
        //console.log("file uploaded")
      }
      const data = await res.json()

    } catch (error) {
      console.log(error);
    }
  }

  const handleSumit = async (e) => {
    e.preventDefault()
    //debugger
    CargarDato(file.name, file2.name, file3.name)
   
    if (!file) return
    Upload(file)

    if (!file2) return
    Upload(file2)

    if (!file3) return
    Upload(file3)

 

  }

  const Alerta = () => {
    swal({
      title: "Registro Exitoso"
    });
  }



  async function CargarDato(arte, catalogo, galeria) {
    debugger
    var inicio=format(createIn,'yyyy-MM-dd')
    var fin=format(finalpublic,'yyyy-MM-dd')

    //debugger
    try {
      const res = await fetch('/api/publicaciones/' + parmas.id, {
        method: 'PUT',
        body: JSON.stringify({ titulo, detalle, link, inicio, fin, tipo, id_category, id_empresa, arte, catalogo, galeria }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
    }
    catch (error) {
      console.log(error);
    }
    Alerta();
    router.push('http://localhost:3000/Admin/ListPublic')
  }
  return (
    <div className="h-screen justify-center items-center">

      <div className=" p-5">
      <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Crear Publicidad</h1>
            <br></br>
        <form onSubmit={handleSumit}>

          <div className="textPublic">
            <input type="text" className="border border-gray-400 p-2 mb-4 w-full" value={titulo} onChange={(e) => { setTitulo(e.target.value); }} placeholder="Titulo" />
            <textarea rows="3" className="border border-gray-400 p-2 mb-4 w-full" value={detalle} onChange={(e) => { setDetalle(e.target.value); }} placeholder="Detalle"></textarea>
            <input type="text" className="border border-gray-400 p-2 mb-4 w-full" value={link} onChange={(e) => { setlink(e.target.value); }} placeholder="Enlace" />
            <label>Fecha de finalizacion de Publicidad : </label>
            <DatePicker  dateFormat="dd/MM/yyyy" selected={finalpublic} onChange={setFinalizacion}/>
            </div>
          <div className="flex">
            <div className="selectpromocion mr-5">
              <label>Tiene : </label>
              <select value={tipo} onChange={(e) => { setTipo(e.currentTarget.value); }}>
                <option selected value='' disabled>¿Promocion?</option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>

            <div className="selectCategoria mr-10">
              <label>Categoria : </label>

              <select value={id_category} onChange={(e) => { setCateogria(e.currentTarget.value); }}>
                <option selected value="0">Categoria</option>
                {ListaCateogria.map(item =>
                  <option key={item.id} value={item.id}>
                    {item.nombre}
                  </option>
                )}
              </select>
            </div>

            <div className="selectEmpresa mr-10">
              <label>Empresa : </label>
              <select value={id_empresa} onChange={(e) => { setEmpresa(e.currentTarget.value); }}>
                <option value="0" selected>Empresa</option>
                {ListaEmpresa.map(item =>

                  <option key={item.id} value={item.id}>
                    {item.nombre}
                  </option>
                )}
              </select>
            </div>
          </div>

          <div className="loadFile">
            <label>Cargar Arte: </label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" onChange={(e) => { setFile(e.target.files[0]); }} />
            <label>Cargar Catalogo: </label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" onChange={(e) => { setFile2(e.target.files[0]); }} />
            <label>Cargar Galeria: </label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" onChange={(e) => { setFile3(e.target.files[0]); }} />
          </div>

          <button className="bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50" disabled={!file}>Cargar</button>
        </form>

        <div className="flex">
          {file && (
            <Image src={("/img/" + file)}
              alt="Actual" className="w-64 h-64 object-cover mx-auto" width={256} height={256} />
              
          )}
          {file && (
            <Image src={(file.path)}
              alt="Nueva" className="w-64 h-64 object-cover mx-auto" width={256} height={256} />
              
          )}
        </div>
      </div>
    </div>
  )
}

