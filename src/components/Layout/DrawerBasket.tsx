import { Basket } from "@/svgs/Basket";
import { Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { NumericFormat } from "react-number-format";
import { styleForDrawer, DrawerCardsArr } from "@/utils/dummy-data";
import { DarwerCard } from "./DrawerCard";
export const DrawerBasket = () => {
  const [open, setOpen] = React.useState(false);
  let p = 0;
  let total = 0;
  DrawerCardsArr.map((value) => {
    if (value.sale > 0) {
      p = value.price - (value.price * value.sale) / 100;
    } else {
      p = value.price;
    }
    total += p * value.count;
  });
  const DrawerList = (
    <Stack width={546} height={`102%`} role="presentation">
      <Stack zIndex={1000} bgcolor={`white`} position={`fixed`}>
        <Stack
          direction={`row`}
          justifyContent={`center`}
          alignItems={`center`}
          width={538}
          height={58}
        >
          <ArrowBackIosIcon
            onClick={() => setOpen(false)}
            sx={{ position: `relative`, right: 150, color: `black` }}
          />
          <Typography pr={8} fontSize={20} fontWeight={900}>
            Таны сагс
          </Typography>
        </Stack>
        <Divider />
      </Stack>
      <Stack width={546} height={`100%`} mt={8} zIndex={100}>
        {DrawerCardsArr.map((val, index) => {
          return (
            <Stack key={index}>
              <DarwerCard data={val} />
            </Stack>
          );
        })}
      </Stack>
      <Stack height={122}>
        <Divider />
        <Stack
          bgcolor={`white`}
          zIndex={1000}
          direction={`row`}
          justifyContent={`space-between`}
          px={`32px`}
          pt={`17px`}
        >
          <Stack mt={0.6}>
            <Typography color={`#5E6166`} fontSize={18}>
              Нийт төлөх дүн
            </Typography>
            <NumericFormat
              style={styleForDrawer}
              value={total}
              thousandSeparator=","
              suffix="₮"
              disabled
            />
          </Stack>
          <Button
            sx={{
              bgcolor: `#18BA51`,
              width: 256,
              color: `white`,
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
