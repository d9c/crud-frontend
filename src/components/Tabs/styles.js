import styled from "styled-components";
import { TabList as MuiTabList } from "@mui/lab";
import { Tab as MuiTab } from "@mui/material";

export const TabList = styled(MuiTabList)`
  && {
    .Mui-selected {
      color: ${(props) => props.theme.colors.secondary};
    }

    .MuiTabs-indicator {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Tab = styled(MuiTab)`
  && {
    font-family: "JetBrains Mono", sans-serif;
    color: ${(props) => props.theme.colors.text.secondary};
    text-transform: none;
  }
`;
