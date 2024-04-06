import { Stack, Typography } from "@mui/material";
import { SideBar } from "./SideBar";
import React from "react";
import { AddFoodModal } from "./AddFoodModal";
import AddIcon from "@mui/icons-material/Add";
import { useFoodData, ContextType } from "@/context/FoodContext";
import { CrudCards } from "./CrudCards";
import foodData from "@/dummy.json";

export const Crud = () => {
  const { category } = useFoodData() as ContextType;
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
            {category}
          </Typography>
          <AddFoodModal />
        </Stack>
        <Stack
          display={`none`}
          width={904}
          alignItems={`center`}
          spacing={`30px`}
          mt={7}
        >
          <AddIcon sx={{ color: `#18BA51`, fontSize: 80 }} />
          <Typography color={`#808080`}>
            Уучлаарай, Таны меню хоосон байна.
          </Typography>
        </Stack>
        <Stack px={`32px`}>
          <CrudCards
            data={foodData.filter((val) => {
              return val.category == category;
            })}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
