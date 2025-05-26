import { Divider, Input, RangeSlider } from "@mantine/core"
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {

    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
            <div className="flex items-center">
                <IconUserCircle size={30} className='text-bright-sun-400 p-1  bg-mine-shaft-900 rounded-full mr-2' />
                <Input className="[&_input]:placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name" />
            </div>
            <Divider mr="xs" size="xs" orientation="vertical" />
            {
                searchFields.map((data, index) => <>
                    <div key={index} className="w-1/5 ">
                        <MultiInput {...data} />
                    </div>
                    <Divider mr="xs" size="xs" orientation="vertical" /></>)
            }
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex text-sm justify-between mb-1">
                    <div>Salary</div>
                    <div>&#8377;  {value[0]} LPA - &#8377; {value[1]} LPA</div>
                </div>
                <RangeSlider color="brightSun.4" size="xs" value={value} labelTransitionProps={{
                    transition: 'skew-down',
                    duration: 150,
                    timingFunction: 'linear',
                }} onChange={setValue} />
            </div>
        </div>
    )
}

export default SearchBar