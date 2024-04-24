import { NextResponse } from "next/server"
import { prisma } from "@/app/libs/prisma"

export async function GET(request, {params}){
    //console.log(params.id)
    const publicacion = await prisma.publicacion.findUnique({
        where:{
            id:Number(params.id)
        }
    })
     //console.log(publicacion)
    return NextResponse.json(publicacion)
}

export async function PUT(request, {params}){
    const data= await request.json();

    const publicUpdate = await prisma.publicacion.update({
        where:{
            id:Number(params.id),
        },
        data:{
            titulo:data.titulo,
            detalle:data.detalle,
            arte:data.arte,
            link:data.link,
            createIn:data.inicio+"T23:59:59.999Z",
            finalpublic:data.fin+"T23:59:59.999Z",
            catalogo:data.catalogo,
            galeria:data.galeria,
            tipo:data.tipo,
            id_category:parseInt(data.id_category),
            id_empresa:parseInt(data.id_empresa)
        },
    });
    return NextResponse.json(publicUpdate);
}


export async function DELETE(request, {params}){
    try{
        const publicRemoved = await prisma.publicacion.delete({
            where:{
                id:Number(params.id)
            }
        })
        //console.log(publicRemoved)
        return NextResponse.json("Eliminado "+ params.id);
    }catch(error){
        return NextResponse.json("no existe Id");
    }
}