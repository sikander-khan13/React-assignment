import React from 'react'

function Train() {
  return (
    <div className='bg-[#002228]'>
        <div className='items-center justify-center flex flex-col'>
            <h1 className='lg:text-4xl md:text-3xl sm:text-xl text-white font-semibold'>Train your aiDR on your...</h1>
            <h2 className='lg:text-3xl md:text-2xl text-[#0FF1F6]'>prefered email st|</h2>
            <p className='mt-5 text-xl text-[#FFFFFF] mb-7'>You’re in control. Train your aiDR on <br />elements of your Marketing strategy.</p>
            <div className='flex items-start justify-center gap-5'>
                <div className='flex gap-3'>
                    <img src="Arrow.png" alt="" />
                    <p className='text-[#14BCB2]'>Quick to ramp</p>
                </div>
                <div className='flex gap-3'>
                    <img src="Arrow.png" alt="" />
                    <p className='text-[#14BCB2]'>Easy to optimize</p>
                </div>
            </div>
            <div className='flex items-start justify-center gap-5 mt-4 mb-10'>
                <div className='flex gap-3'>
                    <img src="Arrow.png" alt="" />
                    <p className='text-[#14BCB2]'>Quick to scale up</p>
                </div>
                <div className='flex gap-3'>
                    <img src="Arrow.png" alt="" />
                    <p className='text-[#14BCB2]'>Works with all your existing tools</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Train