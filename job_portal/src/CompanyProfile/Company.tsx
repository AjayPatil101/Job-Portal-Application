import { Avatar, Divider, Tabs } from "@mantine/core"
import { IconMapPin } from "@tabler/icons-react"
import AboutComp from "./AboutComp"
import CompanyJob from "./CompanyJob"
import CompanyEmployees from "./CompanyEmployees"
import SimmilarCompany from "./SimmilarCompany"

const Company = () => {
    return (
        <div className="w-3/4 ">
            <div className="relative">
                <img className="rounded-t-2xl" src="Profile\banner.jpg" alt="" />
                <img className="rounded-3xl h-36 w-36 p-2 -bottom-1/4 absolute left-5 border-mine-shaft-950 border-8 bg-mine-shaft-950 left-5" src="/Icons/Google.png" alt="" />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between" >Google
                    <Avatar.Group>
                        <Avatar src="avatar1.png" />
                        <Avatar src="avatar2.png" />
                        <Avatar src="avatar.png" />
                        <Avatar>+10k</Avatar>
                    </Avatar.Group>
                </div>
                <div className='flex gap-1 text-lg text-mine-shaft-300 items-center'>
                    <IconMapPin className='h-5 w-5' stroke={1.5} />Pune, Maharatra India
                </div>
            </div>
            <Divider my="xl" />
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="about">
                    <Tabs.List className="mb-5 [&_button]:text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="about"><AboutComp /></Tabs.Panel>
                    <Tabs.Panel value="jobs"><CompanyJob /></Tabs.Panel>
                    <Tabs.Panel value="employees"><CompanyEmployees /></Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}


export default Company