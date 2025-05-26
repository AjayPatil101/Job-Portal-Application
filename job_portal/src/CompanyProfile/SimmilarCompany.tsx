import { similar } from "../Data/Company"
import CompanyCard from "./CompanyCard"

const SimmilarCompany = () => {
    return (
        <div className="mx-5 w-1/4">
            <div className="text-xl font-semibold mb-5">Simmilar Companys</div>
            <div className="flex flex-col flex-wrap gap-5 ">
                {
                    similar.map((similar, index) =>  <CompanyCard key={index} {...similar} />)
                }
            </div>
        </div>
    )
}


export default SimmilarCompany