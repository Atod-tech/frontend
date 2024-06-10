type SwitchFunction = (state: boolean) => void;

interface UIContextProps {
  sidebarOpen: boolean;
  profileDropdownOpen: boolean;
  notificationOpen: boolean;

  openSidebar: SwitchFunction;
  openNotification: SwitchFunction;
  openProfileDropdown: SwitchFunction;
}

interface UIProviderProps {
  children: React.ReactNode;
}
