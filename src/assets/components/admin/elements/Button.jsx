import React from 'react'

export const Button = () => {
  return (
    <div className='flex flex-row gap-1 text-white'>
        <button className='bg-[#116E63] rounded-[10px] p-1 w-[60px]'>Ubah</button>
        <button className='bg-[#DB1B1B] rounded-[10px] p-1 w-[60px]'>Hapus</button>
    </div>
  )
}
