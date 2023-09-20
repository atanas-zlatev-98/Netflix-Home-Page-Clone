'use client'
import React from 'react'
import Link from 'next/link';
import { Container, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import {BsGlobe} from 'react-icons/bs';
const Footer = () => {
    return (
        <Container className='d-flex align-items-center footer'>

            <Container className='m-0 p-0'>
                <Container className='mb-4 ms-0 '>
                    <Link className='footer-href m-3' href='#'>Questions? Contact us.</Link>
                </Container>
                <ul>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>FAQ</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Media Center</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Ways to Watch</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Cookie Preferences</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Speed Test</Link>
                    </li>
                    <li className='footer-link pb-4'>
                        <Link className='footer-href' href='#'>Only on Netflix</Link>
                    </li>
                    <Form.Select className='w-50 select-lang' aria-label="Default select example">
                        <option value="1">English</option>
                    </Form.Select>
                    <p className='footer-href pt-4'>Netflix Bulgaria</p>
                </ul>
            </Container>
            <Container>
                <ul>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Help Center</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Investor Relations</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Terms of Use</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Corporate Information</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Legal Guarantee</Link>
                    </li>
                </ul>
            </Container>
            <Container>
                <ul>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Account</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Jobs</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Privacy</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Contact Us</Link>
                    </li>
                    <li className='footer-link'>
                        <Link className='footer-href' href='#'>Legal Notices</Link>
                    </li>
                </ul>
            </Container>
        </Container>
    )
}

export default Footer