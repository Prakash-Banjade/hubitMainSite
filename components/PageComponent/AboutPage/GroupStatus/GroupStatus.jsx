import React from 'react'

function GroupStatus() {

  const status=[
    {
      counting:"2017",
      description:"Year We Were Founded"
    },
    {
      counting:"100 +",
      description:"our Employee"
    },
    {
      counting:"720 +",
      description:"our Students"
    },
    {
      counting:"543",
      description:"Placement"
    },
    {
      counting:"1042",
      description:"Project Finished"
    }
  
  ]

  return (
    <div className='grid grid-cols-5 place-content-center place-items-center px-40 py-5  '>
      {
        status.map((val,i)=>{
          return(
            <div key={i} className=" w-fit h-fit grid flex-col justify-center items-center  text-[#515151] p-2 rounded-md ">
              <div className="Poppins h-fit">
                <p className='text-4xl font-semibold'>{val.counting}</p>
              </div>
              <div className="h-fit">
                <p className=' Poppins text-xs '>{val.description}</p>
              </div>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default GroupStatus
