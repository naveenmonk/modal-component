import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = (state) => {
    setIsSidebarOpen(!state);
  };

  const toggleModal = (state) => {
    setIsModalOpen(!state);
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, isModalOpen, toggleSidebar, toggleModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
