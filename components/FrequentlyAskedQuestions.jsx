import Image from 'next/image';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';

const FrequentlyAskedQuestions = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <Container className='questions'>
        
        <h5 className='title-faq d-flex align-items-center justify-content-between ps-4' onClick={()=> {setIsOpen((prev)=> !prev)}}>{props.title}<Image src='/assets/images/close-btn.png' height={40} width={40} alt='close' className={`${isOpen ? 'close-btn-active':'close-btn'} me-3`}></Image></h5>
       
        <h5 className={`${isOpen ? 'dropdown-show mb-1' : 'dropdown-hidden'} m-0 p-0 `}>
            <p className='p-3 m-0'>{props.description}</p>
            <p className='p-3'>{props.descriptionTwo}</p>
        </h5>
    </Container>
  )
}

export default FrequentlyAskedQuestions