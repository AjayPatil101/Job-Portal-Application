import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Companies from "../Landingpage/Companies";
import DreamJob from "../Landingpage/DreamJob";
import JobCategory from "../Landingpage/JobCategory";
import Subscribe from "../Landingpage/Subscribe";
import Testimonials from "../Landingpage/Testimonials";
import Working from "../Landingpage/Working";

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <DreamJob />
            <Companies />
            <JobCategory />
            <Working />
            <Testimonials />
            <Subscribe />
        </div>
    )
}
export default HomePage;