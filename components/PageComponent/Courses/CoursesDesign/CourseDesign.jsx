import React from 'react'
import SideFilter from './SideFilter';
import AllCourses from './AllCourses';
import axios from '../../../UI/Axios/Axios'
import { useEffect, useState } from 'react';
function CourseDesign() {

    const [Category, setCategory] = useState([]);
    const [Courses, setCourses] = useState([]);
    const [ClickedCategory, setClickedCategory] = useState('');
    const [ClickedCourse, setClickedCourse] = useState('');


    const getCategory = () => {
        try {
            axios.get('/category').then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setCategory(res.data?.data)
                    console.log('category: ', res.data?.data);
                }
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {
            console.log(error);
        }
    }
    const getCourse = () => {
        try {
            axios.get('/courses').then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setCourses(res.data?.data)
                }
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCategory();
        getCourse();
    }, [])

    const FilterCourse = (options) => {
        console.log('filter', ClickedCategory.replace(/\s/g, ''), 'hey hey');
        return options.filter(option => option?.category?.name?.replace(/\s/g, '').includes(ClickedCategory.replace(/\s/g, '')))
    }

    return (
        <div>
            <div className='w-fit mx-auto pb-1 text-3xl font-Poppins text-main font-semibold'>Our Courses</div>
            <div className=' mx-auto text-base font-serif text-gray-400 font-medium w-4/12 pb-6 italic text-center '>
                {`"The beautiful thing about learning is that nobody can take it away from you."`}
            </div>
            <div className='grid grid-cols-7 gap-0'>
                <div className='col-span-2  h-full p-4  '>

                    <SideFilter Courses={Courses} setClickedCourse={setClickedCourse} ClickedCourse={ClickedCourse} ClickedCategory={ClickedCategory} Category={Category} setClickedCategory={setClickedCategory} />
                </div>
                <div className='col-span-5 p-4'>
                    <AllCourses courses={FilterCourse(Courses)} />
                </div>
            </div>
        </div>
    )
}

export default CourseDesign
