import React from 'react'

function Anuncio() {
  return (
    <div>
        <img className='w-54' src={`${process.env.PUBLIC_URL}/static/img/image1.jpg`} alt="Cyber Porton" />
    </div>
  )
}

export default Anuncio