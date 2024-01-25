import React from 'react'
import Image from 'next/image'
import image_1 from "../../../Resources/careerpic.jpg"
import {BsShieldFillCheck} from "react-icons/bs"
function InfoSection() {

  const CareerBox = [
    {
      bottom:"45px",
      width:"400px",
      height:"300px",
      event:'150 Roles / 75 Location',
      tittle:"What Is Your            Destination ?",
      button:"Explore More"
    },
    
    {
      bottom:"15px",
      width:"400px",
      height:"240px",
      image : image_1,
    },
   
    {
      top:"30px",
      width:"400px",
      height:"240px",
      image : image_1,
    },
    {
      width:"400px",
      height:"300px",
      event:'150 Roles / 75 Location',
      tittle:"Deploy Your Career",
      button:"Explore More"
    },

  ]

  const InfoStatus = [
    {
      counting:"124+",
      tittle:"Post"
    },
    {
      counting:"80+",
      tittle:"Recruited"
    },
    {
      counting:"132+",
      tittle:"Company"
    },
    {
      counting:"586+",
      tittle:"Member"
    },
  ]
  const mission =[
    {
      top_1:'25px',
      top:"0px",
      tittle:"Our Mission",
      mission:"Create a world where anyone can belong anywhere",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio praesentium impedit, neque consequatur aliquam veniam nemo non architecto. Voluptatibus deleniti vel laudantium pariatur delectus, rerum molestias maiores placeat veritatis, obcaecati quibusdam architecto assumenda vero eveniet, amet sint voluptas incidunt esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae, earum adipisci dolore iste et ab ut voluptas magni culpa eaque soluta corrupti in quam fuga odio, aliquam, rerum eveniet."
    },
    {
      top:"35px",
      tittle:"we will guide you",
      top_1:"0px",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio praesentium impedit, neque consequatur aliquam veniam nemo non architecto. Voluptatibus deleniti vel laudantium pariatur delectus, rerum molestias maiores placeat veritatis, obcaecati quibusdam architecto ",
    }
    
  ]
  const guidance=[
    {
      icon:<BsShieldFillCheck/>,
      tittle:"Lorem ipsum dolor sit amet",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio praesentium impedit, neque consequatur "
    },
    {
      icon:<BsShieldFillCheck/>,
      tittle:"Lorem ipsum dolor sit amet",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio praesentium impedit, neque consequatur "
    },
    {
      icon:<BsShieldFillCheck/>,
      tittle:"Lorem ipsum dolor sit amet",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio praesentium impedit, neque consequatur "
    },
    {
      icon:<BsShieldFillCheck/>,
      tittle:"Lorem ipsum dolor sit amet",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio praesentium impedit, neque consequatur "
    },
    {
      left:"500px",
      icon:<BsShieldFillCheck/>,
      tittle:"Lorem ipsum dolor sit amet",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio praesentium impedit, neque consequatur "
    },

    
  ]

 

  return (
    <>
    <div className="grid h-full    mx-auto grid-cols-2 gap-y-40 place-items-center place-content-center">
    {
      CareerBox.map((val,i)=>{
        console.log(val)
        return(
          <div className=" p-10 rounded-lg bg-white shadow-xl shadow-gray-600 flex flex-col gap-10 "  key={i} style={{
            position:"relative",
            bottom:val.bottom,
            top:val.top,
            width:val.width,
            height:val.height,
            backgroundSize: "100% 100%",    
            // background:`url(${val.image.src})`
            
          }}>
          {
            val.image &&  <Image src={val?.image?.src} alt=''  key={i} layout="fill" className='w-96 h-52'  /> 
          }
            <div className="text-[10px] Poppins font-light text-main">{val.event}</div>
            <div className="text-3xl Poppins w-2/3 ">{val.tittle}</div>
            <button className='px-4 py-1 w-fit ml-[150px] bg-main text-white font-regular rounded-full'>{val.button}</button>
          </div>
        )
      })
    }
    </div>
    <div className='grid grid-cols-4 place-content-center place-items-center px-20 py-5 relative bottom-[450px]  '>
      {
        InfoStatus.map((val,i)=>{
          return(
            <div key={i} className=" w-fit h-fit grid flex-col justify-center items-center  text-[#515151] p-2 rounded-md ">
              <div className="Poppins h-fit">
                <p className='text-4xl font-semibold'>{val.counting}</p>
              </div>
              <div className="h-fit">
                <p className=' Poppins text-xs '>{val.tittle}</p>
              </div>
            </div>
          )
        })
      }
      
    </div>
    <div className="flex flex-col justify-center items-center  ">
    {
      mission.map((val,i)=>{
        return(
          <div  className="flex flex-col px-32  " key={i}>
          <p className='text-sm font-semibold Poppins text-main ' style={{
            marginTop:val.top,
          }}>{val.tittle}</p>
          <p className='text-3xl font-medium Poppins text-black  ' style={{marginTop:val.top_1}}> 
           {val.mission}</p>
          <p className='text-[10px] text-gray-600 mt-5 Poppins  leading-5 text-left '>{val.description}</p>
         
        </div>
        )
      })
    }
     <div className="grid grid-cols-2 mt-6 place-content-center place-items-center px-40 gap-x-28 gap-y-5 mx-auto">
            {
              guidance.map((val,i)=>{
                return(
                  <div key={i} className="flex  w-[500px] gap-1 " style={{
                    marginLeft:val.left,
                  }}>
                    <div className="mt-2">{val.icon}</div>
                  <p className=''><span className='text-sm font-medium Poppins'>{val.tittle}</span><span className='text-[10px]  Poppins  text-gray-600'>{val.description}</span></p>
                </div>
                )
              })
            }
           
          </div>
    </div>
   
    </>
)}


export default InfoSection