import { Stack } from "@mui/material";
import { sales } from "@/utils/dummy-Data";
import { Card } from "@/components/Home/index";

export const FoodCards = () => {
  return (
    <Stack>
      <Card title=" Хямдралтай" data={sales} />
    </Stack>
  );
};