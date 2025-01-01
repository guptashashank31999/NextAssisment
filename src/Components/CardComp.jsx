"use client"

import React, { useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Modal, ModalBody, ModalHeader, Row, } from 'reactstrap'
const CardComp = ({ data }) => {
  
    const [modal, setModal] = useState(false);
    const [stData, setStData] = useState(data);

    const [modalData, setModalData] = useState({})

    const toggle = () => setModal(!modal);

    console.log('modalData', modalData);


    const handleClick = (paramsData) => {
        setModalData(paramsData)
        toggle()
    }

    return (
        <Row>
            {
                stData?.map((item, index) => {
                    return (
                        <Col sm={4} key={index} onClick={()=>handleClick(item)} className='cursor-pointer'>
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                                
                            >
                                <img
                                    alt="Sample"
                                    src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {item?.directorName}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {item?.companyName}
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>

                                </CardBody>
                            </Card>
                        </Col>
                    )
                })
            }


            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{modalData.companyName}</ModalHeader>
                <ModalBody>
                   <span> <span style={{fontWeight:600}}>Address :</span> {modalData?.companyAddress}</span><br/>
                   <span> <span style={{fontWeight:600}}>Email : </span>{modalData?.companyEmail}</span><br/>
                   <span> <span style={{fontWeight:600}}>Number of Employees :</span> {modalData?.companyEmployeeCount}</span><br/>
                   <span> <span style={{fontWeight:600}}>Fax Number :</span> {modalData?.companyFaxNumber}</span><br/>
                   <span> <span style={{fontWeight:600}}>Phone :</span>{modalData?.companyPhone}</span><br/>
                </ModalBody>
              
            </Modal>
        </Row>
    )
}

export default CardComp
