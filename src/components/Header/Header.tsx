import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import styles from './Header.module.scss';
import { THEMES } from 'app/constants';
import { RootState } from 'app/store';
import { setTheme } from 'app/slices/theme';

const Header: FC = function (props) {
  const theme = useSelector<RootState, THEMES>(({ theme }: RootState) => theme);
  const dispatch = useDispatch();

  const className = cx(styles.header, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  return (
    <header className={className}>
      <h1>My Site</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Link 1</li>
          <li className={styles.navListItem}>Link 2</li>
          <li className={styles.navListItem}>Link 3</li>
        </ul>
      </nav>
      <div>
        <button onClick={() => dispatch(setTheme())}>Switch Theme</button>
      </div>
    </header>
  );
};

export default Header;
