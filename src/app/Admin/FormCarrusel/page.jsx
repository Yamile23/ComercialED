'use client'

import Image from "next/image";
import { useEffect, useState } from "react"
import swal from "sweetalert";

export default function FormCarrusel() {
  const [titulo, setTitulo] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const [createIn, setInicio] = useState([]);
  const [finalpublic, setFinalizacion] = useState([]);
  const [id_category, setCateogria] = useState(0);
  const [id_empresa, setEmpresa] = useState(0);

  const [file, setFile] = useState();

  const [ListaCateogria, setListaCateogria] = useState([]);
  const [ListaEmpresa, setListaEmpresa] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      getCategoria();
      getEmpresa();
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
  const handleSumit = async (e) => {
    e.preventDefault()
    if (!file) return

    const form = new FormData()
    form.set('file', file)
    try {
      const res = await fetch('/api/upload', {
        method: "POST",
        body: form,
      });
      if (res.ok) {
        //console.log("file uploaded")
      }
      const data = await res.json()
      //console.log(data);
      //debugger
      var filet = file.name
      CargarDato(filet);
    } catch (error) {
      console.log(error);
    }
  }
  const Alerta = () => {
    swal({
      title: "Registro Exitoso"
    });
  }
  async function CargarDato(arte) {
    //debugger

    const res = await fetch('/api/carrusel', {
      method: 'POST',
      body: JSON.stringify({ titulo, detalle, createIn, finalpublic, id_category, id_empresa, arte }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    Alerta();
  }
  return (
    <div className="h-screen justify-center items-center">

      <div className=" p-5">
        <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Crear Carrusel</h1>
        <br></br>
        <form onSubmit={handleSumit}>

          <div className="mb-3">
            <input type="text" className="border border-gray-400 p-2 mb-4 w-full" value={titulo} onChange={(e) => { setTitulo(e.target.value); }} placeholder="Titulo" />
            <textarea rows="3" className="border border-gray-400 p-2 mb-4 w-full" value={detalle} onChange={(e) => { setDetalle(e.target.value); }} placeholder="Detalle"></textarea>
            <label>Fecha de inicio de Publicidad</label>
            <input type="date" className="border border-gray-400 p-2 mb-4 w-full" value={createIn} onChange={(e) => { setInicio(e.target.value); }} placeholder="Inicio" />
            <label>Fecha de finalizacion de Publicidad</label>
            <input type="date" className="border border-gray-400 p-2 mb-4 w-full" value={finalpublic} onChange={(e) => { setFinalizacion(e.target.value); }} placeholder="Finalizacion" />
          </div>

          <div className="flex">

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
            <input className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2" type="file" onChange={(e) => { setFile(e.target.files[0]); }} />
          </div>

          <button className="bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50" disabled={!file}>Cargar</button>
        </form>
        <div className="flex">
          {file && (
            <Image src={URL.createObjectURL(file)}
              alt="upload file" className="w-64 h-64 object-cover mx-auto" width={256} height={256} />
          )}
        </div>
      </div>
    </div>
  )
}
