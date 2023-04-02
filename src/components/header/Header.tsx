import css from './Header.module.scss';
import { NavBar } from '../NavBar/NavBar';
import { routes } from '../../app-routes';
// import { useAuth } from '../../contexts/auth';

 const Header = () => {
  // const { user } = useAuth();
  // const logged = user?.email && true;

  return (
    <div className={css.headerContainer}>
      <header className={css.header}>
        <div className={css.logo}>NeedAPI</div>
        <div className={css.rightHeader}>
          <NavBar routes={routes} />
          <button className={css.btnLogin}>Login</button>
          {/* {logged && <img className={css.img} src={user?.picture || '/public/nouserimg.png'} width='48' height='48'></img>} */}
        </div>
      </header>
    </div>
  );
};

export default Header;
