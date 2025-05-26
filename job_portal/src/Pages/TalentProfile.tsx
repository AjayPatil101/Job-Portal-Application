import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import Profile from "../TalentProfile/Profile"
import { profile } from "../Data/TalentData"
import RecommentTalent from "../TalentProfile/RecommentTalent"

const TalentProfile = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link className="my-4 inline-block" to="/find-talent">
        <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="light">Back</Button>
      </Link>
      <div className="flex gap-5 justify-around">
        <Profile {...profile} />
        <Divider ml="sm" size="xs" orientation="vertical" />
        <RecommentTalent />
      </div>
    </div>
  )
}


export default TalentProfile