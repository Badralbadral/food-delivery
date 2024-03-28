import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { CheckboxCont } from "@/components/Verification & Address/CheckBoxCont";
import React from "react";

const Verification = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Stack direction={`row`} mt={10} spacing={`180px`}>
      <Stack spacing={`24px`}>
        <CheckboxCont />
        <Stack border={`1px solid black`} width={432} height={612}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Дүүрэг сонгоно уу
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Verification;
