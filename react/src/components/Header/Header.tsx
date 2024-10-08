import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import clsx from 'clsx';
import styles from './Header.module.scss';
import { THEMES } from 'lib/const';
import type { RootState } from 'store';
import { setTheme } from 'slices/theme';

const Header: FC = function () {
  const theme = useSelector<RootState, THEMES>(({ theme }: RootState) => theme);
  const dispatch = useDispatch();
  const actionCreators = bindActionCreators({ setTheme }, dispatch);

  const className = clsx(styles.header, {
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
        <button onClick={() => actionCreators.setTheme()}>Switch Theme</button>
      </div>
    </header>
  );
};

export default Header;
