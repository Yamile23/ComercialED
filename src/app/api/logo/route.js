import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const logo = await prisma.logo.findMany()
    console.log(logo)
    return NextResponse.json(logo)
}

export async function POST(request){
    const data = await request.json()
    console.log(data)
    const newLogo= await prisma.logo.create({
        data:{
            logo:String('/img/'+data.logo),
        },
    });
    return NextResponse.json(newLogo)
}