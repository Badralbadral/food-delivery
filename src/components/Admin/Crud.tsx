import { Stack, Typography } from "@mui/material";
import { SideBar } from "./SideBar";
import React from "react";
import { AddFoodModal } from "./AddFoodModal";

export const Crud = () => {
  return (
    <Stack direction={`row`} bgcolor={`#F7F7F8`}>
      <SideBar />
      <Stack py={`24px`} width={904} height={`100%`}>
        <Stack
          direction={`row`}
          alignItems={`center`}
          justifyContent={`space-between`}
        >
          <Typography fontSize={22} fontWeight={700} ml={`32px`}>
            Breakfast
          </Typography>
          <AddFoodModal />
        </Stack>
      </Stack>
    </Stack>
  );
};
