import React from 'react'
import Sort from './Sort'
import JobCard from './JobCard'
import { jobList } from '../Data/JobsData'

const Job = () => {
  return (
    <div className='p-5 '>
        <div className='flex justify-between mt-5'>
            <div className='text-2xl font-semibold'>Recommeded Jobs</div>
            <Sort />
        </div>
        <div className='mt-10 flex flex-wrap gap-5 
        justify-around
        // gap-5
        '>

        {
            jobList.map((job,index)=><JobCard key={index} {...job} />)
        }
        </div>
    </div>
  )
}

export default Job