import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { useState } from "react";
import style from "./Notification.module.css";
import Newnotication from "./Newnotification";
const TabValue = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleSliderChange = (event) => {
        setTabIndex(parseInt(event.target.value, 10));
    };

    const handleTabsChange = (index) => {
        setTabIndex(index);
    };

    return (
        <Box>
            <input
                id={style.inp}
                type="range"
                min="0"
                max="1"
                value={tabIndex}
                onChange={handleSliderChange}
            />

            <Tabs
                id={style.main_tab}
                index={tabIndex}
                onChange={handleTabsChange}>
                <div id={style.tablist_div}>
                    <TabList id={style.tablist}>
                        <Tab className={style.tab}>Unread Notifications</Tab>
                        <Tab className={style.tab}>Read Notifications</Tab>
                    </TabList>
                </div>

                <TabPanels>
                    <TabPanel className={style.tab_pannels1}>
                        <p>No new notications...</p>
                    </TabPanel>
                    <TabPanel className={style.tab_pannels2}>
                        <Newnotication />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};
export default TabValue;
