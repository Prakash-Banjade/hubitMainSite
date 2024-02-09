import React from 'react'
import Link from 'next/link'

function TouchButton() {
  return (
    <div className='w-full px-36 mb-5 py-2 bg-main h-fit flex justify-between items-center'>
      <div className="text-xs text-white Poppins ">
        Ready to take your skills to the next level?
      </div>
      <div className="flex justify-end items-center">
        <button className='bg-[#FACC15] Poppins px-2 py-1.5 hover:scale-105 transition all duration-200 ease-in text-xs text-black font-medium rounded-full'>
          <Link href="/contact">
            Get In Touch
          </Link>
        </button>
      </div>

    </div>
  )
}

export default TouchButton;