import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownSvg } from '../../Assets/crown.svg';
import CartIcon from '../../components/Cart-icon/Cart-icon.component';
import CartDropdown from '../../components/Cart-dropdown/Cart-dropdown.components';
import './Navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/carts.context';
import { signOutUser } from '../../Utils/Firebase/Firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // console.log('current user', currentUser);
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownSvg className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
