
import React, { useState } from 'react'

function SideFilter({ Courses, ClickedCategory, Category, setClickedCategory, setClickedCourse, ClickedCourse }) {
    const [showAll, setShowALL] = useState(false);
    return (
        <div className='space-y-6' >
            <div className='space-y-3 shadow-md shadow-gray-200 p-3 pb-4'>
                <div className='text-lg text-main underline font-medium flex items-center justify-left'>Course Category</div>
                <div className='grid gap-4 px-2'>
                    <div onClick={() => {
                        setClickedCategory('')
                    }} className='flex items-center justify-left cursor-pointer gap-4 text-md font-Poppins'>
                        <div className={`h-4 w-4 ring-2
                     ${ClickedCategory === '' ? "bg-main ring-main" : 'bg-white ring-white'} 
                     border-gray-200 border-2`}></div>
                        <div>All</div>
                    </div>
                    {
                        Category?.map((val, i) => {
                            return <div key={i} onClick={() => {
                                setClickedCategory(val.name)
                            }} className='flex items-center justify-left cursor-pointer gap-4 text-md font-Poppins'>
                                <div className={`h-4 w-4 ring-2
                     ${ClickedCategory && ClickedCategory === val.name ? "bg-main ring-main" : 'bg-white ring-white'} 
                     border-gray-200 border-2`}></div>
                                <div className='capitalize'>{val.name}</div>
                            </div>
                        })
                    }
                </div>
            </div>


            {/* courses */}
            <div className='space-y-3 shadow-md shadow-gray-200 p-3'>
                <div className='text-lg text-main underline font-medium flex items-center justify-left'>Course Name</div>
                <div className={`grid gap-4 transition-all delay-200 duration-700 ease-in-out ${showAll ? "h-full" : Courses.length > 0 ? "h-[550px]" : "h-6"} px-2 overflow-hidden `}>
                    <div onClick={() => {
                        setClickedCourse('')
                    }} className='flex items-center justify-left cursor-pointer gap-4 text-md font-Poppins'>
                        <div className={`h-4 w-4 ring-2
                      ${ClickedCourse === '' ? "bg-main ring-main" : 'bg-white ring-white'} 
                     border-gray-200 border-2`}></div>
                        <div>All</div>
                    </div>
                    {/* ${showAll?'flex':i<8?"flex":'hidden'}  */}
                    {
                        Courses.map((val, i) => {
                            return <div key={i} onClick={() => {
                                setClickedCourse(val?.title)
                            }} className={`items-center justify-left flex cursor-pointer gap-4 text-md font-Poppins`}>
                                <div className={`h-4 w-4 ring-2
                 ${ClickedCourse && ClickedCourse === val?.title ? "bg-main ring-main" : 'bg-white ring-white'} 
                     border-gray-200 border-2`}></div>
                                <div>{val?.title}</div>
                            </div>
                        })
                    }

                </div>
                {Courses.length > 6 && <div onClick={() => {
                    setShowALL(prev => {
                        return !prev
                    })
                }} className='text-main capitalize cursor-pointer flex justify-end'>
                    {showAll ? 'view less' : 'view More'}
                </div>
                }
            </div>
        </div>
    )
}

export default SideFilter
