import { Basket } from "@/svgs/Basket";
import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { NumericFormat } from "react-number-format";
import {
  styleForDrawer,
  styleForDrawerCardBtn,
  DrawerCardsArr,
} from "@/utils/dummy-data";
export const DrawerBasket = () => {
  const [open, setOpen] = React.useState(false);
  const DrawerList = (
    <Stack width={546} height={`100%`} role="presentation">
      <Stack>
        <Stack
          my={`15px`}
          direction={`row`}
          justifyContent={`center`}
          alignItems={`center`}
          width={538}
          height={48}
        >
          <Button onClick={() => setOpen(false)}>
            <ArrowBackIosIcon
              onClick={() => setOpen(false)}
              sx={{ position: `relative`, right: 150, color: `black` }}
            />
          </Button>
          <Typography pr={8} fontSize={20} fontWeight={900}>
            Таны сагс
          </Typography>
        </Stack>
        <Divider sx={{ mb: `10px` }} />
      </Stack>
      <Stack width={546} height={`100%`}>
        {DrawerCardsArr.map((val, index) => {
          return (
            <Stack key={index}>
              <Stack
                direction={`row`}
                width={538}
                height={182}
                spacing={`16px`}
                justifyContent={`center`}
                alignItems={`center`}
              >
                <Box
                  component="img"
                  src={`${val.img}`}
                  width={245}
                  height={150}
                  bgcolor={`gray`}
                ></Box>
                <Stack width={245} height={150}>
                  <Typography fontSize={18} fontWeight={600}>
                    {val.foodName}
                  </Typography>
                  <Typography fontSize={18} fontWeight={600} color={`#18BA51`}>
                    {val.price}
                  </Typography>
                  <Stack width={245} color={`#767676`} mb={1}>
                    {val.ingredients}
                  </Stack>
                  <Stack
                    direction={`row`}
                    width={151}
                    justifyContent={`space-between`}
                    alignItems={`center`}
                  >
                    <Button style={styleForDrawerCardBtn}>-</Button>
                    {val.quantity}
                    <Button style={styleForDrawerCardBtn}>+</Button>
                  </Stack>
                </Stack>
              </Stack>
              <Divider />
            </Stack>
          );
        })}
      </Stack>
      <Stack height={122}>
        <Divider sx={{ mb: `15px` }} />
        <Stack
          direction={`row`}
          justifyContent={`space-between`}
          px={`32px`}
          py={`10px`}
        >
          <Stack>
            <Typography color={`#5E6166`} fontSize={18}>
              Нийт төлөх дүн
            </Typography>
            <NumericFormat
              style={styleForDrawer}
              value="34,800"
              thousandSeparator=","
              suffix="₮"
              disabled
            />
          </Stack>
          <Button
            sx={{
              bgcolor: `#18BA51`,
              width: 256,
              height: 48,
              color: `white`,
              fontSize: 14,
            }}
          >
            Захиалах
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
  return (
    <Stack
      direction={`row`}
      alignItems={"center"}
      fontSize={14}
      fontWeight={700}
    >
      <Button
        sx={{
          textTransform: `none`,
          gap: `9px`,
          borderRadius: `5px`,
          fontSize: 15,
          fontWeight: 700,
          color: `black`,
        }}
        onClick={() => setOpen(true)}
      >
        <Basket />
        Сагс
      </Button>
      <Drawer anchor="right" open={open}>
        {DrawerList}
      </Drawer>
    </Stack>
  );
};
