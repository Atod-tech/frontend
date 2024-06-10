"use client";

import { AppConstants } from "@src/constants";
import { StoreService } from "@src/services";
import { createContext, useContext, useState } from "react";

// Define the context type
const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [contextValue, setContextValue] = useState<UserContextValue>({
    user: StoreService.getObject(AppConstants.USER)
  });

  const resetUserState = () => {
    setContextValue({
      user: undefined
    });

    StoreService.removeItem(AppConstants.TOKEN);
    StoreService.removeItem(AppConstants.USER);
  };
  const state: UserContextProps = {
    ...contextValue,
    isUserLoggedIn: () => !!StoreService.getItem(AppConstants.TOKEN),
    setUserData: (user) => {
      // UPDATE USER IN LS
      StoreService.setItem(AppConstants.USER, user);
      // UPDATE CONTEXT USER STATE
      setContextValue((p) => ({ ...p, user }));
    },
    resetUserState
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

// Custom hook to use the sidebar context
export const useUserStore = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUserStore must be used within a UserProvider");

  return context;
};
