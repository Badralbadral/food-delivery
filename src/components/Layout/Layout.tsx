import { Box, Stack } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <Stack alignItems={"center"}>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Stack>
  );
};
