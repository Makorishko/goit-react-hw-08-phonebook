import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';

const Link = styled(NavLink)`
  &.active {
    color: red;
  }
  padding-right: 10px;
`;

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  const location = useLocation();
  return (
    <>
      <Link to="/" state={{ from: location }}>
        Home
      </Link>
      <Link to="/register" state={{ from: location }}>
        Registration
      </Link>
      <Link to="/login" state={{ from: location }}>
        Login
      </Link>

      {isLoggedIn && (
        <Link to="/contacts" state={{ from: location }}>
          Contacts
        </Link>
      )}
    </>
  );
}
