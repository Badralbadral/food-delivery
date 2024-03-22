import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Logo } from "@/svgs/Logo";
import { Search } from "@/svgs/Search";
import { Basket } from "@/svgs/Basket";
import { UserSvg } from "@/svgs/UserSvg";

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

export const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: `white`,
        height: 51,
        boxShadow: `none`,
        justifyContent: "center",
      }}
    >
      <Stack
        direction={`row`}
        alignItems={"center"}
        spacing={`285px`}
        justifyContent={`center`}
      >
        <Stack direction={`row`} spacing={3} alignItems={"center"}>
          <Logo />
          <Stack direction={`row`} spacing={`8px`}>
            {pages.map((page) => {
              return (
                <Button key={page}>
                  <Typography fontSize={14} fontWeight={700} color={"black"}>
                    {page}
                  </Typography>
                </Button>
              );
            })}
          </Stack>
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
              component={"input"}
              placeholder="Хайх"
              height={31}
              width={`200px`}
              border={`none`}
              fontSize={14}
            ></Box>
          </Stack>
          <Stack direction={`row`} spacing={4}>
            <Stack
              direction={`row`}
              alignItems={"center"}
              fontSize={14}
              fontWeight={700}
              spacing={1}
            >
              <MenuItem sx={{ gap: `9px`, borderRadius: `5px` }}>
                <Basket />
                <Typography fontSize={14} fontWeight={700}>
                  {" "}
                  Сагс
                </Typography>
              </MenuItem>
            </Stack>
            <Stack direction={`row`} alignItems={"center"} spacing={1}>
              <MenuItem sx={{ gap: `9px`, borderRadius: `5px` }}>
                <UserSvg />
                <Typography fontSize={14} fontWeight={700}>
                  Нэвтрэх
                </Typography>
              </MenuItem>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </AppBar>
  );
};
