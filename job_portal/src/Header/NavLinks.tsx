import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { title: 'Find Jobs', url: '/find-jobs' },
    { title: 'Find Talent', url: '/find-talent' },
    { title: 'Post Job', url: '/post-job' },
    { title: 'Posted Job', url: '/posted-job' },
    { title: 'Job History', url: '/job-history' },
    { title: 'SignUp', url: '/signup' }
  ];
  const location = useLocation();

  return (
    <div className="flex gap-5 h-full text-mine-shaft-300 items-center">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent b"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link to={link.url}>{link.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
