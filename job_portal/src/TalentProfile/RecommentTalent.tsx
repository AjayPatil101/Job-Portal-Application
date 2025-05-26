import { talents } from "../Data/TalentData"
import TalentCart from "../FindTalent/TalentCart"

const RecommentTalent = () => {
  return (
    <div className="mx-5">
        <div className="text-xl font-semibold mb-5">Recomment Talent</div>
        <div className="flex flex-col flex-wrap gap-5 ">
            {
                talents.map((talent,index)=>index<4 && <TalentCart key={index} {...talent} />)
            }
        </div>
    </div>
  )
}
export default RecommentTalent