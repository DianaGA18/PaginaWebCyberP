import React from 'react'

function ProductosDest() {
  return (
    <div className='mt-2 ml-8'>
      <div className='flex justify-between items-center'>
        <p className='text-[#150096] font-bold'>Ver los productos destacados de hoy!</p>
        <div className='flex mr-8'>
          <button className='bg-slate-300 px-3 rounded-lg hover:bg-slate-200'>1</button>
          <button className='ml-5 bg-slate-300 px-3 rounded-lg hover:bg-slate-200'>2</button>
          <button className='ml-5 bg-slate-300 px-3 rounded-lg hover:bg-slate-200'>3</button>
        </div>
      </div>
    </div>
  )
}

export default ProductosDest
