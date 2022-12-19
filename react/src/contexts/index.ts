import { THEMES } from 'configs';
import { createContext } from 'react';

// @ts-expect-error
export const UserContext = createContext();
// @ts-expect-error
export const ProductContext = createContext();

export const ThemeContext = createContext(THEMES.LIGHT);
