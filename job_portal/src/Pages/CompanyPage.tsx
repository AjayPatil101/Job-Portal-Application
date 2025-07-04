import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import Company from "../CompanyProfile/Company";
import SimmilarCompany from "../CompanyProfile/SimmilarCompany";

const CompanyPage = () => {
    const navigator = useNavigate();
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Button my-md onClick={() => navigator(-1)} leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="light">Back</Button>
            <div className="flex gap-5 justify-between mt-5">
                <Company />
                <Divider size="xs" mx="md" orientation="vertical" />
                <SimmilarCompany />
            </div>
        </div>
    )
}

export default CompanyPage