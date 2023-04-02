import { Nav, NavLink } from './NavBarElements';
import PropTypes from 'prop-types';

export const NavBar = ({ routes }) => {
  return (
      <Nav>
          {routes.map((route) => (
            <NavLink key={route.to} href={route.to}>
              {route.label}
            </NavLink>
          ))}
      </Nav>
  );
};

NavBar.propTypes = {
  routes: PropTypes.array
};
