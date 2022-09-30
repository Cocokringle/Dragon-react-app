import Navigation from '../Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import styles from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
      <header className={styles.header} >
        <Navigation/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </header>
    );
}