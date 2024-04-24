import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const fech= new Date();
    //console.log(new Date(fech.getTime()-(240*60000)))
    const publicacion = await prisma.publicacion.findMany()
    
    return NextResponse.json(publicacion)
}

export async function POST(request){
    const data = await request.json()
    const fech= new Date();
    //console.log(data)
    const newPublic= await prisma.publicacion.create({
        data:{
            titulo:data.titulo,
            detalle:data.detalle,
            arte:data.arte,
            link:data.link,
            createIn:new Date(fech.getTime()-(240*60000)),
            finalpublic:data.finalpublic+"T23:59:59.999Z",
            catalogo:data.catalogo,
            galeria:data.galeria,
            tipo:data.tipo,
            id_category:parseInt(data.id_category),
            id_empresa:parseInt(data.id_empresa)
        },
    });
    return NextResponse.json(newPublic)
}