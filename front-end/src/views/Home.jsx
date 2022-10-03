import React from 'react'
import Image from 'react-bootstrap/Image'
import Background from '../assets/placeholder/background.jpeg'

const Home = () => {
  return (
    <Image style={{height:'auto', width: '100%'}}
      src={Background}
    />
  )
}

export default Home