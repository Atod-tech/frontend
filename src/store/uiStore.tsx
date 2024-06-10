import { createContext, useContext, useState } from "react";

// Define the context type
const UIContext = createContext<UIContextProps | undefined>(undefined);

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isNotfOpen, setIsNotfOpen] = useState<boolean>(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState<boolean>(false);

  const openSidebar: SwitchFunction = (state) => setIsSidebarOpen(state);
  const openNotification: SwitchFunction = (state) => setIsNotfOpen(state);
  const openProfileDropdown: SwitchFunction = (state) =>
    setIsProfileDropdownOpen(state);

  const state: UIContextProps = {
    sidebarOpen: isSidebarOpen,
    notificationOpen: isNotfOpen,
    profileDropdownOpen: isProfileDropdownOpen,

    openSidebar,
    openNotification,
    openProfileDropdown
  };

  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
};

// Custom hook to use the sidebar context
export const useUIStore = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUIStore must be used within a UIProvider");

  return context;
};
