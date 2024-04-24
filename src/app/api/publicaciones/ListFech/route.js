import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const fech= new Date();
    //console.log(new Date(fech.getTime()-(240*60000)))
    const publicacion = await prisma.publicacion.findMany({
        where: {
            finalpublic: {
              gte: new Date(fech.getTime()-(240*60000)),
            },
    }})
    
    return NextResponse.json(publicacion)
}