import { talents } from "../Data/TalentData"
import Sort from "../FindJobs/Sort"
import TalentCart from "./TalentCart"

export const Talents = () => {
    return (
        <div className='p-5 '>
            <div className='flex justify-between mt-5'>
                <div className='text-2xl font-semibold'>Talents</div>
                <Sort />
            </div>
            <div className='mt-10 flex flex-wrap gap-5 
            justify-around
           '>
                {
                    talents.map((talent, index) => <TalentCart key={index} {...talent} />)
                }
            </div>
        </div>
    )
}
