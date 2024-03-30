import { createContext, useEffect, useState } from "react";
import { tabs } from "../constants";

export const TabContext = createContext(null);

const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(3);
  const [activeTabContent, setActiveTabContent] = useState(null);

  useEffect(() => {
    setActiveTabContent(tabs[activeTab].content);
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveTabContent(tabs[index].content);
  };

  const contextVal = {
    activeTab,
    setActiveTab,
    handleTabClick,
    activeTabContent,
    setActiveTabContent,
  };

  return (
    <TabContext.Provider value={contextVal}>{children}</TabContext.Provider>
  );
};

export default TabProvider;
