import Image from "next/image";
import styles from "./page.module.css";
import { db } from "@/db/drizzle";
import { companyData } from "@/db/schema";
import Link from "next/link";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default async function Home() {

  const company = await db.select().from(companyData);

  console.log('data', company);
  return (
    <>
     
      <div style={{display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column" , top:"50%", position:"relative", height:"100vh"}}>
        <div> <Link href="./ServerSideRendering">Server Side Rendering</Link></div>
        <div>  <Link href="./StaticSiteGeneration">Static Site Generation</Link></div>
     
    
      </div>
    </>
  );
}
