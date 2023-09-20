import React from 'react'
import '../styles/global.scss';
import '../styles/default.scss';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Netflix Clone with Next.js',
    description: 'My First Clone',
}

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
        <div className='main'>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </div>    
        </body> 
    </html>
  )
}

export default layout