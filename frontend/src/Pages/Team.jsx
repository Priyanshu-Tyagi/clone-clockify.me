import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Heading,
  Image
} from "@chakra-ui/react";
import Members from "../Components/team/Members";
import Groups from "../Components/team/Groups";
import Reminders from "../Components/team/Reminders";
import AppNavbar from "../Components/App_Bars/AppNavbar";
import loader from '/Curve-Loading.gif'
import CompactAppSidebar, {
  ExpandedAppSidebar,
} from "../Components/App_Bars/AppSidebar";
import { useAppSelector } from "../features/hooks";

const Team = () => {
  const [showsidebar, setshowSidebar] = useState(false);
  const teams = useAppSelector(store=>store.groupsSlice)
  const toggleSidebar = () => {
    setshowSidebar(!showsidebar);
  };
  return (
    <div>
      <AppNavbar Open={toggleSidebar} />
      <Flex
        position={"relative"}
        width="100%"
        bg={"#F2F6F8"}
        justify={"space-between"}
        align={["top"]}
      >
        <Box>
          {showsidebar ? <ExpandedAppSidebar /> : <CompactAppSidebar />}
        </Box>
        <Box padding={"40px 10px"} width={showsidebar ? "89%" : "96%"}>
          <Heading fontSize={"24px"} color="#666666" marginBottom={"40px"} fontWeight="600">Team</Heading>
          <Tabs variant="enclosed-colored">
            <TabList>
              <Tab>Members</Tab>
              <Tab>Groups</Tab>
              <Tab>Reminders</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box padding={"20px"} bg={"white"} margin="-15px">
                  <Members />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box padding={"20px"} bg={"white"} margin="-15px">
                <Groups />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box padding={"20px"} bg={"white"} margin="-15px">
                <Reminders />
                </Box>
                
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
      {teams.loading?
      <Flex w="100vw" h={"100vh"} mx={"auto"} align={"center"} justify={"center"} bg={"rgba(245,250,254,.5)"} backgroundBlendMode={"hard-light"} position={"absolute"} top={"0"} left={"0"}>
          <Image src={loader} />
      </Flex>:null}
    </div>
  );
};

export default Team;
