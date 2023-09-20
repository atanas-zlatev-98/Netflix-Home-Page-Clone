'use client'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {

  const [isLogged, setisLogged] = useState(false);

  //const loggedUser = true;

  return (
<>
    {isLogged ? (
    <>
    <Container className='d-flex justfy-content-center p-0'>
        <Container className='d-flex justify-content-between align-items-center navbar-all'>
            <Image src='/assets/images/logo.svg' height={40} width={148} alt='logo' className='ms-4 logo'></Image>
            {isLogged ? (
              <Link href='/auth/login' className='sign-in me-2 d-none'></Link>
            ) : (
              <Link href='/auth/login' onClick={()=> {setisLogged((prev)=> !prev)}} className='sign-in me-2'></Link>
            )}
        </Container>
    </Container>
    </>

    ) : (<><Container className='d-flex justfy-content-center p-0'>
    <Container className='d-flex justify-content-between align-items-center navbar-all'>
        <Image src='/assets/images/logo.svg' height={40} width={148} alt='logo' className='ms-4 logo'></Image>
        {isLogged ? (
          <Link href='/auth/login' className='sign-in me-2 d-none'></Link>
        ) : (
          <Link href='/auth/login' onClick={()=> {setisLogged((prev)=> !prev)}} className='sign-in me-2'>Sign in</Link>
        )}
    </Container>
</Container>
</>)}
  

  </>
  )

}

export default NavBar