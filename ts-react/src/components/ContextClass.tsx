import {
  Component,
  ContextType,
  createContext,
  FC,
  ReactElement,
  useContext,
} from 'react';

interface IContext {
  isAuth: boolean;
  toggleAuth: () => void;
}

const AuthContext = createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {},
});

export default class Login extends Component<{}, {}> {
  context!: ContextType<typeof AuthContext>;
  // declare context: ContextType<typeof AuthContext>;
  static contextType = AuthContext;

  render(): ReactElement {
    const { isAuth, toggleAuth } = this.context;
    return <button onClick={toggleAuth}>{!isAuth ? 'Login' : 'Logout'}</button>;
  }
}

// export const Profile: FC<{}> = (): ReactElement => (
//   <AuthContext.Consumer>
//     {({ isAuth }: IContext) => <h1>{!isAuth ? 'Please login' : 'You are logged in'}</h1>}
//   </AuthContext.Consumer>
// );

export const Profile: FC<{}> = (): ReactElement => {
  const { isAuth } = useContext(AuthContext);
  return <h1>{!isAuth ? 'Please login' : 'You are logged in'}</h1>;
};

export class ContextClass extends Component<{}, { isAuth: boolean }> {
  readonly state = {
    isAuth: false,
  };

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({ isAuth: !isAuth }));
  };

  render(): ReactElement {
    const { isAuth } = this.state;
    // const contextValue: IContext = { isAuth, toggleAuth: this.toggleAuth };
    return (
      <AuthContext.Provider value={{ isAuth, toggleAuth: this.toggleAuth }}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}
