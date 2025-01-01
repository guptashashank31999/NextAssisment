
import CardComp from '@/Components/CardComp'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { db } from '@/db/drizzle';
import { companyData } from '@/db/schema';
import React from 'react'
import { Container } from 'reactstrap';


async function getData() {
  try {
    const res = await db.select().from(companyData);
   
    return res; 
  } catch (error) {
   
    return []; 
  }
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <Header/>
      <Container>
          <CardComp data={data}/>
          </Container>
      <Footer/>


       
    </>
  )
}

export default page