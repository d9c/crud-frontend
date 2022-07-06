import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";

import { Form } from "./Form";
import { MuiTable } from "./Table/MuiTable";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} centered>
        <Tab label="Register" value="1" />
        <Tab label="Users" value="2" />
      </TabList>
      <TabPanel value="1">
        <Form />
      </TabPanel>
      <TabPanel value="2">
        <MuiTable />
      </TabPanel>
    </TabContext>
  );
};
