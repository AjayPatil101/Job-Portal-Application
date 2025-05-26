import { talents } from "../Data/TalentData"
import TalentCart from "../FindTalent/TalentCart"


const CompanyEmployees = () => {
    return (
        <div className="flex mt-10 flex-wrap gap-3 justify-around">
            {
                talents.map((talent, index) => <TalentCart key={index} {...talent} />)
            }
        </div>
    )
}

export default CompanyEmployees