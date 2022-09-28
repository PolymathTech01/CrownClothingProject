import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as CrownSvg } from '../../Assets/crown.svg';
import CartIcon from '../../components/Cart-icon/Cart-icon.component';
import CartDropdown from '../../components/Cart-dropdown/Cart-dropdown.components';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles.jsx';
// import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/carts.context';
import { signOutUser } from '../../Utils/Firebase/Firebase.utils';
import { selectCurrentUser } from '../../Store/User/user.selector';
const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  // console.log('current user', currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownSvg className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
