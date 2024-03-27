import { Button, Stack, useTheme } from "@mui/material";
import { MenuBtns } from "@/utils/dummy-data";
import { Card } from "../Home/Card";
import foodData from "@/dummy.json";
import { useState } from "react";
export const MenuBody = () => {
  const theme = useTheme();
  const [category, setCategory] = useState("Breakfast");

  return (
    <Stack
      height={`fit-content`}
      alignItems={`center`}
      spacing={`26px`}
      mt={12}
    >
      <Stack direction={`row`} spacing={3}>
        {MenuBtns.map((val, index) => {
          return (
            <Button
              onClick={() => setCategory(val)}
              sx={{
                fontSize: 17,
                textTransform: `none`,
                borderRadius: `8px`,
                color: `black`,
                width: 280,
                height: 43,
                border: `1px solid #D6D8DB`,
                transitionDuration: `0.4s`,
                ":focus": {
                  bgcolor: theme.palette.primary.main,
                  color: `white`,
                },
              }}
              key={index}
            >
              {val}
            </Button>
          );
        })}
      </Stack>
      <Stack>
        <Card
          title=""
          data={foodData.filter((val) => {
            return val.category == category && val.sale == 0;
          })}
        />
      </Stack>
    </Stack>
  );
};
