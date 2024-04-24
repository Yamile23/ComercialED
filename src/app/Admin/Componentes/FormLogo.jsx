'use client'
import Image from "next/image";
import { useState } from "react";

export default function FormLogo() {
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
            console.log("file uploaded")
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
  
    async function CargarDato (logo){
      //debugger
      const res= await fetch('/api/logo',{
          method:'POST',
          body:JSON.stringify({logo}),
          headers:{
              'Content-Type':'application/json'
          }
      })
      Alerta();
  }
  return (
    <div>
      <div>
      <div className="h-screen justify-center items-center">
      <h1>Cargar Logo</h1>
      <div className=" p-5">
      
      <form  onSubmit={handleSumit }>
        <div className="textPublic">
        <label>Cargar Logo: </label>
        <input className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2" type="file" onChange={(e)=>{ setFile(e.target.files[0]);}}/>
        </div>
        <button className="bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50" disabled={!file}>Cargar</button>
        </form>
      <div className="flex">
      {file &&(
        <Image src={URL.createObjectURL(file)}
        alt="upload file" className="w-64 h-64 object-cover mx-auto" width={256} height={256}/>
      )}
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}
