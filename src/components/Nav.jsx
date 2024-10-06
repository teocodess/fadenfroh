import { hamburger } from '../assets/index';
import { navLinks } from '../constants/index';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to navigate to the home page and scroll to the section
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on the homepage, navigate to homepage and scroll after navigating
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay to ensure page navigation completes before scrolling
    } else {
      // If already on the homepage, just scroll to the section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center gap-8 max-container">
      <h1><a href="#home">fadenfroh</a></h1>

      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            {/* Replace direct href links with an onClick to handle navigation and scrolling */}
            <button
              onClick={() => scrollToSection(item.href.replace('#', ''))} // Removes the # from href
              className="font-bodoni leading-normal text-lg text-slate-gray"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="hidden max-lg:block">
        <img
          src={hamburger}
          alt="HamburgerMenu"
          width={25}
          height={25}
        />
      </div>

      <h1>
        <a
          target="_blank"
          href="https://www.etsy.com/at/people/5io4053rtp5ubfv1?ref=hdr_user_menu-profile"
          rel="noopener noreferrer"
        >
          etsy shop
        </a>
      </h1>
    </nav>
  );
};

export default Nav;
