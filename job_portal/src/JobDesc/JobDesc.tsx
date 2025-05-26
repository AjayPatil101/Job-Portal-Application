import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
//ts-ignore
import DOMPurify from "dompurify";
const JobDesc = (props: any) => {
    const data = DOMPurify.sanitize(desc);
    return <div className="w-2/3">
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center '>
                <div className='p-3 bg-mine-shaft-800 rounded-xl' ><img className='h-14' src={`Icons/Google.png`} alt="Google" /></div>
                <div>
                    <div className='font-semibold text-2xl'>Software Engineer III</div>
                    <div className='text-lg text-mine-shaft-300'>Google &bull; 3 days ago &#x2022; 48 Applicants</div>
                </div>
            </div>

            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply-job">
                    <Button color="brightSun.4" size="sm" variant="light">{props.edit ? "Edit" : "Apply"}</Button>
                </Link>
                {props.edit ?
                    <Button color="red.4" size="sm" variant="outline">Delete</Button>

                    : <IconBookmark className='text-bright-sun-400 cursor-pointer' />}
            </div>
        </div>
        <Divider my="xl" size="xs" />
        <div className="flex justify-between">
            {card.map((data, index) =>
                <div key={index} className="flex flex-col items-center gap-1">
                    <ActionIcon color="brightSun.4" className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings">
                        <data.icon className="h-4/5 w-4/5" stroke={1.5} />
                    </ActionIcon>
                    <div className="text-sm text-mine-shaft-300">{data.name}</div>
                    <div className="text-mine-shaft-300 font-semibold">{data.value}</div>
                </div>
            )}

        </div>
        <Divider my="xl" size="xs" />
        <div className="">
            <div className="text-xl font-semibold mb-5">Required Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    skills.map((skill, index) =>
                        <ActionIcon key={index} color="brightSun.4" p="xs" className="!h-fit !w-fit font-medium !text-sm " variant="light" radius="xl" aria-label="Settings">
                            {skill}
                        </ActionIcon>
                    )
                }
            </div>
        </div>
        <Divider my="xl" size="xs" />
        <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400  [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify " dangerouslySetInnerHTML={{ __html: data }}>
        </div>
        <Divider my="xl" size="xs" />
        <div>
            <div className="text-xl font-semibold mb-5">About Company</div>
            <div>
                <div className='flex justify-between mb-3'>
                    <div className='flex gap-2 items-center '>
                        <div className='p-3 bg-mine-shaft-800 rounded-xl' ><img className='h-8' src={`Icons/Google.png`} alt="Google" /></div>
                        <div className="flex flex-col">
                            <div className='font-medium text-lg'>Google</div>
                            <div className='text-mine-shaft-300'>10k+ Employees</div>
                        </div>
                    </div>

                    <Link to="/Company">
                        <Button color="brightSun.4" variant="light">Company Page</Button>
                    </Link>
                </div>
                <div className="text-mine-shaft-300 text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur veritatis saepe rem eaque dicta eligendi modi ipsam corrupti. Repellendus repellat, asperiores impedit ipsa maiores quae quia consectetur magni soluta dolore doloremque fuga, tenetur eaque culpa at voluptatem veniam sed. Nostrum!
                </div>
            </div>
        </div>
    </div>
}
export default JobDesc;