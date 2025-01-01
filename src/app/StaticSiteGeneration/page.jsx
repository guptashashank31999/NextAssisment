import CardComp from '@/Components/CardComp'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { db } from '@/db/drizzle'
import { companyData } from '@/db/schema'
import React from 'react'
import { Container } from 'reactstrap'


const page = async (props) => {

console.log('props', props);


  return (
    <>
      <>
        <Header />
        <Container>
          <CardComp data={props.data || []}/>
        </Container>
        <Footer />



      </>
    </>
  )
}

export default page

export const generateStaticProps = async () => {
 
    const res = await db.select().from(companyData);
    const temp = await res

    console.log('res', res);
      return {
        props: { data: temp },
      }
 
};
