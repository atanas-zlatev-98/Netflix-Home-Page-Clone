'use client'

import React from 'react'
import {Container, Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image';
import FAQList from '@/components/FAQ/FAQList';

const HomePage = () => {

  return (
    <Container className='homepage p-0'>
      <Container className='top p-0'>
        <Container className='d-flex flex-column align-items-center justify-content-center top-overlay p-5'>
          <section className='start-now d-flex flex-column align-items-center'>

            <h1 className='top-title text-center'>Unlimited movies, TV shows, and more</h1>
            <p className='top-title-middle text-center'>Plans now start at EUR4.99/month.</p>
            <p className='top-title-bottom text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
            <Container className='d-flex justify-content-center flex-wrap'>
              <Form className='d-flex flex-wrap justify-content-center'>
                <FloatingLabel controlId="floatingInput" label="Email address" className="get-started-label mb-3" id='email-label'>
                  <Form.Control type="email" className='get-started-control' placeholder="name@example.com" />
                </FloatingLabel>
                <button type='submit' className='get-started d-flex ms-1 align-items-center'>Get Started <IoIosArrowForward /></button>
              </Form>

            </Container>

          </section>
        </Container>
      </Container>

      <Container className='panel d-flex'>

        <Container className='d-flex'>

          <Container className='d-flex align-items-center justify-content-between content-container mt-5 p-0 m-0'>

            <Container className='d-flex justify-content-center'>
              <div className='d-flex flex-column m-0'>
                <h1 className='top-title text-white'>Enjoy on your TV</h1>
                <p className='top-title-middle text-white'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
              </div>
            </Container>

            <Container className='d-flex justify-content-center'>

              <div className='tv-container d-flex justify-content-center'>

                <div className='tv'>

                  <div className='tv-content'>
                    <video className='video' autoPlay muted loop>
                      <source src="/assets/videos/glitch.mp4" type="video/mp4" />
                    </video>
                  </div>

                </div>

              </div>

            </Container>

          </Container>

        </Container>
      </Container>

      <Container className='panel d-flex'>
        <Container className='d-flex'>
          <Container className='d-flex align-items-center justify-content-between download-content mt-5 p-0 m-0'>

            <Container className='d-flex justify-content-center'>
              <div className='phone d-flex align-items-end'>
                <div className='downloading mb-4 d-flex flex-row align-items-center'>
                  <div className='dw-poster p-2'>
                    <Image src='/assets/images/dw-poster.jpg' height={80} width={50} alt='dw-poster'></Image>
                  </div>
                  <div className='dw-text d-flex flex-column justify-content-center ps-3'>
                    <p className='m-0 text-white'>The Hobbit Battle..</p>
                    <p className='m-0 dw'>Downloading...</p>
                  </div>
                  <div className='dw-loader d-flex align-items-center justify-content-center ps-3'>
                    <div className="loader"></div>
                  </div>
                </div>
              </div>

            </Container>

            <Container className='d-flex justify-content-center'>
              <div className='d-flex flex-column m-0'>
                <h1 className='top-title text-white'>Download your shows to watch offline</h1>
                <p className='top-title-middle text-white'>Save your favorites easily and always have something to watch.</p>
              </div>
            </Container>
          </Container>
        </Container>

      </Container>

      <Container className='panel d-flex'>
        <Container className='d-flex'>
          <Container className='d-flex align-items-center justify-content-between devices-watch-content mt-5 p-0 m-0'>

            <Container className='d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column m-0'>
                <h1 className='top-title text-white'>Watch everywhere</h1>
                <p className='top-title-middle text-white'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
              </div>
            </Container>

            <Container className='d-flex justify-content-center'>

              <div className='devices-container d-flex justify-content-center align-items-center'>
                <div className='devices-content'>
                  <video className='video-devices' autoPlay muted loop>
                    <source src="/assets/videos/glitch.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className='devices'>

                </div>

              </div>

            </Container>
          </Container>

        </Container>

      </Container>

      <Container className='panel d-flex'>
        <Container className='d-flex'>

          <Container className='d-flex align-items-center justify-content-between devices-watch-content mt-5 p-0 m-0'>

            <Container className='d-flex justify-content-center'>
              <Image src='/assets/images/kids.png' height={400} width={500} alt='kids' className='kids-tv'></Image>
            </Container>

            <Container className='d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column m-0'>
                <h1 className='top-title text-white'>Create profiles for kids</h1>
                <p className='top-title-middle text-white'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
              </div>
            </Container>
          </Container>

        </Container>

      </Container>

      <Container className='FAQ d-flex'>
        <Container className='d-flex'>
          <Container className='Questions'>
            <h1 className='faq-text p-5'>
              Frequently Asked Questions
            </h1>

            <FAQList></FAQList>
            
            <Container className='d-flex justify-content-center flex-wrap flex-column mt-5 mb-5'>
              <h5 className='text-center text-white pb-3'>Ready to watch? Enter your email to create or restart your membership.</h5>
              <Form className='d-flex flex-wrap justify-content-center'>
                <FloatingLabel controlId="floatingInput" label="Email address" className="get-started-label mb-3" id='email-label'>
                  <Form.Control type="email" className='get-started-control' placeholder="name@example.com" />
                </FloatingLabel>
                <button type='submit' className='get-started d-flex ms-1 align-items-center'>Get Started <IoIosArrowForward /></button>
              </Form>

            </Container>

          </Container>
        </Container>

      </Container>

    </Container>
  )
}

export default HomePage