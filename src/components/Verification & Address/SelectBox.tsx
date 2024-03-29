import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Location } from "@/svgs/Location";

export const SelectBox = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <Typography mb={1.4} fontSize={14}>
        Хаяг аа оруулна уу
      </Typography>
      <Stack direction={`row`} alignItems={`center`} bgcolor={`#F7F7F8`}>
        <Location />
        <Select
          sx={{ width: `90%`, height: 48, border: `none` }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem selected value={10}>
            Дүүрэг сонгоно уу
          </MenuItem>
          <MenuItem value={20}>Ten</MenuItem>
          <MenuItem value={30}>Twenty</MenuItem>
          <MenuItem value={40}>Thirty</MenuItem>
        </Select>
      </Stack>
    </FormControl>
  );
};
