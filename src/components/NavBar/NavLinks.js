const NavLinks = ({ isMobileMenuOn, closeMobileMenu }) => {
  return (
    <div className="navbar-navigation-items">
      <ul>
        <li onClick={() => isMobileMenuOn && closeMobileMenu()}>
          <a href="#About">About</a>
        </li>
        <li onClick={() => isMobileMenuOn && closeMobileMenu()}>
          <a href="#Projects">Projects</a>
        </li>
        <li onClick={() => isMobileMenuOn && closeMobileMenu()}>
          <a href="#Contacts">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
