import React, { useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";

import { Form } from "../Form";
import { Table } from "../Table";

import * as C from "./styles";

export const Tabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <C.TabList onChange={handleChange} centered>
        <C.Tab label="Register" value="1" />
        <C.Tab label="Users" value="2" />
      </C.TabList>
      <TabPanel value="1">
        <Form />
      </TabPanel>
      <TabPanel value="2">
        <Table />
      </TabPanel>
    </TabContext>
  );
};
