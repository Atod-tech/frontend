type SwitchFunction = (state: boolean) => void;

interface UserContextValue {
  user: User | undefined;
}
interface UserContextProps extends UserContextValue {
  setUserData: (user: User) => void;
  isUserLoggedIn: () => boolean;
  resetUserState: () => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}
