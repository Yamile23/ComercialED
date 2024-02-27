import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const carrusel = await prisma.carrusel.findMany()
    //console.log(carrusel)
    return NextResponse.json(carrusel)
}

export async function POST(request){
    const data = await request.json()
    //console.log(data)
    const newCarrusel= await prisma.carrusel.create({
        data:{
            titulo:data.titulo,
            detalle:data.detalle,
            arte:String('/img/'+data.arte),
            createIn:data.createIn+"T00:00:00.000Z",
            finalpublic:data.finalpublic+"T00:00:00.000Z",
            id_category:parseInt(data.id_category),
            id_empresa:parseInt(data.id_empresa)
        },
    });
    return NextResponse.json(newCarrusel)
}