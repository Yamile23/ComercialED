import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const publicacion = await prisma.publicacion.findMany()
    //console.log(publicacion)
    return NextResponse.json(publicacion)
}

export async function POST(request){
    const data = await request.json()
    //console.log(data)
    const newPublic= await prisma.publicacion.create({
        data:{
            titulo:data.titulo,
            detalle:data.detalle,
            arte:String('/img/'+data.arte),
            link:data.link,
            createIn:data.createIn+"T00:00:00.000Z",
            finalpublic:data.finalpublic+"T00:00:00.000Z",
            catalogo:String('/img/'+data.catalogo),
            galeria:String('/img/'+data.galeria),
            tipo:data.tipo,
            id_category:parseInt(data.id_category),
            id_empresa:parseInt(data.id_empresa)
        },
    });
    return NextResponse.json(newPublic)
}