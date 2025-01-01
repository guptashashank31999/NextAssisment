import { NextResponse } from "next/server";

export async function GET(request) {

    

    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();


        return NextResponse.json({ msg: 'Ok', data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ msg: 'Error', data }, { status: 500 })
    }


}