import { useState } from 'react'; // Import useState to manage menu state
import { HashLink } from 'react-router-hash-link';
import { hamburger, closeIcon } from '../assets/index';
import { navLinks } from '../constants/index';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex justify-between items-center gap-8 max-container">
      <h1>
        <HashLink smooth to="/#home">fadenfroh</HashLink>
      </h1>

      {/* Desktop Menu */}
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <HashLink
              smooth
              to={`/#${item.href.replace('#', '')}`}
              className="font-bodoni leading-normal text-lg text-slate-gray"
            >
              {item.label}
            </HashLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="hidden max-lg:block z-20">
        {/* Conditionally render either the hamburger or the close icon based on the isOpen state */}
        <img
          src={isOpen ? closeIcon : hamburger} // Show the X icon if open, otherwise show the hamburger icon
          alt={isOpen ? 'Close Menu' : 'Hamburger Menu'}
          width={25}
          height={25}
          onClick={toggleMenu}
          className="cursor-pointer"
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-10">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <HashLink
                  smooth
                  to={`/#${item.href.replace('#', '')}`}
                  className="font-bodoni leading-normal text-lg text-slate-gray"
                  onClick={toggleMenu} // Close menu on click
                >
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
