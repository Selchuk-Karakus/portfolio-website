import "./navBar.css";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const NavBarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className="hamburgerMenu"
      size="50px"
      onClick={() => setOpenMenu(!openMenu)}
    />
  );

  const hamburgerCloseIcon = (
    <GrClose
      className="hamburgerMenu"
      size="50px"
      onClick={() => setOpenMenu(!openMenu)}
    />
  );

  const closeHamburgerMenu = () => setOpenMenu(false);

  return (
    <div className="navBarMobile">
      {openMenu ? hamburgerCloseIcon : hamburgerIcon}
      {openMenu && (
        <NavLinks isMobileMenuOn={true} closeMobileMenu={closeHamburgerMenu} />
      )}
    </div>
  );
};

export default NavBarMobile;
