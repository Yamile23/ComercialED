import { NextResponse } from "next/server"
import { prisma } from "@/app/libs/prisma"

export async function GET(request, {params}){
    console.log(params.id)
    const carrusel = await prisma.carrusel.findUnique({
        where:{
            id:Number(params.id)
        }
    })
     console.log(carrusel)
    return NextResponse.json(carrusel)
}

export async function PUT(request, {params}){
    const data= await request.json();

    const carruselUpdate = await prisma.carrusel.update({
        where:{
            id:Number(params.id),
        },
        data:data,
    });
    return NextResponse.json(carruselUpdate);
}


export async function DELETE(request, {params}){
    try{
        const carruselRemoved = await prisma.carrusel.delete({
            where:{
                id:Number(params.id)
            }
        })
        console.log(carruselRemoved)
        return NextResponse.json("Eliminado "+ params.id);
    }catch(error){
        return NextResponse.json("no existe Id");
    }
}