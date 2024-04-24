import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
}

export async function POST(request){
    const {nombre,detalle,arte} = await request.json()
    const newTask= await prisma.task.create({
        data:{
            nombre:nombre,
            detalle:detalle,
            arte:arte
        },
    });
    return NextResponse.json(newTask)
}

