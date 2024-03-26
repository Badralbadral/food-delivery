import {
  AppBar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Logo } from "@/svgs/Logo";
import { Search } from "@/svgs/Search";
import { UserSvg } from "@/svgs/UserSvg";
import React from "react";
import { DrawerBasket } from "./DrawerBasket";

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

export const Header = () => {
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        backgroundColor: `white`,
        height: 51,
        boxShadow: `none`,
        justifyContent: "center",
        minWidth: 1250,
      }}
    >
      <Stack
        direction={`row`}
        alignItems={"center"}
        spacing={`315px`}
        justifyContent={`center`}
      >
        <Stack direction={`row`} spacing={3} alignItems={"center"}>
          <Logo />
          {pages.map((page) => {
            return (
              <Button
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: `black`,
                  ":focus": {
                    bgcolor: `white`,
                    color: theme.palette.primary.main,
                  },
                }}
                href={
                  page == "НҮҮР"
                    ? "/"
                    : page == "ХООЛНЫ ЦЭС"
                    ? "/menu"
                    : "/del-area"
                }
                key={page}
              >
                {page}
              </Button>
            );
          })}
        </Stack>
        <Stack
          direction={`row`}
          color={"black"}
          alignItems={"center"}
          spacing={2}
        >
          <Stack
            direction={`row`}
            bgcolor={`white`}
            borderRadius={`8px`}
            pl={`15px`}
            width={228}
            height={24}
            alignItems={"center"}
            spacing={1}
            border={1}
            borderColor="black"
            overflow={"hidden"}
            py={`14px`}
          >
            <Search />
            <Box
              sx={{ ":focus": { outline: "none" } }}
              component={"input"}
              placeholder="Хайх"
              height={31}
              width={`200px`}
              border={`none`}
              fontSize={14}
            ></Box>
          </Stack>
          <Stack direction={`row`} spacing={4}>
            <DrawerBasket />
            <Button
              href="/login"
              sx={{ gap: `9px`, borderRadius: `5px`, textTransform: `none` }}
            >
              <Stack direction={`row`} alignItems={"center"} spacing={1}>
                <UserSvg />
                <Typography fontSize={15} fontWeight={700} color={"black"}>
                  Нэвтрэх
                </Typography>
              </Stack>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </AppBar>
  );
};
