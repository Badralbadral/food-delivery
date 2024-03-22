import { Box, Stack } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack alignItems={"center"}>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Stack>
  );
};
