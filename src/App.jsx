import { useContext } from "react";
import Apparatus from "./components/Apparatus";
import Filter from "./components/Filter";
import Tabs from "./components/Tabs";
import Title from "./components/Title";
import { TabContext } from "./context/TabContext";
import Results from "./components/Results";
import Live from "./components/Live";
import MobileResults from "./components/MobileResults";
import MobileLive from "./components/MobileLive";
import { useMediaQuery } from "react-responsive";


const App = () => {
  const { activeTab } = useContext(TabContext);
  const sm = useMediaQuery({maxWidth: 639})

  return (
    <div className="bg-[#080915] w-full overflow-hidden min-h-screen">
      <div className="max-w-[1224px] mx-auto px-4 pb-[180px]">
        <Title />
        <Tabs />
        {activeTab === 3 && (
          <>
            <Filter />
            <Apparatus />
            {sm ? <MobileResults /> : <Results />}
          </>
        )}
        {activeTab === 0 && (sm ? <MobileLive /> : <Live />)}

      </div>
    </div>
  );
};

export default App;
