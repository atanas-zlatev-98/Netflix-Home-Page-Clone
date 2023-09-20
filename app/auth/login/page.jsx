'use client'
import Link from 'next/link';
import React from 'react'
import { Container, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Login = () => {

    const onSubmit = () => {
        alert('Hello')
    }

    return (
        <Container className='login p-0'>
            <Container className='login-bg p-0 m-0 d-flex justify-content-center align-items-center'>

                <Container className='login-form p-5'>
                <h1 className='pb-3 pt-2 text-white'>Sign In</h1>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <FloatingLabel
                    
                                label="Email address"
                                className="mb-3" id='login-label-text'>
                                <Form.Control className={`login-label`} type="email" placeholder="name@example.com" id='login-email' value={`Netflix Clone`}/>
                               
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <FloatingLabel label="Password" id='login-label-text'>
                                <Form.Control type="password" placeholder="Password" className={`login-label`} id='login-password' value={`Netflix Clone`}/>
                                
                            </FloatingLabel>
                        </Form.Group>
                        <Link href='/' type='button' className='w-100 sign-in' id='sign-up' onClick={onSubmit}>Sign In</Link>


                        <Form.Group className="mb-3 d-flex justify-content-between pt-3 pb-3" controlId="formBasicCheckbox">
                            <Form.Check className='gray check-out' type="checkbox" label="Remember Me" />
                            <Link href='#' className='gray need-help'>Need Help?</Link>
                        </Form.Group>

                        <Form.Group>
                            <p className='gray'>New to Netflix?<Link href='/' className='sign-up-now ms-1'> Sign up now.</Link> </p>
                            <p className='gray'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<Link href='#' className='ms-2'>Learn More.</Link></p>
                        </Form.Group>
                    </Form>
                </Container>
            </Container>

        </Container>
    )
}

export default Login