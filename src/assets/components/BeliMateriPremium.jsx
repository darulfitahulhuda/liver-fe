import { Button } from '@nextui-org/button';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const BeliMateriPremium = ({isVisible, onClose })=> {

    const navigate = useNavigate();

        if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center desktop:items-center mobile:items-end '>
        <div className='bg-white desktop:w-4/12 mobile:w-full desktop:h-2/3 mobile:h-3/4 desktop:rounded-3xl mobile:rounded-t-3xl flex justify-center items-center '>
            <div className=' flex flex-col justify-center items-center space-y-6'>

            <button className='place-self-end' onClick={() => onClose()}> 
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="20" fill='#116E63' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
            <p className='text-center text-2xl font-bold'>
                Selangkah lagi Menuju <p className='text-[#116E63]'>Kelas Premium</p>
            </p>
            
            <div className=' desktop:w-[28rem] mobile:w-[22rem] h-52 shadow-lg rounded-3xl '>
            <div className='bg-emerald-500 w-full h-2/5 rounded-t-3xl '></div>
            <div className='px-2 py-1 space-y-1 '>
            <div className='flex justify-between text-sm '>
                <p className='text-[#116E63] font-bold'>UI/UX Design</p>
                <div className='flex items-center gap-1'>
                <svg fill='#F4CE14' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <p>4.7</p>
                </div>
            </div>
            <p className='text-sm font-bold'>Belajar Web Designer dengan Figma</p>
            <p className='text-xs'>by Angela Doe</p>
            <div className='flex text-xs font-normal gap-4 '>
                <div className='flex items-center gap-1'>
                <svg fill='#45C440' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <p className='text-[#116E63] font-semibold'>Intermediate Level</p>
                </div>
                <div className='flex items-center gap-1'>
                <svg fill='#45C440' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <p>10 Modul</p>
                </div>
                <div className='flex items-center gap-1'>
                <svg fill='#45C440' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <p>120 Menit</p>
                </div>
            </div>
            <button className='flex bg-[#F2A227] text-xs px-4 py-1 rounded-full gap-8 text-white font-semibold'>
                <div className='flex items-center gap-2'>
                <svg fill='#FFFFFF' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <p>Beli</p>
                </div>
                <p>Rp 249.000</p>
            </button>
            </div>
            </div>
            <br />
            <Button className='bg-[#116E63] w-3/4 h-[2.5rem]  flex justify-center items-center rounded-3xl text-white font-semibold text-sm gap-2 ' onClick={() => {navigate("/detailKelasPembayaran");}} >
                <p>Beli Sekarang</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="16" width="16" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
            </Button>
            </div>

        </div>
    </div>
  )
}
