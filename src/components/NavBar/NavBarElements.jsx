import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { NavLink as Link } from 'react-router-dom';
// import { Link } from 'next';

import * as styles from './NavBar.module.scss';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import Link from 'next/link';

export const Nav = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  const onMenuClick = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <>
      <nav
        className={`${styles.nav} ${navOpen ? styles.open : ''}`}
        onClick={onMenuClick}
        onMouseLeave={() => setNavOpen(false)}>
        {props.children}
      </nav>
      <div className={styles.menuIcon} onClick={() => setNavOpen(!navOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </>
  );
};
Nav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
};

export const NavLink = ({ children, ...props }) => {
  return (
    <Link className={styles.link} {...props}>
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
};
