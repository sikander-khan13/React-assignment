import React from 'react'

function Stats() {
  return (
    <div className='bg-[#002228] p-24'>
        <div>
            <h1 className='md:text-4xl text-2xl text-white font-semibold'>Allocate effort where your reps <br /> make an inpact.</h1>
            <h2 className='md:text-4xl text-2xl text-[#0FF1F6]'>Let us handle the rest.</h2>
            <p className='text-white mt-5'>Keep your reps “in the air” -- out in the field and on the phone <br />where they can build relationships.</p>

            <div className='flex md:flex-row flex-col gap-7 mt-10'>
                <div>
                    <h3 className='text-3xl text-[#0FF1F6]'>32%</h3>
                    <p className='text-white mt-4'>Improvement in <br />Open Rates</p>
                </div>
                <div>
                    <h3 className='text-3xl text-[#0FF1F6]'>75%</h3>
                    <p className='text-white mt-4'>Improvement in <br />Ramp Time</p>
                </div>
                <div>
                    <h3 className='text-3xl text-[#0FF1F6]'>35%</h3>
                    <p className='text-white mt-4'>Improvement in <br />Meetings Booked</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats