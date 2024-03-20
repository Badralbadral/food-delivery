import {
  AppBar,
  Container,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Logo } from "@/svgs/Logo";

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

export const Header = () => {
  return (
    <AppBar
      sx={{ backgroundColor: `white`, width: 1210, boxShadow: `none` }}
      position="static"
    >
      <Container>
        <Toolbar>
          <Logo />
          <Stack direction={`row`}>
            {pages.map((page) => {
              return (
                <MenuItem key={page}>
                  <Typography fontSize={14} fontWeight={700} color={"black"}>
                    {page}
                  </Typography>
                </MenuItem>
              );
            })}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
