import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";

import { Form } from "./Form";
import { MuiTable } from "./Table";

// rename this to "Tabs"

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
