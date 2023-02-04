import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';

interface ITheme {
  backgroundColor: string;
  color: string;
}

interface State {
  count: number;
}

type Action = { type: 'increment' | 'decrement' };
export const ThemeContext = createContext<ITheme>({
  backgroundColor: 'black',
  color: 'white',
});

const reducer = ({ count }: State, { type }: Action) => {
  switch (type) {
    case 'increment':
      return { count: count + 1 };
    case 'decrement':
      return { count: count - 1 };
    default:
      return { count };
  }
};

const initialArg = { count: 0 };

function sum(a: number, b: number) {
  return a + b;
}

export const Hooks: FC<{}> = () => {
  const [value, setValue] = useState<number>(0);
  const [altValue, setAltValue] = useState<number>(10);
  const ref1 = useRef<HTMLDivElement>(null!); // readonly, controlled by React only
  const ref2 = useRef<HTMLDivElement | null>(null); // modifiable, controlled by you
  const themeContext = useContext(ThemeContext);
  const [state, dispatch] = useReducer(reducer, initialArg);

  const memoizedCallback = useCallback(() => {
    sum(value, altValue);
  }, [value, altValue]);
  const memoizedValue = useMemo(() => sum(value, altValue), [value, altValue]);

  useEffect(() => {
    setValue(value + 1);
    return setValue(0);
  }, []);
  return <div ref={ref1}>200</div>;
};
