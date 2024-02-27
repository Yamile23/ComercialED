import { NextResponse } from "next/server"
import { prisma } from "@/app/libs/prisma"

export async function GET(request, {params}){
    //console.log(params.id)
    const empresa = await prisma.empresa.findUnique({
        where:{
            id:Number(params.id)
        }
    })
     //console.log(empresa)
    return NextResponse.json(empresa)
}

export async function PUT(request, {params}){
    const data= await request.json();

    const empresaUpdate = await prisma.empresa.update({
        where:{
            id:Number(params.id),
        },
        data:data,
    });
    return NextResponse.json(empresaUpdate);
}


export async function DELETE(request, {params}){
    try{
        const empresaRemoved = await prisma.empresa.delete({
            where:{
                id:Number(params.id)
            }
        })
        //console.log(empresaRemoved)
        return NextResponse.json("Eliminado "+ params.id);
    }catch(error){
        return NextResponse.json("no existe Id");
    }
}