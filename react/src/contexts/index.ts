import { THEMES } from 'configs';
import { createContext } from 'react';

export const UserContext = createContext<{ username; age; gender }>({} as any);
export const ProductContext = createContext(null);
export const ThemeContext = createContext(THEMES.LIGHT);
