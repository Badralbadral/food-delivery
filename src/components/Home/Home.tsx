import { Stack } from "@mui/material";
import { HeroBanner, ControlCards, FoodCards } from ".";

export const Home = () => {
  return (
    <Stack width={1440} alignItems={`center`} spacing={`122px`}>
      <HeroBanner />
      <ControlCards />
      <FoodCards />
    </Stack>
  );
};
