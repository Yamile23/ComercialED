
import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const empresas = await prisma.empresa.findMany()
    //console.log(empresas)
    return NextResponse.json(empresas)
}


export async function POST(request){
    const {nombre,link,logo,detalle} = await request.json()
    //console.log(nombre,link,logo,detalle)
    const newTask= await prisma.empresa.create({
        data:{
            nombre:nombre,
            link:link,
            logo:logo,
            detalle:detalle
        },
        
    });
    return NextResponse.json(newTask)
}