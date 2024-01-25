import React from 'react'

import {HiLocationMarker} from "react-icons/hi"
function Vacancy() {

 const vacancyDetails=[
    {
      institute:"Hub IT Group And Solution", 
      address:"Milan Chowk, Butwal",
      vacancy:"Graphics Designer",
      deadline:"Jan 30 / 2023",
    },
    {
      institute:"Hub IT Group And Solution", 
      address:"Milan Chowk, Butwal",
      vacancy:"Graphics Designer",
      deadline:"Jan 30 / 2023",
    },
    {
      institute:"Hub IT Group And Solution", 
      address:"Milan Chowk, Butwal",
      vacancy:"Graphics Designer",
      deadline:"Jan 30 / 2023",
    },
  ]
const type=[
  {
    jobsType:"Full Time",
  },
  {
    jobsType:"Mid Level",
  },
  {
    jobsType:"Salary",
  }
]
  return (
    <div className="flex justify-between mt-10 p-20">
      <div className="w-full ">
        <div className="text-2xl font-medium Poppins">Get <span className='text-main'>Hub IT</span> Vacancy Updates</div>
        <div className="text-xs text-main Poppins mt-3">Courses<span className='text-gray-600 text-[10px]'>(Filter And Give Your Name And Address And We Will Update You About Vacancy)</span></div>
      </div>
    <div className='w-full flex flex-col gap-5 items-end'>
    <div className="text-[10px] Poppins   text-main">Available Vacancy</div>
    {
      vacancyDetails.map((val,i)=>{
        return(
          <div className='bg-white flex flex-col gap-2 px-7 py-5 rounded-xl w-fit h-fit shadow-lg shadow-gray-600 Poppins ' key={i}>
            <div className="flex flex-col">
          <p className='text-lg font-bold Poppins'>{val.institute }</p>
          <p className='flex items-center text-[10px] gap-1 text-gray-700' ><HiLocationMarker  /><span>{val.address}</span></p>
          </div>
          <div className="flex flex-col">
          <p className='text-lg font-bold text-main'>{val.vacancy}</p>
          <p className='flex text-[10px] items-center gap-1 text-gray-700'><span>Apply Before:</span><span>{val.deadline}</span></p>
          </div>
          <div className="flex w-full  items-center gap-5">
          <div className="grid grid-cols-3  w-72">
            {
                type.map((val,i)=>{
                  return(
                   
                    <div className="bg-[#FACC15] text-center w-20 gap-x-2 h-fit rounded-md py-1 text-black text-[12px] Poppins"
                     key={i}>{val.jobsType}</div>
                  
                    
                  )
                })
            }
            </div>
              <button className='bg-main px-4 py-1 rounded-full text-white'>View Details</button>
          
          </div>
          </div>
        )
      })
    }
   
    </div>
    </div>
  )
}

export default Vacancy;