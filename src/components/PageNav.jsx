import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";

import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>

          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default PageNav;