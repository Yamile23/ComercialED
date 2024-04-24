import { NextResponse } from "next/server"
import { prisma } from "@/app/libs/prisma"

export async function GET(request, {params}){
    //console.log(params.id)
    const publicacion = await prisma.publicacion.findMany({
        where: {
            titulo: params,
    }})
     //console.log(publicacion)
    return NextResponse.json(result)
}