import React from 'react'
import Image from 'react-bootstrap/Image'
import Background from '../assets/splash-background.png'
import GeoJobsLogo from '../assets/logos/GeoJobs.png'

const Home = () => {
  return (
    <div style={{ }}>
      <div className='bg d-flex justify-content-center' style={{ backgroundImage: `url(${Background})`, backgroundSize:'100%', backgroundPositionY:'25%' }}>
        <h1 className='py-5 text-light' style={{ fontSize:'20rem' }}>GeoJobs</h1>
      </div>
    </div>
    
  )
}

export default Home