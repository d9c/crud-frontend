import styled from "styled-components";
import { TextField } from "@mui/material";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);

  width: 512px;
  padding: 40px;
`;

export const TextInput = styled(TextField)`
  background-color: #ffffff;
  width: 350px;
`;
