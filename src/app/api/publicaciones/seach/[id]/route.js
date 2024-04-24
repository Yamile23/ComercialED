import { NextResponse } from "next/server"
import { prisma } from "@/app/libs/prisma"

export async function GET(request, {params}){
    const fech= new Date();
    //console.log(params.id)
    const publicacion = await prisma.publicacion.findMany({
        where: {
          titulo: {
            contains: params.id,
          },
          finalpublic: {
            gte: new Date(fech.getTime()-(240*60000)),
          },
        },
      })
     //console.log(publicacion)
    return NextResponse.json(publicacion)
}