import { inputsForCreateFoodModal } from "@/utils/dummy-data";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Dispatch, useEffect, useState } from "react";
import { AddImg } from "./AddImg";
type ObjType = {
  _id: string;
  name: string;
  __v: number;
};
const label = { inputProps: { "aria-label": "Switch demo" } };
export const Inputs = ({
  selected,
  setFunc,
  setSale,
  sale,
}: {
  selected: any;
  setFunc: Dispatch<React.SetStateAction<string>>;
  setSale: Dispatch<React.SetStateAction<boolean>>;
  sale: boolean;
}) => {
  const [categories, setCategories] = useState<Array<ObjType>>();
  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:4000/api/category`);
      const json = await res.json();
      setCategories(json);
    }
    getData();
  }, []);
  return (
    <Stack spacing={2.3} py={3} overflow={`hidden`}>
      {inputsForCreateFoodModal.map((value) => {
        return (
          <Stack key={value.name} px={`24px`} spacing={`5px`}>
            <Stack direction={`row`} alignItems={`center`}>
              {value.name == "Хямдралтай эсэх" ? (
                <Switch onClick={() => setSale(!sale)} {...label} />
              ) : null}
              <Typography>{value.name}</Typography>
            </Stack>
            {value.name == "Хоолны ангилал" ? (
              <FormControl>
                <InputLabel>Хоолны ангилал</InputLabel>
                <Select
                  sx={{ bgcolor: `#F4F4F4` }}
                  required
                  value={selected ?? ``}
                >
                  {categories?.map((val) => {
                    return (
                      <MenuItem
                        onClick={() => setFunc(val.name)}
                        key={val._id}
                        value={val.name ?? ``}
                      >
                        {val.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            ) : (
              <Box
                height={56}
                borderRadius={`8px`}
                border={`none`}
                bgcolor={`#F4F4F4`}
                sx={{ outline: `none` }}
                component={`input`}
                placeholder={value.name}
                px={`12px`}
                fontSize={16}
                name={value.eName}
                type={`${value.name == "Хямдралтай эсэх" ? "number" : "text"}`}
              ></Box>
            )}
          </Stack>
        );
      })}
      <AddImg />
    </Stack>
  );
};
