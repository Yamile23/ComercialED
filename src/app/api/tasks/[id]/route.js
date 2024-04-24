import { NextResponse } from "next/server"
import { prisma } from "@/app/libs/prisma"

export async function GET(request, {params}){
    const task = await prisma.task.findUnique({
        where:{
            id:Number(params.id)
        }
    })
    return NextResponse.json(task)
}

export async function PUT(request, {params}){
    const data= await request.json();

    const taskUpdate = await prisma.task.update({
        where:{
            id:Number(params.id),
        },
        data:data,
    });
    return NextResponse.json(taskUpdate);
}


export async function DELETE(request, {params}){
    try{
        const taskRemoved = await prisma.task.delete({
            where:{
                id:Number(params.id)
            }
        })
        console.log(taskRemoved)
        return NextResponse.json("Eliminado "+ params.id);
    }catch(error){
        return NextResponse.json("no existe Id");
    }
}