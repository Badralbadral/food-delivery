import { Basket } from "@/svgs/Basket";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
type Anchor = "right";

export const DrawerBasket = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, newOpen: boolean) => () => {
    setOpen(newOpen);
    setState({ ...state, [anchor]: open });
  };

  const DrawerList = (
    <Box
      sx={{
        width: 546,
      }}
      role="presentation"
    >
      <Stack>
        <Stack
          my={`15px`}
          direction={`row`}
          justifyContent={`center`}
          alignItems={`center`}
          width={538}
          height={48}
        >
          <Button onClick={toggleDrawer(`right`, false)}>
            <ArrowBackIosIcon
              onClick={toggleDrawer(`right`, false)}
              sx={{ position: `relative`, right: 150, color: `black` }}
            />
          </Button>
          <Typography pr={8} fontSize={20} fontWeight={900}>
            Таны сагс
          </Typography>
        </Stack>
        <Divider sx={{ mb: `15px` }} />
      </Stack>
      <Stack height={172}>
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
            <Typography fontSize={18} fontWeight={700}>
              34,800₮
            </Typography>
          </Stack>
          <Button
            sx={{
              bgcolor: theme.palette.primary.main,
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
    </Box>
  );
  return (
    <Stack
      direction={`row`}
      alignItems={"center"}
      fontSize={14}
      fontWeight={700}
      spacing={1}
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
        onClick={toggleDrawer(`right`, true)}
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
