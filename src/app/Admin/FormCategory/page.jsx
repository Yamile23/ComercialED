'use client'
import Image from "next/image";
import { useState } from "react";
import swal from "sweetalert";

export default function FormCategory() {
    const [nombre, setNombre] = useState([]);
    const [detalle, setDetalle] = useState([]);
    const [file, setFile]= useState();


    const handleSumit=async(e)=>{e.preventDefault()
      if(!file)return
      
      const form = new FormData()
      form.set('file',file)
     try{
      const res= await fetch('/api/upload',{
          method:"POST",
          body:form,
      });
      if(res.ok){
          //console.log("file uploaded")
      }
      const data = await res.json()
      //console.log(data);
      //debugger
      var filet=file.name
      CargarDato(filet);
      }catch(error){
          console.log(error);
      }
  }
    
  const Alerta=()=>{
    swal({
      title:"Registro Exitoso"
    });
  }
  async function CargarDato (arte){
  
    arte='/img/'+arte
    //debugger
    const res= await fetch('/api/tasks',{
        method:'POST',
        body:JSON.stringify({nombre,detalle,arte}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    Alerta();
}
  return (
    <div>
      <div className="h-screen justify-center items-center">
      <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Crear Categoria</h1>
            <br></br>
      <form  onSubmit={handleSumit }>
      <div className=" p-5">
        <div className="textPublic">
        <input type="text" className="border border-gray-400 p-2 mb-4 w-full" value={nombre} onChange={(e) => {setNombre(e.target.value); }} placeholder="Nombre"/>
        <textarea rows="3" className="border border-gray-400 p-2 mb-4 w-full"value={detalle} onChange={(e) => {setDetalle(e.target.value);}} placeholder="Detalle"></textarea>
        <div className="loadlogo">
        <label>Cargar Logo: </label>
        <input className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2" type="file" onChange={(e)=>{ setFile(e.target.files[0]);}}/>
        </div>
        </div>
        <button className="bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50" disabled={!file}>Cargar</button>
      </div>
      </form>
      <div className="flex">
      {file &&(
        <Image src={URL.createObjectURL(file)}
        alt="upload file" className="w-64 h-64 object-cover mx-auto" width={256} height={256}/>
      )}
      </div>
    </div>
    
    </div>
  )
}
